import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnInit{

    
    user: SocialUser;
    loggedIn: boolean;
    
    constructor(private http: HttpClient, private authService: SocialAuthService, private router:Router){}

    ngOnInit(): void {
        
        
       
    }

    googleLogin(){
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            console.log(user);
            
            localStorage.setItem('socialUser', JSON.stringify(this.user));
            
            this.router.navigate([`/profile/users`]).then(() => location.reload());
          });
         
    }

    saveUserInfo(){
        ///
    }

    
 
}