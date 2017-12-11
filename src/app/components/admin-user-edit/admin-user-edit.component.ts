import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../services/shared.service.client';
import {BoardService} from '../../services/board/board.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  viewedUserId: string;
  viewedUser: {};
  activeUser: {};
  boards: any[];
  companies: any[];
  followers: any[];
  following: any[];
  designers: any[];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private boardService: BoardService
  ) { }

  ngOnInit() {
    this.activeUser = this.sharedService.user;
    this.activatedRoute.params.subscribe((params: any) => {
      this.viewedUserId = params['viewedUserId'];
      this.userService.findUserById(this.viewedUserId).subscribe((user: any) => {
        this.viewedUser = user;
        this.boardService.findBoardsByUser(this.viewedUserId).subscribe((boards) => {
          this.boards = boards;
        });
        this.following = [];
        for (let i = 0; i < this.viewedUser['following'].length; i++) {
          this.userService.findUserById(this.viewedUser['following'][i]).subscribe((res: any) => {
            this.following.push(res);
          });
        }
        this.followers = [];
        for (let i = 0; i < this.viewedUser['followedBy'].length ; i++) {
          this.userService.findUserById(this.viewedUser['followedBy'][i]).subscribe((res: any) => {
            this.followers.push(res);
          });
        }
        this.designers = [];
        for (let i = 0; i < this.viewedUser['designers'].length ; i++) {
          this.userService.findUserById(this.viewedUser['designers'][i]).subscribe((res: any) => {
            this.designers.push(res);
          });
        }
        this.companies = [];
        for (let i = 0; i < this.viewedUser['companies'].length ; i++) {
          this.userService.findUserById(this.viewedUser['companies'][i]).subscribe((res: any) => {
            this.companies.push(res);
          });
        }
      });
    });
  }

  updateProfile() {
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.viewedUser = data;
    });
  }

  removeBoard(boardId) {
    const curBoards = this.viewedUser['boards'];
    curBoards.splice(curBoards.indexOf(boardId), 1);
    this.viewedUser['boards'] = curBoards;
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.boardService.deleteBoard(boardId).subscribe((res: any) => {
        this.viewedUser = data;
        this.boardService.findBoardsByUser(this.viewedUserId).subscribe((boards: any) => {
          this.boards = boards;
        });
      });
    });
  }

  removeFollowed(followed) {
    const curFolloweds = this.viewedUser['following'];
    curFolloweds.splice(curFolloweds.indexOf(followed['_id']), 1);
    this.viewedUser['following'] = curFolloweds;
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.viewedUser = data;
      const tmp = followed['followedBy'];
      tmp.splice(tmp.indexOf(this.viewedUserId), 1);
      followed['followedBy'] = tmp;
      this.userService.updateUser(followed['_id'], followed).subscribe((res: any) => {
        this.getFollowedProfiles();
      });
    });
  }

  getFollowedProfiles() {
    this.following = [];
    for (let i = 0; i < this.viewedUser['following'].length ; i++) {
      this.userService.findUserById(this.viewedUser['following'][i]).subscribe((res: any) => {
        this.following.push(res);
      });
    }
  }

  removeFollower(follower) {
    const curFollowers = this.viewedUser['followedBy'];
    curFollowers.splice(curFollowers.indexOf(follower['_id']), 1);
    this.viewedUser['followedBy'] = curFollowers;
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.viewedUser = data;
      const tmp = follower['followers'];
      tmp.splice(tmp.indexOf(this.viewedUserId), 1);
      follower['following'] = tmp;
      this.userService.updateUser(follower['_id'], follower).subscribe((res: any) => {
        this.getFollowerProfiles();
      });
    });
  }

  getFollowerProfiles() {
    this.followers = [];
    for (let i = 0; i < this.viewedUser['followedBy'].length ; i++) {
      this.userService.findUserById(this.viewedUser['followedBy'][i]).subscribe((res: any) => {
        this.followers.push(res);
      });
    }
  }

  removeCompany(company) {
    const curCompanies = this.viewedUser['companies'];
    curCompanies.splice(curCompanies.indexOf(company['_id']), 1);
    this.viewedUser['companies'] = curCompanies;
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.viewedUser = data;
      const tmp = company['designers'];
      tmp.splice(tmp.indexOf(this.viewedUserId), 1);
      company['designers'] = tmp;
      this.userService.updateUser(company['_id'], company).subscribe((res: any) => {
        this.getCompanyProfiles();
      });
    });
  }

  getCompanyProfiles() {
    this.companies = [];
    for (let i = 0; i < this.viewedUser['companies'].length ; i++) {
      this.userService.findUserById(this.viewedUser['companies'][i]).subscribe((res: any) => {
        this.companies.push(res);
      });
    }
  }

  removeDesigner(designer) {
    const curDesigners = this.viewedUser['designers'];
    curDesigners.splice(curDesigners.indexOf(designer['_id']), 1);
    this.viewedUser['designers'] = curDesigners;
    this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe((data: any) => {
      this.viewedUser = data;
      const tmp = designer['companies'];
      tmp.splice(tmp.indexOf(this.viewedUserId), 1);
      designer['companies'] = tmp;
      this.userService.updateUser(designer['_id'], designer).subscribe((res: any) => {
        this.getDesignerProfiles();
      });
    });
  }

  getDesignerProfiles() {
    this.designers = [];
    for (let i = 0; i < this.viewedUser['designers'].length ; i++) {
      this.userService.findUserById(this.viewedUser['designers'][i]).subscribe((res: any) => {
        this.designers.push(res);
      });
    }
  }
}
