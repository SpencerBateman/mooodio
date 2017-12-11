import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  boards: any;
  following: any[];
  followers: any[];
  isEditingProfile: boolean;

  constructor(
    private userService: UserService,
    private boardService: BoardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.isEditingProfile = false;

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
      this.isEditingProfile = false;
    });
  }

  editProfile() {
    this.isEditingProfile = true;
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
