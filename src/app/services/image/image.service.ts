import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class ImageService {

    constructor(private _http: Http) {}

    baseUrl = environment.baseUrl;

    api = {
        'createImage'       : this.createImage,
        'findImagesByBoardId': this.findImagesByBoardId,
        'findImageById'     : this.findImageById,
        'updateImage'       : this.updateImage,
        'deleteImage'       : this.deleteImage,
        'updateImageOrder'  : this.updateImageOrder
    };

    updateImageOrder(boardId: string, startIndex: number, endIndex: number) {
        return this._http.put(this.baseUrl + boardId + '/image?start=' + startIndex + '&end=' + endIndex, '')
            .map((res: Response) => {
                return res.json();
            });
    }

    createImage(boardId: string, image: any) {
        return this._http.post(this.baseUrl + '/api/board/' + boardId + '/image', image)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findImageById(imageId: string) {
        return this._http.get(this.baseUrl + '/api/image/' + imageId)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findImagesByBoardId(boardId: string) {
        return this._http.get(this.baseUrl + '/api/board/' + boardId + '/image')
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    updateImage(imageId: string, image: any) {
        return this._http.put(this.baseUrl + '/api/image/' + imageId, image)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    deleteImage(imageId: string) {
        return this._http.delete(this.baseUrl + '/api/image/' + imageId)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }
}
