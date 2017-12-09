import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BoardService {
    constructor(private _http: Http) {}

    baseUrl = environment.baseUrl;

    createBoard(userId: string, board: any) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/board', board)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findBoardById(boardId: string) {
        return this._http.get(this.baseUrl + '/api/board/' + boardId)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findBoardsByUser(userId: string) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/board')
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    updateBoard(boardId: string, board: any) {
        return this._http.put(this.baseUrl + '/api/board/' + boardId,
            board)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    deleteBoard(boardId: string) {
        return this._http.delete(this.baseUrl + '/api/board/' + boardId)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }
}


