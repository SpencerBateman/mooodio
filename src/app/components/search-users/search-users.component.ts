import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  user: {};
  users: [{}];
  searchTerm: string;

  constructor(
    private userService: UserService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user || {};
  }

  searchUsers() {
    this.userService.searchUsers(this.searchTerm).subscribe((res: any) => {
      this.users = res;
    });
  }

}
