import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class CommentService {

  constructor(private _http: Http) {}

  baseUrl = environment.baseUrl;

  api = {
    'createComment'       : this.createComment,
    'findCommentsByBoardId': this.findCommentsByBoardId,
    'findCommentById'     : this.findCommentById,
    'updateComment'       : this.updateComment,
    'deleteComment'       : this.deleteComment,
  };

  createComment(boardId: string, comment: any) {
    return this._http.post(this.baseUrl + '/api/board/' + boardId + '/comment', comment)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCommentById(commentId: string) {
    return this._http.get(this.baseUrl + '/api/comment/' + commentId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCommentsByBoardId(boardId: string) {
    return this._http.get(this.baseUrl + '/api/board/' + boardId + '/comment')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateComment(commentId: string, comment: any) {
    return this._http.put(this.baseUrl + '/api/comment/' + commentId, comment)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteComment(commentId: string) {
    return this._http.delete(this.baseUrl + '/api/comment/' + commentId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
