import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../interfaces/interface';
import { ProfileService } from './profService/Profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   user:UserInterface[];
  constructor(private profService: ProfileService){}
 
  ngOnInit(){
     this.profService.getUsers().subscribe({
      next:(user) =>{this.user = user;},
      error:(err) => console.log(err)
      
     })
  }


}
