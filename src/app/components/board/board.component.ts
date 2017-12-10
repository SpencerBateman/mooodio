import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../services/flickr.service.client';
import { ImageService } from '../../services/image/image.service';
import {ActivatedRoute} from '@angular/router';
import {BoardService} from '../../services/board/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  isSearching: boolean;
  searchText: string;
  photos: [{}];
  boardId: string;
  board: {};

  constructor(private flickrService: FlickrService,
              private imageService: ImageService,
              private activatedRoute: ActivatedRoute,
              private boardService: BoardService) { }

  ngOnInit() {
    this.isSearching = false;
    this.activatedRoute.params.subscribe((params: any) => {
      this.boardId = params['boardId'];
      this.boardService.findBoardById(this.boardId).subscribe((board: any) => {
        this.board = board;
      });
      this.imageService.findImagesByBoardId(this.boardId).subscribe((images: any) => {
        this.photos = images;
      });
    });
  }

  // Query flickr's api for photos
  searchPhotos() {
    this.flickrService.searchPhotos(this.searchText).subscribe((data: any) => {
      let val = data._body;
      val = val.replace('jsonFlickrApi(', '');
      val = val.substring(0, val.length - 1);
      val = JSON.parse(val);
      const photoList = val.photos;
      photoList.photo = photoList.photo.slice(0, 16);
      this.photos = photoList;
    });
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const tempImage = {left: 0, top: 0, url: url};
    this.imageService.createImage(this.boardId, tempImage).subscribe((res: any) => {
      this.boardService.findBoardById(this.boardId).subscribe((board: any) => {
        this.board = board;
      });
      this.imageService.findImagesByBoardId(this.boardId).subscribe((images: any) => {
        this.photos = images;
        this.disableOverlay();
      });
    });
  }

  enableOverlay() {
    this.isSearching = true;
  }

  disableOverlay() {
    this.isSearching = false;
  }
}
