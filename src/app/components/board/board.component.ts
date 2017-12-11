import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlickrService } from '../../services/flickr.service.client';
import { ImageService } from '../../services/image/image.service';
import { BoardService } from '../../services/board/board.service';
import {CommentService} from '../../services/comment.service.client';
import {SharedService} from '../../services/shared.service.client';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  isSearching: boolean;
  searchText: string;
  photos: [{}];
  flickrPhotos: [{}];
  boardId: string;
  board: {};
  editingName: boolean;
  comments: [{}];
  editingComment: boolean;
  commentText: string;
  user: {};

  constructor(private flickrService: FlickrService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService,
    private commentService: CommentService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.isSearching = false;
    this.editingName = false;
    this.activatedRoute.params.subscribe((params: any) => {
      this.boardId = params['boardId'];
      this.user = this.sharedService.user || {};
      this.boardService.findBoardById(this.boardId).subscribe((board: any) => {
        this.board = board;
      });
      this.imageService.findImagesByBoardId(this.boardId).subscribe((images: any) => {
        this.photos = images;
      });
      this.commentService.findCommentsByBoardId(this.boardId).subscribe((comments: any) => {
        this.comments = comments;
      });
    });
  }

  editName() {
    this.editingName = true;
  }

  saveName() {
    this.boardService.updateBoard(this.boardId, this.board).subscribe(() => {
      this.editingName = false;
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
      this.flickrPhotos = photoList;
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

  savePosition(posObject) {
    const id = posObject.id;
    const position = posObject.pos;
    this.imageService.findImageById(id).subscribe((image: any) => {
      image.top = position.top;
      image.left = position.left;
      this.imageService.updateImage(id, image).subscribe((res: any) => {
      });
    });
  }

  deletePhoto(photo) {
    this.imageService.deleteImage(photo._id, this.board['_id']).subscribe((res) => {
      console.log('deleted');
      this.boardService.findBoardById(this.boardId).subscribe((board: any) => {
        this.board = board;
      });
    });
  }

  createComment() {
    const comment = {'author': this.user['_id'], 'authorName': this.user['name'], 'text': this.commentText};
    this.commentService.createComment(this.boardId, comment).subscribe((res: any) => {
      this.editingComment = false;
      this.commentService.findCommentsByBoardId(this.boardId).subscribe((comments: any) => {
        this.comments = comments;
      });
      console.log('COMMENTS YO');
    });
  }
}
