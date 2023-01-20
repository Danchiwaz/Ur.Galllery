import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/Header.component';

import { HeroSection } from './Components/HeroSection/Hero.Component';
import { LoginComponent } from './Components/Login/login/login.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './Routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSection,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
