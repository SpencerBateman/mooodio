import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

// injecting Http service into UserService
@Injectable()

export class UserService {

    constructor(
        private _http: Http,
        private sharedService: SharedService,
        private router: Router) {}

    baseUrl = environment.baseUrl;
    options: RequestOptions = new RequestOptions();

    loggedIn() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(
                (res: Response) => {
                    const user = res.json();
                    if (user !== 0) {
                        this.sharedService.user = user; // setting viewedUser so as to share with all components
                        return true;
                    } else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                }
            );
    }

    login(username: String, password: String) {
        const body = {
            username : username,
            password : password
        };
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    logout() {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(
                (res: Response) => {
                    return res;
                }
            );
    }

    register(user: any) {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }


    createUser(user: any) {
        return this._http.post(this.baseUrl + '/api/viewedUser',
            user)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findUserByUsername(username: string) {
        return this._http.get(this.baseUrl + '/api/viewedUser?username=' + username)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findUserByCredentials(username: string, password: string) {
        return this._http.get(this.baseUrl + '/api/viewedUser?username=' + username + '&password=' + password)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    findUserById(userId: string) {
        return this._http.get(this.baseUrl + '/api/viewedUser/' + userId)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    updateUser(userId: string, user: any) {
        return this._http.put(this.baseUrl + '/api/viewedUser/' + userId,
            user)
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    deleteUser(userId: string) {
        return this._http.delete(this.baseUrl + '/api/viewedUser/' + userId)
            .map(
                (res: Response) => {
                    return !res.json();
                }
            );
    }
}
