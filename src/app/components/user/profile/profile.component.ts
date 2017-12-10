import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import { BoardService } from '../../../services/board/board.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  boards: any;

  constructor(
    private userService: UserService,
    private boardService: BoardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user['_id'];
          this.boardService.findBoardsByUser(this.userId).subscribe((boards) => {
            this.boards = boards;
          });
        }
      );
  }

  updateProfile() {
    this.userService.updateUser(this.userId, this.user).subscribe((data: any) => {
    });
  }

  createBoardAndNavigate() {
    this.userService.updateUser(this.userId, this.user).subscribe((data: any) => {
      this.boardService.createBoard(this.userId).subscribe((board) => {
        this.router.navigate(['/board/' + board._id]);
      });
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.router.navigate(['/login']);
        }
      );
  }

}

