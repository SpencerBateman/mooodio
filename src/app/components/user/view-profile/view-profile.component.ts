import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

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
    following: Boolean =  false;

    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private sharedService: SharedService) { }

    ngOnInit() {

        this.activatedRoute.params
            .subscribe(
                (params: any) => {
                  this.viewedUserId = params['viewedUserId'];
                  this.activeUser = this.sharedService.user || {};
                  this.userService.findUserById(this.viewedUserId).subscribe((user: any) => {
                    this.viewedUser = user;
                  });
                }
            );
    }

    follow() {
      this.viewedUser['followedBy'].push(this.activeUser['_id']);
      this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((user: any) => {
        this.activeUser['following'].push(this.viewedUserId);
        this.userService.updateUser(this.activeUser['_id'], this.activeUser).subscribe((thirdUser: any) => {
          this.following = true;
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
                this.following = false;
            });
        });
    }
}

