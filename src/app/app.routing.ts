import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthenticationService } from './services/authentication.service.client';
import { BoardComponent } from './components/board/board.component';
import {ViewProfileComponent} from './components/user/view-profile/view-profile.component';
import {SearchUsersComponent} from './components/search-users/search-users.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminUserEditComponent} from './components/admin-user-edit/admin-user-edit.component';
import {CollaboratorSearchComponent} from './components/board/collaborator-search/collaborator-search.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthenticationService]},
  {path: 'adminEdit/:viewedUserId', component: AdminUserEditComponent, canActivate: [AuthenticationService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'board/:boardId', component: BoardComponent},
  {path: 'board/:boardId/addCollaborator', component: CollaboratorSearchComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'profile/:viewedUserId', component: ViewProfileComponent},
  {path: 'searchUsers', component: SearchUsersComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
