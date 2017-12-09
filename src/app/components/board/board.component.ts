import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../services/flickr.service.client';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  isSearching: boolean;
  searchText: string;
  photos: any;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.isSearching = false;
    this.photos = [];
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    console.log(photo);
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
  }

  enableOverlay() {
    this.isSearching = true;
  }

  disableOverlay() {
    this.isSearching = false;
  }
}
