import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';

import { HeroSection } from './Components/HeroSection/Hero.Component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './Routes/routes';
import { ProfileComponent } from './Components/Profile/profile.component';
import { UsersComponent } from './Components/Profile/Users/users.component';
import { AlbumComponent } from './Components/Profile/albums/album.component';
import { SingleUserComponent } from './Components/Profile/single-user/single-user.component';
import { SingleAlbumComponent } from './Components/Profile/single-album/single-album.component';
import { PicComponent } from './Components/Profile/pic/pic.component';
import { LoginComponent } from './Components/authentication/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';


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
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  // google auth configuration here 
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '197095498280-md4hv99gegm4rorncgnu1n82et1vj08k.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  // end of the google cong=figurations 
  bootstrap: [AppComponent]
})
export class AppModule { }
