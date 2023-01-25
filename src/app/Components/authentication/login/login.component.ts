import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user:any;
  loggedIn: boolean = false;
 
  constructor(
    private authenticationService: AuthService,
    private socialAuth: SocialAuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    if(this.user){
      this.user = JSON.parse(localStorage.getItem('user') as string);
      
    }
    else{
      this.gogglLogin()
      
    }
    
    
  }

  
  
  gogglLogin() {
    return  this.authenticationService.googleLogin();
  }

 

}
