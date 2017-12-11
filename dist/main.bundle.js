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
            __WEBPACK_IMPORTED_MODULE_18__components_user_view_profile_view_profile_component__["a" /* ViewProfileComponent */]
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








var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'board/:boardId', component: __WEBPACK_IMPORTED_MODULE_6__components_board_board_component__["a" /* BoardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/:viewedUserId', component: __WEBPACK_IMPORTED_MODULE_7__components_user_view_profile_view_profile_component__["a" /* ViewProfileComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board__name--h2:hover {\n}\n\n.photo-x {\n  width: 20px;\n  height: 20px;\n  background: red;\n  display: inline-block;\n  position: absolute ;\n  right: 0;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <div *ngIf='isSearching' class='searchOverlay'>\n    <div class='flickr-background'>\n    </div>\n    <div class='container'>\n      <div class='flickr-box'>\n        <h2>Flickr</h2>\n        <input [(ngModel)]=\"searchText\" name=\"searchText\" type='text' class='form-control' placeholder='Search Query'>\n        <a (click)=\"searchPhotos()\"><button class=\"btn btn-primary\">SEARCH</button></a>\n        <div class='container'>\n          <div class=\"row\">\n            <div *ngFor = \"let pic of flickrPhotos['photo']\" class=\"col-3\">\n              <img (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n              <p></p>\n            </div>\n          </div>\n        </div>\n        <button (click)=\"disableOverlay()\" class='btn btn-danger btn-block'>Cancel</button>\n      </div>\n    </div>\n  </div>\n  <div class='board' id='board'>\n    <div class='board__name'>\n      <input *ngIf=\"editingName\" [(ngModel)]=\"board['name']\">\n      <h2 class='board__name--h2' *ngIf=\"!editingName\" (click)=\"editName()\">{{board['name']}}</h2>\n      <div *ngIf=\"editingName\" (click)=\"saveName()\" ><i class=\"fa fa-save fa-2x pull-right\"></i></div>\n    </div>\n    <div *ngFor=\"let photo of photos\" draggable [ngStyle]=\"{'left': photo.left, 'top': photo.top}\" (newPosition)=\"savePosition($event)\" class='board__photo' data-id='{{photo._id}}'>\n      <div class='photo-x' (click)=\"deletePhoto(photo)\">\n        <i class='fa fa-times'></i>\n      </div>\n      <img src={{photo.url}}>\n    </div>\n  </div>\n  <button (click)=\"enableOverlay()\" class='btn btn-primary btn-block'>Search Flickr</button>\n  <div class=\"mooodio-comment-container container-fluid\">\n    <div *ngFor=\"let comment of comments\" class=\"row\">\n      <!--<span>{{comment['authorName']}}</span>-->\n      <span>{{comment['text']}}</span>\n    </div>\n  </div>\n  <div *ngIf=\"editingComment\" class=\"comment-field\">\n    <input [(ngModel)]=\"commentText\"\n           name=\"commentText\"\n           type=\"text\"\n           class=\"form-control\"\n           id=\"commentText\"\n           placeholder=\"Write a comment\">\n    <button (click)=\"createComment()\" class=\"btn btn-block\">Submit</button>\n  </div>\n  <button (click)=\"editingComment = true\" class=\"btn btn-secondary btn-block\">Comment</button>\n</div>\n\n"

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
    function BoardComponent(flickrService, imageService, activatedRoute, boardService, commentService, sharedService) {
        this.flickrService = flickrService;
        this.imageService = imageService;
        this.activatedRoute = activatedRoute;
        this.boardService = boardService;
        this.commentService = commentService;
        this.sharedService = sharedService;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log('deleted');
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
    return BoardComponent;
}());
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_image_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_image_image_service__["a" /* ImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_board_board_service__["a" /* BoardService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comment_service_client__["a" /* CommentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], BoardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  display: block;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src='/assets/images/logo.png'>\n  <a [routerLink]=\"['/login']\"><h3>Login</h3></a>\n  <div *ngFor=\"let board of boards\">\n    {{board.name}}\n  </div>\n</div>\n\n"

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

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <img class='navbar-image' src='/assets/images/logo.png'>\n    </div>\n  </nav>\n  <hr/>\n  <div class='login__container'>\n    <div *ngIf=\"errorFlag\"\n      class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n      <h1>Login</h1>\n      <br/>\n      <input name='username' type='text' placeholder='username' class='form-control' required [(ngModel)]=\"username\"/>\n      <br/>\n      <input name='password' type='password' placeholder='password' class='form-control' required [(ngModel)]=\"password\"/>\n      <br/>\n      <br/>\n      <br/>\n      <button type='submit' [disabled]=\"!f.valid\" class='btn btn-primary btn-block'>Login</button>\n    </form>\n    <br/>\n    <a [routerLink]=\"['/register']\">\n      <button type='button' class='btn btn-success btn-block'>Register</button>\n    </a>\n  </div>\n</div>\n"

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
exports.push([module.i, ".board__preview h3 {\n  display: inline-block;\n}\n\n.board__preview {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.board__preview i {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateProfile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <label for=\"username\">Username</label>\n    <input [(ngModel)]=\"user.username\"\n    name=\"username\"\n    type=\"text\"\n    class=\"form-control\"\n    id=\"username\"\n    placeholder=\"Alice\">\n    <label for=\"email\">Email address</label>\n    <input type=\"email\"\n    class=\"form-control\"\n    id=\"email\"\n    [(ngModel)]=\"user.email\"\n    placeholder=\"alice.wonderland@unicorn.com\">\n    <label for=\"first-name\">First Name</label>\n    <input [(ngModel)]=\"user.firstName\"\n    name=\"firstName\"\n    type=\"text\"\n    class=\"form-control\"\n    id=\"first-name\"\n    placeholder=\"Alice\">\n    <label for=\"last-name\">Last Name</label>\n    <input [(ngModel)]=\"user.lastName\"\n    name=\"lastName\"\n    type=\"text\"\n    class=\"form-control\"\n    id=\"last-name\"\n    placeholder=\"Wonderland\">\n    <a class=\"btn btn-primary btn-block\"\n      (click)=\"createBoardAndNavigate()\">Create Board</a>\n    <ul class=\"container\">\n      <li class='board__preview' *ngFor=\"let board of boards\" >\n        <h3 [routerLink]=\"['/board/', board._id]\">{{board.name}}</h3>\n        <div (click)=\"deleteBoard(board)\" class='board-x'>\n          <i class='fa fa-times'></i>\n        </div>\n      </li>\n    </ul>\n    <a class=\"btn btn-danger btn-block \"\n      (click)=\"logout()\" >Logout</a>\n    <a [routerLink]=\"['/profile/5a2cc2cab32d48162895f12a']\">\n      GO TO PROFILE\n    </a>\n    <p>Following: {{user['following']}}</p>\n    <p>FollowedBy: {{user['followedBy']}}</p>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user || {};
            _this.userId = _this.user['_id'];
            _this.boardService.findBoardsByUser(_this.userId).subscribe(function (boards) {
                _this.boards = boards;
            });
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
        });
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
        console.log('trying to delete');
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

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <img class='navbar-image' src='/assets/images/logo.png'>\n    </div>\n  </nav>\n  <hr/>\n  <div class='login__container'>\n    <div *ngIf=\"errorFlag\"\n      class=\"alert alert-danger\">\n      Please fill out all fields. All Fields are required\n    </div>\n    <h1>Register</h1>\n      <br/>\n    <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n      <input name='username' [(ngModel)]='username' type='text' class='form-control' placeholder='Please Enter A Username'>\n      <br/>\n      <input name='firstName' [(ngModel)]='firstName' type='text' class='form-control' placeholder='Please Enter Your First Name'>\n      <br/>\n      <input name='lastName' [(ngModel)]='lastName' type='text' class='form-control' placeholder='Please Enter Your Last Name'>\n      <br/>\n      <input name='password' [(ngModel)]='password' type='password' class='form-control' placeholder='Please Enter A Password'>\n      <br/>\n      <input name='conf_password' [(ngModel)]='conf_password' type='password' class='form-control' placeholder='Verify Baby!'>\n      <br/>\n      <br/>\n      <button type='submit' class='btn btn-primary btn-block'>Register</button>\n    </form>\n      <br/>\n    <a [routerLink]=\"['/login']\"><button type='button' class='btn btn-danger btn-block'>Cancel</button></a>\n  </div>\n</div>\n"

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
                var newUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__["a" /* User */](this.username, this.password, this.firstName, this.lastName, [], []);
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
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>View Profile</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid zlr-main-content-container\">\n  <div class=\"row\">\n    <p>Username: {{viewedUser['username']}}</p>\n    <p>First name: {{viewedUser['firstName']}}</p>\n    <p>Last name: {{viewedUser['lastName']}}</p>\n    <p>Following: {{viewedUser['following']}}</p>\n    <p>Followed by: {{viewedUser['followedBy']}}</p>\n    <a *ngIf=\"!following\" class=\"btn btn-primary btn-block\"\n       (click)=\"follow()\">Follow</a>\n    <a *ngIf=\"following\" class=\"btn btn-primary btn-block\"\n       (click)=\"unfollow()\">Unfollow</a>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/view-profile/view-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ViewProfileComponent(userService, activatedRoute, sharedService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.viewedUser = {};
        this.following = false;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.viewedUserId = params['viewedUserId'];
            _this.activeUser = _this.sharedService.user || {};
            _this.userService.findUserById(_this.viewedUserId).subscribe(function (user) {
                _this.viewedUser = user;
            });
        });
    };
    ViewProfileComponent.prototype.follow = function () {
        var _this = this;
        this.viewedUser['followedBy'].push(this.activeUser['_id']);
        this.userService.updateUser(this.viewedUserId, this.viewedUser).subscribe(function (user) {
            _this.activeUser['following'].push(_this.viewedUserId);
            _this.userService.updateUser(_this.activeUser['_id'], _this.activeUser).subscribe(function (thirdUser) {
                _this.following = true;
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
                _this.following = false;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], ViewProfileComponent);

var _a, _b, _c;
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
    function User(username, password, firstName, lastName, following, followedBy) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.following = following;
        this.followedBy = followedBy;
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
            return !res.json();
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