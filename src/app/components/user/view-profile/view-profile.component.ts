import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {BoardComponent} from '../../board/board.component';
import {BoardService} from '../../../services/board/board.service';

@Component({
    selector: 'app-view-profile',
    templateUrl: './view-profile.component.html',
    styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
    // properties
    activeUser: {};
    viewedUserId: string;
    viewedUser = {};
    isFollowing: Boolean =  false;
    following: any[];
    followers: any[];
    boards: [{}];
    companies;

    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private sharedService: SharedService,
        private boardService: BoardService) { }

    ngOnInit() {

        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                  this.viewedUserId = params['viewedUserId'];
                  this.activeUser = this.sharedService.user || {};
                  this.userService.findUserById(this.viewedUserId).subscribe((user: any) => {
                    this.viewedUser = user;
                    this.following = [];
                    for (let i = 0; i < this.viewedUser['following'].length; i++) {
                      this.userService.findUserById(this.viewedUser['following'][i]).subscribe((res: any) => {
                        this.following.push(res);
                      });
                    }
                    this.getFollowerProfiles();
                    this.getComapnies();
                  });
                  this.boardService.findBoardsByUser(this.viewedUserId).subscribe((boards) => {
                    this.boards = boards;
                  });
                }
            );
    }

    getFollowerProfiles() {
      this.followers = [];
      for (let i = 0; i < this.viewedUser['followedBy'].length ; i++) {
        this.userService.findUserById(this.viewedUser['followedBy'][i]).subscribe((res: any) => {
          this.followers.push(res);
        });
      }
    }

  getComapnies() {
    this.companies = [];
    for (let i = 0; i < this.viewedUser['companies'].length ; i++) {
      this.userService.findUserById(this.viewedUser['companies'][i]).subscribe((res: any) => {
        this.companies.push(res);
      });
    }
  }

    follow() {
      this.viewedUser['followedBy'].push(this.activeUser['_id']);
      this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((user: any) => {
        this.activeUser['following'].push(this.viewedUserId);
        this.userService.updateUser(this.activeUser['_id'], this.activeUser).subscribe((thirdUser: any) => {
          this.isFollowing = true;
          this.activeUser = thirdUser;
        });
        this.userService.findUserById(this.viewedUserId).subscribe((newUser: any) => {
          this.getFollowerProfiles();
        });
      });
    }

    unfollow() {
        const userfollowedBy = this.viewedUser['followedBy'];
        userfollowedBy.splice(userfollowedBy.indexOf(this.activeUser['_id']), 1);
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((user: any) => {
            const userFollowing = this.activeUser['following'];
            userFollowing.splice(userFollowing.indexOf(this.viewedUserId), 1);
            this.userService.updateUser(this.activeUser['_id'], this.activeUser).subscribe((thirdUser: any) => {
                this.isFollowing = false;
                this.activeUser = thirdUser;
            });
          this.userService.findUserById(this.viewedUserId).subscribe((newUser: any) => {
            this.getFollowerProfiles();
          });
        });
    }

    hire() {
      this.viewedUser['companies'].push(this.activeUser['_id']);
      this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((user: any) => {
        this.activeUser['designers'].push(this.viewedUserId);
        this.userService.updateUser(this.activeUser['_id'], this.activeUser).subscribe((thirdUser: any) => {
          this.isFollowing = true;
          this.activeUser = thirdUser;
        });
        this.userService.findUserById(this.viewedUserId).subscribe((newUser: any) => {
          this.getComapnies();
        });
      });
    }
}

