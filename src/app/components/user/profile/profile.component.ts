import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties
  userId: string;
  user = {};

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user['_id'];
        }
      );
  }

  updateProfile(navigate: boolean) {
    this.userService.updateUser(this.userId, this.user).subscribe(
      (data: any) => {
        if (navigate) {
          this.router.navigate(['/viewedUser/' + data._id + '/website']);
        }
      }
    );
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

