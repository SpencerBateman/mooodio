import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service.client';
import {UserService} from '../../services/user.service.client';
import {BoardService} from '../../services/board/board.service';
import {User} from '../../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: {};
  searchTerm: string;
  searchContext: string;
  searchTarget: string;
  boards: any[];
  users: any[];

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private boardService: BoardService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.sharedService.user || {};
    this.searchContext = 'USERS';
    this.searchTarget = 'DESIGNER';
  }

  search() {
    if (this.searchContext === 'USERS') {
      this.userService.searchUsers(this.searchTerm).subscribe((res: any) => {
        this.users = res.filter((el) => el['role'] === this.searchTarget);
      });
    } else if (this.searchContext === 'BOARDS') {
      this.boardService.searchBoards(this.searchTerm).subscribe((res: any) => {
        this.boards = res;
      });
    }

  }

  searchDesigners() {
    this.searchContext = 'USERS';
    this.searchTarget = 'DESIGNER';
    this.boards = [];
    this.users = [];
  }

  searchCompanies() {
    this.searchContext = 'USERS';
    this.searchTarget = 'COMPANY';
    this.boards = [];
    this.users = [];
  }

  searchBoards() {
    this.searchContext = 'BOARDS';
    this.searchTarget = '';
    this.users = [];
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((res: any) => {
      this.search();
    });
  }

  deleteBoard(boardId) {
    this.boardService.deleteBoard(boardId).subscribe((res: any) => {
      this.search();
    });
  }

  createUser() {
    const newUser: User = new User('', '', '', '', [], [], 'DESIGNER');
    this.userService.register(newUser)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/adminEdit/' + data['_id']]);
        });
  }

}
