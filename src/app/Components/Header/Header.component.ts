import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    userInfo:any;
    user:boolean =true;
    private router:Router;
    constructor(){}
    ngOnInit(){
        this.userInfo = JSON.parse(localStorage.getItem('socialUser') as string);  

        if(this.userInfo){
            this.user = true;
            
        }
        else{
            this.user = false;
        }

        console.log(this.userInfo);
        
    }

    logout(){
        localStorage.clear();
    }
}