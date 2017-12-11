webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_draggable_directive__ = __webpack_require__("../../../../../src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/components/user/view-profile/view-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/components/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_user_edit_admin_user_edit_component__ = __webpack_require__("../../../../../src/app/components/admin-user-edit/admin-user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_board_collaborator_search_collaborator_search_component__ = __webpack_require__("../../../../../src/app/components/board/collaborator-search/collaborator-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__directives_draggable_directive__["a" /* DraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_view_profile_view_profile_component__["a" /* ViewProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_search_users_search_users_component__["a" /* SearchUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_board_collaborator_search_collaborator_search_component__["a" /* CollaboratorSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_11__services_authentication_service_client__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_15__services_board_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_16__services_image_image_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_19__services_comment_service_client__["a" /* CommentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/components/user/view-profile/view-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_users_search_users_component__ = __webpack_require__("../../../../../src/app/components/search-users/search-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_user_edit_admin_user_edit_component__ = __webpack_require__("../../../../../src/app/components/admin-user-edit/admin-user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_board_collaborator_search_collaborator_search_component__ = __webpack_require__("../../../../../src/app/components/board/collaborator-search/collaborator-search.component.ts");












var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'adminEdit/:viewedUserId', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_user_edit_admin_user_edit_component__["a" /* AdminUserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'board/:boardId', component: __WEBPACK_IMPORTED_MODULE_6__components_board_board_component__["a" /* BoardComponent */] },
    { path: 'board/:boardId/addCollaborator', component: __WEBPACK_IMPORTED_MODULE_11__components_board_collaborator_search_collaborator_search_component__["a" /* CollaboratorSearchComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/:viewedUserId', component: __WEBPACK_IMPORTED_MODULE_7__components_user_view_profile_view_profile_component__["a" /* ViewProfileComponent */] },
    { path: 'searchUsers', component: __WEBPACK_IMPORTED_MODULE_8__components_search_users_search_users_component__["a" /* SearchUsersComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin-user-edit/admin-user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-user-edit/admin-user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <label for=\"username\">Username</label>\r\n    <input [(ngModel)]=\"viewedUser['username']\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Alice\">\r\n\r\n    <label for=\"first-name\">First Name</label>\r\n    <input [(ngModel)]=\"viewedUser['firstName']\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\r\n\r\n    <label for=\"last-name\">Last Name</label>\r\n    <input [(ngModel)]=\"viewedUser['lastName']\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\r\n    <div class='padding'></div>\r\n    <button (click)='updateProfile()' class='btn btn-primary'>Save Changes</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ul class=\"container\">\r\n      <h2>Boards</h2>\r\n      <li class='board__preview' *ngFor=\"let board of boards\" >\r\n        <h3 [routerLink]=\"['/board/', board['_id']]\">{{board['name']}}</h3>\r\n        <div (click)=\"removeBoard(board['_id'])\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ul class=\"container\">\r\n      <h2>Companies</h2>\r\n      <li class='company__preview' *ngFor=\"let company of companies\" >\r\n        <h3 [routerLink]=\"['/profile/', company['_id']]\">{{company['username']}}</h3>\r\n        <div (click)=\"removeCompany(company)\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"row\">Following:</span>\r\n    <ul>\r\n      <li *ngFor=\"let followed of following\">\r\n        <h3 [routerLink]=\"['/profile/', followed['_id']]\">{{followed['username']}}</h3>\r\n        <div (click)=\"removeFollowed(followed)\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"row\">Followers:</span>\r\n    <ul>\r\n      <li *ngFor=\"let follower of followers\">\r\n        <h3 [routerLink]=\"['/profile/', follower['_id']]\">{{follower['username']}}</h3>\r\n        <div (click)=\"removeFollower(follower)\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"row\">Designers:</span>\r\n    <ul>\r\n      <li *ngFor=\"let designer of designers\">\r\n        <h3 [routerLink]=\"['/profile/', designer['_id']]\">{{designer['username']}}</h3>\r\n        <div (click)=\"removeDesigner(designer)\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-user-edit/admin-user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserEditComponent = (function () {
    function AdminUserEditComponent(userService, activatedRoute, sharedService, boardService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.boardService = boardService;
    }
    AdminUserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeUser = this.sharedService.user;
        this.activatedRoute.params.subscribe(function (params) {
            _this.viewedUserId = params['viewedUserId'];
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (user) {
                _this.viewedUser = user;
                _this.boardService.findBoardsByUser(_this.viewedUserId).subscribe(function (boards) {
                    _this.boards = boards;
                });
                _this.following = [];
                for (var i = 0; i < _this.viewedUser['following'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['following'][i]).subscribe(function (res) {
                        _this.following.push(res);
                    });
                }
                _this.followers = [];
                for (var i = 0; i < _this.viewedUser['followedBy'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['followedBy'][i]).subscribe(function (res) {
                        _this.followers.push(res);
                    });
                }
                _this.designers = [];
                for (var i = 0; i < _this.viewedUser['designers'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['designers'][i]).subscribe(function (res) {
                        _this.designers.push(res);
                    });
                }
                _this.companies = [];
                for (var i = 0; i < _this.viewedUser['companies'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['companies'][i]).subscribe(function (res) {
                        _this.companies.push(res);
                    });
                }
            });
        });
    };
    AdminUserEditComponent.prototype.updateProfile = function () {
        var _this = this;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.viewedUser = data;
        });
    };
    AdminUserEditComponent.prototype.removeBoard = function (boardId) {
        var _this = this;
        var curBoards = this.viewedUser['boards'];
        curBoards.splice(curBoards.indexOf(boardId), 1);
        this.viewedUser['boards'] = curBoards;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.boardService.deleteBoard(boardId).subscribe(function (res) {
                _this.viewedUser = data;
                _this.boardService.findBoardsByUser(_this.viewedUserId).subscribe(function (boards) {
                    _this.boards = boards;
                });
            });
        });
    };
    AdminUserEditComponent.prototype.removeFollowed = function (followed) {
        var _this = this;
        var curFolloweds = this.viewedUser['following'];
        curFolloweds.splice(curFolloweds.indexOf(followed['_id']), 1);
        this.viewedUser['following'] = curFolloweds;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.viewedUser = data;
            var tmp = followed['followedBy'];
            tmp.splice(tmp.indexOf(_this.viewedUserId), 1);
            followed['followedBy'] = tmp;
            _this.userService.updateUser(followed['_id'], followed).subscribe(function (res) {
                _this.getFollowedProfiles();
            });
        });
    };
    AdminUserEditComponent.prototype.getFollowedProfiles = function () {
        var _this = this;
        this.following = [];
        for (var i = 0; i < this.viewedUser['following'].length; i++) {
            this.userService.findUserById(this.viewedUser['following'][i]).subscribe(function (res) {
                _this.following.push(res);
            });
        }
    };
    AdminUserEditComponent.prototype.removeFollower = function (follower) {
        var _this = this;
        var curFollowers = this.viewedUser['followedBy'];
        curFollowers.splice(curFollowers.indexOf(follower['_id']), 1);
        this.viewedUser['followedBy'] = curFollowers;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.viewedUser = data;
            var tmp = follower['followers'];
            tmp.splice(tmp.indexOf(_this.viewedUserId), 1);
            follower['following'] = tmp;
            _this.userService.updateUser(follower['_id'], follower).subscribe(function (res) {
                _this.getFollowerProfiles();
            });
        });
    };
    AdminUserEditComponent.prototype.getFollowerProfiles = function () {
        var _this = this;
        this.followers = [];
        for (var i = 0; i < this.viewedUser['followedBy'].length; i++) {
            this.userService.findUserById(this.viewedUser['followedBy'][i]).subscribe(function (res) {
                _this.followers.push(res);
            });
        }
    };
    AdminUserEditComponent.prototype.removeCompany = function (company) {
        var _this = this;
        var curCompanies = this.viewedUser['companies'];
        curCompanies.splice(curCompanies.indexOf(company['_id']), 1);
        this.viewedUser['companies'] = curCompanies;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.viewedUser = data;
            var tmp = company['designers'];
            tmp.splice(tmp.indexOf(_this.viewedUserId), 1);
            company['designers'] = tmp;
            _this.userService.updateUser(company['_id'], company).subscribe(function (res) {
                _this.getCompanyProfiles();
            });
        });
    };
    AdminUserEditComponent.prototype.getCompanyProfiles = function () {
        var _this = this;
        this.companies = [];
        for (var i = 0; i < this.viewedUser['companies'].length; i++) {
            this.userService.findUserById(this.viewedUser['companies'][i]).subscribe(function (res) {
                _this.companies.push(res);
            });
        }
    };
    AdminUserEditComponent.prototype.removeDesigner = function (designer) {
        var _this = this;
        var curDesigners = this.viewedUser['designers'];
        curDesigners.splice(curDesigners.indexOf(designer['_id']), 1);
        this.viewedUser['designers'] = curDesigners;
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (data) {
            _this.viewedUser = data;
            var tmp = designer['companies'];
            tmp.splice(tmp.indexOf(_this.viewedUserId), 1);
            designer['companies'] = tmp;
            _this.userService.updateUser(designer['_id'], designer).subscribe(function (res) {
                _this.getDesignerProfiles();
            });
        });
    };
    AdminUserEditComponent.prototype.getDesignerProfiles = function () {
        var _this = this;
        this.designers = [];
        for (var i = 0; i < this.viewedUser['designers'].length; i++) {
            this.userService.findUserById(this.viewedUser['designers'][i]).subscribe(function (res) {
                _this.designers.push(res);
            });
        }
    };
    return AdminUserEditComponent;
}());
AdminUserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin-user-edit',
        template: __webpack_require__("../../../../../src/app/components/admin-user-edit/admin-user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin-user-edit/admin-user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _d || Object])
], AdminUserEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <button class=\"col-3 btn\" (click)=\"searchDesigners()\">Designers</button>\r\n    <button class=\"col-3 btn\" (click)=\"searchCompanies()\">Companies</button>\r\n    <button class=\"col-3 btn\" (click)=\"searchBoards()\">Boards</button>\r\n    <button class=\"col-3 btn\" [routerLink]=\"['/profile']\">Back to Profile</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <input id='searchTerm' name='searchTerm' [(ngModel)]='searchTerm' type='text' class='col-9 form-control'>\r\n    <button (click)=\"search()\" class=\"btn btn-primary btn-block col-3\">Search</button>\r\n  </div>\r\n\r\n  <ul *ngIf=\"searchContext === 'USERS'\" class=\"list-group\">\r\n    <li *ngFor=\"let foundUser of users\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <a [routerLink]=\"['/profile', foundUser['_id']]\">\r\n            {{foundUser['username']}}\r\n          </a>\r\n          <div (click)=\"deleteUser(foundUser['_id'])\" class='board-x'>\r\n            <i class='fa fa-times'></i>\r\n          </div>\r\n          <div [routerLink]=\"['/adminEdit', foundUser['_id']]\">\r\n            Edit\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul *ngIf=\"searchContext === 'BOARDS'\" class=\"container\">\r\n    <li class='board__preview' *ngFor=\"let board of boards\" >\r\n      <h3 [routerLink]=\"['/board/', board['_id']]\">{{board['name']}}</h3>\r\n      <div (click)=\"deleteBoard(board['_id'])\" class='board-x'>\r\n        <i class='fa fa-times'></i>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(userService, sharedService, boardService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.boardService = boardService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user || {};
        this.searchContext = 'USERS';
        this.searchTarget = 'DESIGNER';
    };
    AdminComponent.prototype.search = function () {
        var _this = this;
        if (this.searchContext === 'USERS') {
            this.userService.searchUsers(this.searchTerm).subscribe(function (res) {
                _this.users = res.filter(function (el) { return el['role'] === _this.searchTarget; });
            });
        }
        else if (this.searchContext === 'BOARDS') {
            this.boardService.searchBoards(this.searchTerm).subscribe(function (res) {
                _this.boards = res;
            });
        }
    };
    AdminComponent.prototype.searchDesigners = function () {
        this.searchContext = 'USERS';
        this.searchTarget = 'DESIGNER';
        this.boards = [];
        this.users = [];
    };
    AdminComponent.prototype.searchCompanies = function () {
        this.searchContext = 'USERS';
        this.searchTarget = 'COMPANY';
        this.boards = [];
        this.users = [];
    };
    AdminComponent.prototype.searchBoards = function () {
        this.searchContext = 'BOARDS';
        this.searchTarget = '';
        this.users = [];
    };
    AdminComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId).subscribe(function (res) {
            _this.search();
        });
    };
    AdminComponent.prototype.deleteBoard = function (boardId) {
        var _this = this;
        this.boardService.deleteBoard(boardId).subscribe(function (res) {
            _this.search();
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_board_board_service__["a" /* BoardService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board__name--h2:hover {\r\n}\r\n\r\n.photo-x {\r\n  width: 20px;\r\n  height: 20px;\r\n  background: red;\r\n  display: inline-block;\r\n  position: absolute ;\r\n  right: 0;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header\">\r\n      <img [routerLink]=\"['/profile']\" class='navbar-image' src='/assets/images/logo.png'>\r\n    </div>\r\n  </nav>\r\n  <div *ngIf='isSearching' class='searchOverlay'>\r\n    <div class='flickr-background'>\r\n    </div>\r\n    <div class='container'>\r\n      <div class='flickr-box'>\r\n        <h2>Flickr</h2>\r\n        <input [(ngModel)]=\"searchText\" name=\"searchText\" type='text' class='form-control' placeholder='Search Query'>\r\n        <a (click)=\"searchPhotos()\"><button class=\"btn btn-primary\">SEARCH</button></a>\r\n        <div class='container'>\r\n          <div class=\"row\">\r\n            <div *ngFor = \"let pic of flickrPhotos['photo']\" class=\"col-3\">\r\n              <img (click)=\"selectPhoto(pic)\"\r\n              width=\"100%\"\r\n              [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\r\n              <p></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button (click)=\"disableOverlay()\" class='btn btn-danger btn-block'>Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"canView()\" class='board' id='board'>\r\n    <div class='board__name'>\r\n      <input *ngIf=\"editingName\" [(ngModel)]=\"board['name']\">\r\n      <h2 class='board__name--h2' *ngIf=\"!editingName\" (click)=\"editName()\">{{board['name']}}</h2>\r\n      <div *ngIf=\"editingName\" (click)=\"saveName()\" ><i class=\"fa fa-save fa-2x pull-right\"></i></div>\r\n    </div>\r\n    <div *ngFor=\"let photo of photos\" draggable [ngStyle]=\"{'left': photo.left, 'top': photo.top}\" (newPosition)=\"savePosition($event)\" class='board__photo' data-id='{{photo._id}}'>\r\n      <div class='photo-x' (click)=\"deletePhoto(photo)\">\r\n        <i class='fa fa-times'></i>\r\n      </div>\r\n      <img src={{photo.url}}>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!canView()\" class=\"board container\">\r\n    <div class=\"row\">Sorry, you don't have permission to view this board.</div>\r\n  </div>\r\n  <button *ngIf=\"canView()\" (click)=\"enableOverlay()\" class='btn btn-primary btn-block'>Search Flickr</button>\r\n  <div class=\"mooodio-comment-container container-fluid\">\r\n    <div *ngFor=\"let comment of comments\" class=\"row\">\r\n      <!--<span>{{comment['authorName']}}</span>-->\r\n      <span>{{comment['text']}}</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"editingComment\" class=\"comment-field\">\r\n    <input [(ngModel)]=\"commentText\"\r\n    name=\"commentText\"\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    id=\"commentText\"\r\n    placeholder=\"Write a comment\">\r\n    <button (click)=\"createComment()\" class=\"btn btn-block\">Submit</button>\r\n  </div>\r\n  <button *ngIf=\"canView()\" (click)=\"editingComment = true\" class=\"btn btn-secondary btn-block\">Comment</button>\r\n  <button *ngIf=\"canView() && board['public']\" (click)=\"makePrivate()\" class=\"btn btn-secondary btn-block\">Make Private</button>\r\n  <button *ngIf=\"canView() && !board['public']\" (click)=\"makePublic()\" class=\"btn btn-secondary btn-block\">Make Public</button>\r\n  <button *ngIf=\"canView() && !board['public']\" [routerLink]=\"['/board', boardId, 'addCollaborator']\" class=\"btn btn-secondary btn-block\">Add Collaborator</button>\r\n  <button *ngIf=\"!canView()\" [routerLink]=\"['/profile']\" class=\"btn btn-secondary btn-block\">Home</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__ = __webpack_require__("../../../../../src/app/services/comment.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BoardComponent = (function () {
    function BoardComponent(flickrService, imageService, activatedRoute, boardService, commentService, sharedService, userService) {
        this.flickrService = flickrService;
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.boardService = boardService;
        this.commentService = commentService;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user || {};
        this.isSearching = false;
        this.editingName = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.boardId = params['boardId'];
            _this.user = _this.sharedService.user || {};
            _this.boardService.findBoardById(_this.boardId).subscribe(function (board) {
                _this.board = board;
            });
            _this.imageService.findImagesByBoardId(_this.boardId).subscribe(function (images) {
                _this.photos = images;
            });
            _this.commentService.findCommentsByBoardId(_this.boardId).subscribe(function (comments) {
                _this.comments = comments;
            });
        });
    };
    BoardComponent.prototype.editName = function () {
        this.editingName = true;
    };
    BoardComponent.prototype.saveName = function () {
        var _this = this;
        this.boardService.updateBoard(this.boardId, this.board).subscribe(function () {
            _this.editingName = false;
        });
    };
    // Query flickr's api for photos
    BoardComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService.searchPhotos(this.searchText).subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            var photoList = val.photos;
            photoList.photo = photoList.photo.slice(0, 16);
            _this.flickrPhotos = photoList;
        });
    };
    BoardComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var tempImage = { left: 0, top: 0, url: url };
        this.imageService.createImage(this.boardId, tempImage).subscribe(function (res) {
            _this.boardService.findBoardById(_this.boardId).subscribe(function (board) {
                _this.board = board;
            });
            _this.imageService.findImagesByBoardId(_this.boardId).subscribe(function (images) {
                _this.photos = images;
                _this.searchText = '';
                _this.flickrPhotos = null;
                _this.disableOverlay();
            });
        });
    };
    BoardComponent.prototype.enableOverlay = function () {
        this.isSearching = true;
    };
    BoardComponent.prototype.disableOverlay = function () {
        this.isSearching = false;
    };
    BoardComponent.prototype.savePosition = function (posObject) {
        var _this = this;
        var id = posObject.id;
        var position = posObject.pos;
        this.imageService.findImageById(id).subscribe(function (image) {
            image.top = position.top;
            image.left = position.left;
            _this.imageService.updateImage(id, image).subscribe(function (res) {
            });
        });
    };
    BoardComponent.prototype.deletePhoto = function (photo) {
        var _this = this;
        this.imageService.deleteImage(photo._id, this.board['_id']).subscribe(function (res) {
            _this.boardService.findBoardById(_this.boardId).subscribe(function (board) {
                _this.board = board;
            });
            _this.imageService.findImagesByBoardId(_this.boardId).subscribe(function (images) {
                _this.photos = images;
            });
        });
    };
    BoardComponent.prototype.createComment = function () {
        var _this = this;
        var comment = { 'author': this.user['_id'], 'authorName': this.user['name'], 'text': this.commentText };
        this.commentService.createComment(this.boardId, comment).subscribe(function (res) {
            _this.editingComment = false;
            _this.commentService.findCommentsByBoardId(_this.boardId).subscribe(function (comments) {
                _this.comments = comments;
                _this.commentText = '';
            });
        });
    };
    BoardComponent.prototype.makePrivate = function () {
        this.board['public'] = false;
        this.boardService.updateBoard(this.boardId, this.board).subscribe(function (res) {
            // Keep in case we want to do something
        });
    };
    BoardComponent.prototype.makePublic = function () {
        this.board['public'] = true;
        this.boardService.updateBoard(this.boardId, this.board).subscribe(function (res) {
            // Keep in case we want to do something
        });
    };
    BoardComponent.prototype.canView = function () {
        if (this.board['public']) {
            return true;
        }
        else {
            return this.board['_user'] === this.user['_id'] || this.board['collaborators'].indexOf(this.user['_id']) >= 0;
        }
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_image_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_image_image_service__["a" /* ImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */]) === "function" && _g || Object])
], BoardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/board/collaborator-search/collaborator-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/collaborator-search/collaborator-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Profile</b>\r\n      </a>\r\n    </p>\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateProfile()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <label for=\"searchTerm\">Find a user by Username:</label>\r\n    <input id='searchTerm' name='searchTerm' [(ngModel)]='searchTerm' type='text' class='form-control' placeholder='Please Enter A Username'>\r\n    <button (click)=\"searchUsers()\" class=\"btn btn-primary btn-block\">Search</button>\r\n  </div>\r\n\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let foundUser of users\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <a (click)=\"addCollaborator(foundUser['_id'])\">\r\n            {{foundUser['username']}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/board/collaborator-search/collaborator-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollaboratorSearchComponent = (function () {
    function CollaboratorSearchComponent(userService, sharedService, activatedRoute, boardService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.boardService = boardService;
        this.router = router;
    }
    CollaboratorSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user || {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.boardId = params['boardId'];
        });
    };
    CollaboratorSearchComponent.prototype.searchUsers = function () {
        var _this = this;
        this.userService.searchUsers(this.searchTerm).subscribe(function (res) {
            _this.users = res;
        });
    };
    CollaboratorSearchComponent.prototype.addCollaborator = function (userId) {
        var _this = this;
        this.boardService.findBoardById(this.boardId).subscribe(function (board) {
            board['collaborators'].push(userId);
            _this.boardService.updateBoard(_this.boardId, board).subscribe(function (res) {
                _this.router.navigate(['/board/' + _this.boardId]);
            });
        });
    };
    return CollaboratorSearchComponent;
}());
CollaboratorSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-collaborator-search',
        template: __webpack_require__("../../../../../src/app/components/board/collaborator-search/collaborator-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/board/collaborator-search/collaborator-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], CollaboratorSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=collaborator-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.board__box--container {\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.board__box {\r\n  background: #c1c1c1;\r\n  display: inline-block;\r\n  height: 200px;\r\n  border-radius: 10px;\r\n  width: 30%;\r\n  margin: 15px 10px;\r\n}\r\n\r\np {\r\n  margin: 10px 0 0 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img src='/assets/images/logo.png'>\r\n  <div class='padding'></div>\r\n  <div class='board__box--container'>\r\n    <div class='board__box' *ngFor=\"let board of boards\">\r\n      <p>{{board.name}}</p>\r\n    </div>\r\n  </div>\r\n  <div class='padding'></div>\r\n  <button class='btn btn-primary btn-block' [routerLink]=\"['/login']\">Get Started</button>\r\n  <div class='padding'></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(boardService) {
        this.boardService = boardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardService.getRandomBoardCollection().subscribe(function (boards) {
            _this.boards = boards;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_board_board_service__["a" /* BoardService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-users/search-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-users/search-users.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>Profile</b>\r\n      </a>\r\n    </p>\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateProfile()\" class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <label for=\"searchTerm\">Find a user by Username:</label>\r\n    <input id='searchTerm' name='searchTerm' [(ngModel)]='searchTerm' type='text' class='form-control' placeholder='Please Enter A Username'>\r\n    <button (click)=\"searchUsers()\" class=\"btn btn-primary btn-block\">Search</button>\r\n  </div>\r\n\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let foundUser of users\" class=\"list-group-item\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <a [routerLink]=\"['/profile', foundUser['_id']]\">\r\n            {{foundUser['username']}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-users/search-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchUsersComponent = (function () {
    function SearchUsersComponent(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
    }
    SearchUsersComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user || {};
    };
    SearchUsersComponent.prototype.searchUsers = function () {
        var _this = this;
        this.userService.searchUsers(this.searchTerm).subscribe(function (res) {
            _this.users = res;
        });
    };
    return SearchUsersComponent;
}());
SearchUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-users',
        template: __webpack_require__("../../../../../src/app/components/search-users/search-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-users/search-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object])
], SearchUsersComponent);

var _a, _b;
//# sourceMappingURL=search-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header\">\r\n      <img [routerLink]=\"['/']\" class='navbar-image' src='/assets/images/logo.png'>\r\n    </div>\r\n  </nav>\r\n  <hr/>\r\n  <div class='login__container'>\r\n    <div *ngIf=\"errorFlag\"\r\n      class=\"alert alert-danger\">\r\n      {{errorMsg}}\r\n    </div>\r\n\r\n    <form (ngSubmit) = \"login()\" #f=\"ngForm\">\r\n      <h1>Login</h1>\r\n      <br/>\r\n      <input name='username' type='text' placeholder='username' class='form-control' required [(ngModel)]=\"username\"/>\r\n      <br/>\r\n      <input name='password' type='password' placeholder='password' class='form-control' required [(ngModel)]=\"password\"/>\r\n      <br/>\r\n      <br/>\r\n      <br/>\r\n      <button type='submit' [disabled]=\"!f.valid\" class='btn btn-primary btn-block'>Login</button>\r\n    </form>\r\n    <br/>\r\n    <a [routerLink]=\"['/register']\">\r\n      <button type='button' class='btn btn-success btn-block'>Register</button>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.username, this.password).subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board__preview h3 {\r\n  display: inline-block;\r\n  opacity: .6;\r\n}\r\n\r\n.board__preview {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.board__preview i {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"navbar-header\">\r\n    <img [routerLink]=\"['/profile']\" class='navbar-image' src='/assets/images/logo.png'>\r\n  </div>\r\n</nav>\r\n<hr/>\r\n\r\n<div class=\"container\">\r\n  <div *ngIf=\"isEditingProfile\" class=\"row\">\r\n    <label for=\"username\">Username</label>\r\n    <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Alice\">\r\n\r\n    <label for=\"first-name\">First Name</label>\r\n    <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\r\n\r\n    <label for=\"last-name\">Last Name</label>\r\n    <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\r\n    <div class='padding'></div>\r\n    <button (click)='updateProfile()' class='btn btn-primary'>Save Changes</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"!isEditingProfile\" class=\"container\">\r\n    <div class=\"row\">\r\n      <h1>{{user?.username}}</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n      <h2>{{user?.firstName}} {{user?.lastName}}</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button (click)='editProfile()' class='btn btn-secondary'>Edit Profile</button>\r\n    </div>\r\n  </div>\r\n\r\n  <br/>\r\n\r\n  <div *ngIf=\"user['role'] == 'DESIGNER'\">\r\n    <div class=\"row\">\r\n      <h2 class='col-10'>My Boards</h2>\r\n      <a class=\"col-2 btn btn-primary pull-right\" (click)=\"createBoardAndNavigate()\">Create Board</a>\r\n    </div>\r\n    <hr/>\r\n    <ul class=\"container\">\r\n      <li class='board__preview' *ngFor=\"let board of boards\" >\r\n        <h3 [routerLink]=\"['/board/', board._id]\">{{board.name}}</h3>\r\n        <div (click)=\"deleteBoard(board)\" class='board-x'>\r\n          <i class='fa fa-times'></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <h2 class='col-10'>My Companies</h2>\r\n    <ul class=\"container\">\r\n      <li class='company__preview' *ngFor=\"let company of companies\" >\r\n        <h3 [routerLink]=\"['/profile/', company['_id']]\">{{company['username']}}</h3>\r\n      </li>\r\n    </ul>\r\n    <hr/>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 following-container\">\r\n          <span class=\"row\">Following:</span>\r\n          <ol>\r\n            <li *ngFor=\"let followed of following\">\r\n              {{followed['username']}}\r\n            </li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"col-6 follower-container\">\r\n          <span class=\"row\">Followers:</span>\r\n          <ol>\r\n            <li *ngFor=\"let follower of followers\">\r\n              {{follower['username']}}\r\n            </li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"user['role'] == 'COMPANY'\">\r\n    <div class=\"row\">\r\n      <h2 class='col-10'>Designers</h2>\r\n    </div>\r\n    <hr/>\r\n    <ul class=\"container\">\r\n      <li class='board__preview' *ngFor=\"let designer of designers\" >\r\n        <h3 [routerLink]=\"['/profile/', designer['_id']]\">{{designer['username']}}</h3>\r\n      </li>\r\n    </ul>\r\n    <hr/>\r\n  </div>\r\n\r\n  <a class=\"btn btn-secondary btn-block\" [routerLink]=\"['/searchUsers']\" >Search Users</a>\r\n  <a class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</a>\r\n  <a *ngIf=\"user['role'] === 'ADMIN'\" class=\"btn btn-danger btn-block\" [routerLink]=\"['/admin']\">\r\n    Enter Admin View\r\n  </a>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, boardService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.boardService = boardService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEditingProfile = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user || {};
            _this.userId = _this.user['_id'];
            _this.boardService.findBoardsByUser(_this.userId).subscribe(function (boards) {
                _this.boards = boards;
            });
            _this.following = [];
            for (var i = 0; i < _this.user['following'].length; i++) {
                _this.userService.findUserById(_this.user['following'][i]).subscribe(function (res) {
                    _this.following.push(res);
                });
            }
            _this.followers = [];
            for (var i = 0; i < _this.user['followedBy'].length; i++) {
                _this.userService.findUserById(_this.user['followedBy'][i]).subscribe(function (res) {
                    _this.followers.push(res);
                });
            }
            _this.designers = [];
            for (var i = 0; i < _this.user['designers'].length; i++) {
                _this.userService.findUserById(_this.user['designers'][i]).subscribe(function (res) {
                    _this.designers.push(res);
                });
            }
            _this.companies = [];
            for (var i = 0; i < _this.user['companies'].length; i++) {
                _this.userService.findUserById(_this.user['companies'][i]).subscribe(function (res) {
                    _this.companies.push(res);
                });
            }
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
            _this.isEditingProfile = false;
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        this.isEditingProfile = true;
    };
    ProfileComponent.prototype.createBoardAndNavigate = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
            _this.boardService.createBoard(_this.userId).subscribe(function (board) {
                _this.router.navigate(['/board/' + board._id]);
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.deleteBoard = function (board) {
        var _this = this;
        this.boardService.deleteBoard(board._id).subscribe(function () {
            _this.boardService.findBoardsByUser(_this.userId).subscribe(function (boards) {
                _this.boards = boards;
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header\">\r\n      <img [routerLink]=\"['/']\" class='navbar-image' src='/assets/images/logo.png'>\r\n    </div>\r\n  </nav>\r\n  <hr/>\r\n  <div class='login__container'>\r\n    <div *ngIf=\"errorFlag\"\r\n      class=\"alert alert-danger\">\r\n      Please fill out all fields. All Fields are required\r\n    </div>\r\n    <h1>Register</h1>\r\n    <br/>\r\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n      <p>Username</p>\r\n      <input name='username' [(ngModel)]='username' type='text' class='form-control' placeholder='Please Enter A Username'>\r\n      <br/>\r\n      <p>First Name</p>\r\n      <input name='firstName' [(ngModel)]='firstName' type='text' class='form-control' placeholder='Please Enter Your First Name'>\r\n      <br/>\r\n      <p>Last Name</p>\r\n      <input name='lastName' [(ngModel)]='lastName' type='text' class='form-control' placeholder='Please Enter Your Last Name'>\r\n      <br/>\r\n      <p>Password</p>\r\n      <input name='password' [(ngModel)]='password' type='password' class='form-control' placeholder='Please Enter A Password'>\r\n      <br/>\r\n      <p>Verify Password</p>\r\n      <input name='conf_password' [(ngModel)]='conf_password' type='password' class='form-control' placeholder='Verify Baby!'>\r\n      <br/>\r\n      <br/>\r\n      <button type='submit' class='btn btn-primary btn-block'>Register</button>\r\n    </form>\r\n    <br/>\r\n    <form (ngSubmit) = \"registerCompany()\" #g=\"ngForm\">\r\n      <input name='username' [(ngModel)]='username' type='text' class='form-control' placeholder='Please Enter A Username'>\r\n      <br/>\r\n      <input name='firstName' [(ngModel)]='firstName' type='text' class='form-control' placeholder='Please Enter Your First Name'>\r\n      <br/>\r\n      <input name='lastName' [(ngModel)]='lastName' type='text' class='form-control' placeholder='Please Enter Your Last Name'>\r\n      <br/>\r\n      <input name='password' [(ngModel)]='password' type='password' class='form-control' placeholder='Please Enter A Password'>\r\n      <br/>\r\n      <input name='conf_password' [(ngModel)]='conf_password' type='password' class='form-control' placeholder='Verify Baby!'>\r\n      <br/>\r\n      <br/>\r\n      <button type='submit' class='btn btn-primary btn-block'>Register</button>\r\n    </form>\r\n    <br/>\r\n    <a [routerLink]=\"['/login']\"><button type='button' class='btn btn-danger btn-block'>Cancel</button></a>\r\n  </div>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.conf_password = this.registerForm.value.conf_password;
        this.firstName = this.registerForm.value.firstName;
        this.lastName = this.registerForm.value.lastName;
        if (!this.username || !this.password || !this.conf_password) {
            // this.passwordFlag = false;
            this.errorFlag = true;
            this.errorMsg = 'Please enter at least a username, password, and password confirmation';
        }
        else {
            if (this.password === this.conf_password) {
                // this.passwordFlag = false;
                var newUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__["a" /* User */](this.username, this.password, this.firstName, this.lastName, [], [], 'DESIGNER');
                this.userService.register(newUser)
                    .subscribe(function (data) {
                    _this.sharedService.user = data;
                    _this.router.navigate(['/profile']);
                });
            }
            else {
                // this.passwordFlag = true;
                this.errorMsg = 'Passwords don\'t match!';
            }
        }
    };
    RegisterComponent.prototype.registerCompany = function () {
        var _this = this;
        this.username = this.companyRegisterForm.value.username;
        this.password = this.companyRegisterForm.value.password;
        this.conf_password = this.companyRegisterForm.value.conf_password;
        this.firstName = this.companyRegisterForm.value.firstName;
        this.lastName = this.companyRegisterForm.value.lastName;
        if (!this.username || !this.password || !this.conf_password) {
            // this.passwordFlag = false;
            this.errorFlag = true;
            this.errorMsg = 'Please enter at least a username, password, and password confirmation';
        }
        else {
            if (this.password === this.conf_password) {
                // this.passwordFlag = false;
                var newUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__["a" /* User */](this.username, this.password, this.firstName, this.lastName, [], [], 'COMPANY');
                this.userService.register(newUser)
                    .subscribe(function (data) {
                    _this.sharedService.user = data;
                    _this.router.navigate(['/profile']);
                });
            }
            else {
                // this.passwordFlag = true;
                this.errorMsg = 'Passwords don\'t match!';
            }
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('g'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], RegisterComponent.prototype, "companyRegisterForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/view-profile/view-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/view-profile/view-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <!--heading on the nav bar-->\r\n    <p class=\"navbar-header pull-left\">\r\n      <a class=\"navbar-brand thick\">\r\n        <b>View Profile</b>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"container\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">\r\n          {{viewedUser['username']}}\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          {{viewedUser['firstName']}} {{viewedUser['lastName']}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <br/>\r\n\r\n    <div *ngIf=\"viewedUser['role'] === 'DESIGNER'\">\r\n      <ul class=\"container\">\r\n        <h2>{{viewedUser['username']}}'s Boards</h2>\r\n        <li class='board__preview' *ngFor=\"let board of boards\" >\r\n          <h3 [routerLink]=\"['/board/', board._id]\">{{board.name}}</h3>\r\n        </li>\r\n      </ul>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 following-container\">\r\n            <span class=\"row\">Companies:</span>\r\n            <ul>\r\n              <li *ngFor=\"let company of companies\">\r\n                {{company['username']}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <a *ngIf=\"activeUser['role'] === 'COMPANY'\" class=\"btn btn-primary btn-block\"\r\n         (click)=\"hire()\">Hire</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"viewedUser['role'] === 'COMPANY'\">\r\n      <ul class=\"container\">\r\n        <h2>{{viewedUser['username']}}'s Designers</h2>\r\n        <li class='board__preview' *ngFor=\"let designer of designers\" >\r\n          <h3 [routerLink]=\"['/profile', designer['_id']]\">{{designer['username']}}</h3>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 following-container\">\r\n          <span class=\"row\">Following:</span>\r\n          <ul>\r\n            <li *ngFor=\"let followed of following\">\r\n              {{followed['username']}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-6 follower-container\">\r\n          <span class=\"row\">Followers:</span>\r\n          <ul>\r\n            <li *ngFor=\"let follower of followers\">\r\n              {{follower['username']}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a *ngIf=\"!isFollowing\" class=\"btn btn-primary btn-block\"\r\n       (click)=\"follow()\">Follow</a>\r\n    <a *ngIf=\"isFollowing\" class=\"btn btn-primary btn-block\"\r\n       (click)=\"unfollow()\">Unfollow</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/profile']\">\r\n        <span class=\"glyphicon glyphicon-user\"></span>\r\n      </a>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/view-profile/view-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__ = __webpack_require__("../../../../../src/app/services/board/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewProfileComponent = (function () {
    function ViewProfileComponent(userService, activatedRoute, sharedService, boardService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.boardService = boardService;
        this.viewedUser = {};
        this.isFollowing = false;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.viewedUserId = params['viewedUserId'];
            _this.activeUser = _this.sharedService.user || {};
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (user) {
                _this.viewedUser = user;
                _this.following = [];
                for (var i = 0; i < _this.viewedUser['following'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['following'][i]).subscribe(function (res) {
                        _this.following.push(res);
                    });
                }
                _this.designers = [];
                for (var i = 0; i < _this.viewedUser['designers'].length; i++) {
                    _this.userService.findUserById(_this.viewedUser['designers'][i]).subscribe(function (res) {
                        _this.designers.push(res);
                    });
                }
                _this.getFollowerProfiles();
                _this.getComapnies();
            });
            _this.boardService.findBoardsByUser(_this.viewedUserId).subscribe(function (boards) {
                _this.boards = boards;
            });
        });
    };
    ViewProfileComponent.prototype.getFollowerProfiles = function () {
        var _this = this;
        this.followers = [];
        for (var i = 0; i < this.viewedUser['followedBy'].length; i++) {
            this.userService.findUserById(this.viewedUser['followedBy'][i]).subscribe(function (res) {
                _this.followers.push(res);
            });
        }
    };
    ViewProfileComponent.prototype.getComapnies = function () {
        var _this = this;
        this.companies = [];
        for (var i = 0; i < this.viewedUser['companies'].length; i++) {
            this.userService.findUserById(this.viewedUser['companies'][i]).subscribe(function (res) {
                _this.companies.push(res);
            });
        }
    };
    ViewProfileComponent.prototype.follow = function () {
        var _this = this;
        this.viewedUser['followedBy'].push(this.activeUser['_id']);
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (user) {
            _this.activeUser['following'].push(_this.viewedUserId);
            _this.userService.updateUser(_this.activeUser['_id'], _this.activeUser).subscribe(function (thirdUser) {
                _this.isFollowing = true;
                _this.activeUser = thirdUser;
            });
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (newUser) {
                _this.getFollowerProfiles();
            });
        });
    };
    ViewProfileComponent.prototype.unfollow = function () {
        var _this = this;
        var userfollowedBy = this.viewedUser['followedBy'];
        userfollowedBy.splice(userfollowedBy.indexOf(this.activeUser['_id']), 1);
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (user) {
            var userFollowing = _this.activeUser['following'];
            userFollowing.splice(userFollowing.indexOf(_this.viewedUserId), 1);
            _this.userService.updateUser(_this.activeUser['_id'], _this.activeUser).subscribe(function (thirdUser) {
                _this.isFollowing = false;
                _this.activeUser = thirdUser;
            });
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (newUser) {
                _this.getFollowerProfiles();
            });
        });
    };
    ViewProfileComponent.prototype.hire = function () {
        var _this = this;
        this.viewedUser['companies'].push(this.activeUser['_id']);
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (user) {
            _this.activeUser['designers'].push(_this.viewedUserId);
            _this.userService.updateUser(_this.activeUser['_id'], _this.activeUser).subscribe(function (thirdUser) {
                _this.isFollowing = true;
                _this.activeUser = thirdUser;
            });
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (newUser) {
                _this.getComapnies();
            });
        });
    };
    return ViewProfileComponent;
}());
ViewProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-profile',
        template: __webpack_require__("../../../../../src/app/components/user/view-profile/view-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/view-profile/view-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _d || Object])
], ViewProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_image_service__ = __webpack_require__("../../../../../src/app/services/image/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = (function () {
    function DraggableDirective(el, imageService) {
        this.el = el;
        this.imageService = imageService;
        // this will emit an event for the parent
        this.newPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DraggableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var id = this.el.nativeElement.id;
        this.imageService.findImageById(id).subscribe(function (image) {
            $('#' + _this.el.nativeElement.id).css("top", image.top);
            $('#' + _this.el.nativeElement.id).css("left", image.left);
            _this.makeDraggable(_this);
        });
    };
    DraggableDirective.prototype.makeDraggable = function (ref) {
        $(this.el.nativeElement).draggable({
            containment: "parent",
            stop: function (event, ui) {
                var id = ui.helper.attr('id');
                ref.newPosition.emit({ pos: ui.position, id: id });
            }
        });
    };
    return DraggableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "newPosition", void 0);
DraggableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[draggable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_image_service__["a" /* ImageService */]) === "function" && _b || Object])
], DraggableDirective);

var _a, _b;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, firstName, lastName, following, followedBy, role) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.following = following;
        this.followedBy = followedBy;
        this.role = role;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/board/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardService = (function () {
    function BoardService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseUrl;
    }
    BoardService.prototype.createBoard = function (userId) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/board', '')
            .map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.findBoardById = function (boardId) {
        return this._http.get(this.baseUrl + '/api/board/' + boardId)
            .map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.findBoardsByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/board')
            .map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.updateBoard = function (boardId, board) {
        return this._http.put(this.baseUrl + '/api/board/' + boardId, board)
            .map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.deleteBoard = function (boardId) {
        return this._http.delete(this.baseUrl + '/api/board/' + boardId)
            .map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.getRandomBoardCollection = function () {
        return this._http.get(this.baseUrl + '/api/board/all').map(function (res) {
            return res.json();
        });
    };
    BoardService.prototype.searchBoards = function (searchTerm) {
        return this._http.get(this.baseUrl + '/api/board/search?searchTerm=' + searchTerm)
            .map(function (res) {
            return res.json();
        });
    };
    return BoardService;
}());
BoardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BoardService);

var _a;
//# sourceMappingURL=board.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comment.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createComment': this.createComment,
            'findCommentsByBoardId': this.findCommentsByBoardId,
            'findCommentById': this.findCommentById,
            'updateComment': this.updateComment,
            'deleteComment': this.deleteComment,
        };
    }
    CommentService.prototype.createComment = function (boardId, comment) {
        return this._http.post(this.baseUrl + '/api/board/' + boardId + '/comment', comment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findCommentById = function (commentId) {
        return this._http.get(this.baseUrl + '/api/comment/' + commentId)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findCommentsByBoardId = function (boardId) {
        return this._http.get(this.baseUrl + '/api/board/' + boardId + '/comment')
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.updateComment = function (commentId, comment) {
        return this._http.put(this.baseUrl + '/api/comment/' + commentId, comment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.deleteComment = function (commentId) {
        return this._http.delete(this.baseUrl + '/api/comment/' + commentId)
            .map(function (res) {
            return res.json();
        });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting the service into module
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = "f9538dbe339cc25946f629d74f993897";
        this.secret = "5e41cb0989a36856";
        this.urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/image/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = (function () {
    function ImageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createImage': this.createImage,
            'findImagesByBoardId': this.findImagesByBoardId,
            'findImageById': this.findImageById,
            'updateImage': this.updateImage,
            'deleteImage': this.deleteImage,
            'updateImageOrder': this.updateImageOrder
        };
    }
    ImageService.prototype.updateImageOrder = function (boardId, startIndex, endIndex) {
        return this._http.put(this.baseUrl + boardId + '/image?start=' + startIndex + '&end=' + endIndex, '')
            .map(function (res) {
            return res.json();
        });
    };
    ImageService.prototype.createImage = function (boardId, image) {
        return this._http.post(this.baseUrl + '/api/board/' + boardId + '/image', image)
            .map(function (res) {
            return res.json();
        });
    };
    ImageService.prototype.findImageById = function (imageId) {
        return this._http.get(this.baseUrl + '/api/image/' + imageId)
            .map(function (res) {
            return res.json();
        });
    };
    ImageService.prototype.findImagesByBoardId = function (boardId) {
        return this._http.get(this.baseUrl + '/api/board/' + boardId + '/image')
            .map(function (res) {
            return res.json();
        });
    };
    ImageService.prototype.updateImage = function (imageId, image) {
        return this._http.put(this.baseUrl + '/api/image/' + imageId, image)
            .map(function (res) {
            return res.json();
        });
    };
    ImageService.prototype.deleteImage = function (imageId, boardId) {
        return this._http.delete(this.baseUrl + '/api/image/' + imageId + '/' + boardId)
            .map(function (res) {
            return res.json();
        });
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ImageService);

var _a;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting Http service into UserService
var UserService = (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.searchUsers = function (searchTerm) {
        return this._http.get(this.baseUrl + '/api/user/search?searchTerm=' + searchTerm)
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map