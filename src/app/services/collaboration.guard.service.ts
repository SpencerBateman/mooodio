import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, CanActivate} from '@angular/router';
import { UserService } from './user.service.client';
import {SharedService} from './shared.service.client';
import {log} from 'util';

@Injectable()
export class CollaborationGuardService implements OnInit, CanActivate {
  constructor(
    private userService: UserService,
    private sharedService: SharedService) {}

    ngOnInit() {

    }

  canActivate() {
    const logInResult = this.userService.loggedIn();
    if (logInResult) {
      const user = this.sharedService.user;
    }
    return true;
  }
}

