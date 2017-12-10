import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ViewProfileComponent implements OnInit {
    // properties
    activeUser: {};
    viewedUserId: string;
    user = {};
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
                    this.user = user;
                  });
                }
            );
    }

    follow() {
      this.user['followedBy'].push(this.activeUser['_id']);
      this.userService.updateUser(this.viewedUserId, this.user).subscribe((user: any) => {
        this.activeUser['following'].push(this.viewedUserId);
        this.userService.updateUser(this.activeUser['_id'], this.activeUser).subscribe((thirdUser: any) => {
          this.following = true;
        });
      });
    }
    // have the active user followed the viewed user


}

