import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';

import { HeroSection } from './Components/HeroSection/Hero.Component';
import { LoginComponent } from './Components/Login/login/login.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './Routes/routes';
import { ProfileComponent } from './Components/Profile/profile.component';
import { UsersComponent } from './Components/Profile/Users/users.component';
import { AlbumComponent } from './Components/Profile/albums/album.component';
import { SingleUserComponent } from './Components/Profile/single-user/single-user.component';
import { SingleAlbumComponent } from './Components/Profile/single-album/single-album.component';
import { PicComponent } from './Components/Profile/pic/pic.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSection,
    LoginComponent,
    ProfileComponent,
    UsersComponent,
    AlbumComponent,
    SingleUserComponent,
    SingleAlbumComponent,
    PicComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
