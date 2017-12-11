import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BoardService} from '../../../services/board/board.service';

@Component({
  selector: 'app-collaborator-search',
  templateUrl: './collaborator-search.component.html',
  styleUrls: ['./collaborator-search.component.css']
})
export class CollaboratorSearchComponent implements OnInit {

  user: {};
  users: [{}];
  searchTerm: string;
  boardId: string;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.sharedService.user || {};
    this.activatedRoute.params.subscribe((params: any) => {
      this.boardId = params['boardId'];
    });
  }

  searchUsers() {
    this.userService.searchUsers(this.searchTerm).subscribe((res: any) => {
      this.users = res;
    });
  }

  addCollaborator(userId) {
    this.boardService.findBoardById(this.boardId).subscribe((board: any) => {
      board['collaborators'].push(userId);
      this.boardService.updateBoard(this.boardId, board).subscribe((res: any) => {
        this.router.navigate(['/board/' + this.boardId]);
      });
    });
  }
}
