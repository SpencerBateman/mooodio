import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserService } from './services/user.service.client';
import { AuthenticationService } from './services/authentication.service.client';
import { SharedService } from './services/shared.service.client';
import { BoardComponent } from './components/board/board.component';
import { FlickrService } from './services/flickr.service.client';
import { BoardService } from './services/board/board.service';
import { ImageService } from './services/image/image.service';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [
    UserService,
    SharedService,
    AuthenticationService,
    FlickrService,
    BoardService,
    ImageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
