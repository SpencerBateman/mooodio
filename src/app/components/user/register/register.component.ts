import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { SharedService } from '../../../services/shared.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  username: string;
  firstName: string;
  lastName: string;
  password: string;
  conf_password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.conf_password = this.registerForm.value.conf_password;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;

    if (!this.username || !this.password || !this.conf_password) {
      // this.passwordFlag = false;
      this.errorFlag = true;
      this.errorMsg = 'Please enter at least a username, password, and password confirmation';
    } else {
      if (this.password === this.conf_password) {
        const newUser: User = new User(this.username, this.password, this.firstName, this.lastName, [], []);
        this.userService.register(newUser)
          .subscribe(
            (data: any) => {
              this.sharedService.user = data;
              this.router.navigate(['/profile']);
            });
      } else {
        // this.passwordFlag = true;
        this.errorMsg = 'Passwords don\'t match!';
      }
    }
  }
}
