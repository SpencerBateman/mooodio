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
  following: any[];
  followers: any[];

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
          this.following = [];
          for (let i = 0; i < this.user['following'].length; i++) {
            this.userService.findUserById(this.user['following'][i]).subscribe((res: any) => {
              this.following.push(res);
            });
          }
          this.followers = [];
          for (let i = 0; i < this.user['followedBy'].length ; i++) {
            this.userService.findUserById(this.user['followedBy'][i]).subscribe((res: any) => {
              this.followers.push(res);
            });
          }
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

  deleteBoard(board) {
    console.log('trying to delete');
    this.boardService.deleteBoard(board._id).subscribe(() => {
      this.boardService.findBoardsByUser(this.userId).subscribe((boards) => {
        this.boards = boards;
      });
    });
  }

}

