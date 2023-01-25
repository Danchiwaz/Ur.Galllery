import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/interface';
import { ProfileService } from '../profService/Profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // variable declarations
  userInfo: UserInterface[];
  singleUser: UserInterface;
  spinner: boolean = false;
  show: boolean = false;
  // end of the variable declarations

  constructor(private profService: ProfileService) {}

  ngOnInit() {
    this.profService.getUsers().subscribe((users) => {
      this.spinner = true;
      setTimeout(() => {
        this.userInfo = users;
        this.spinner = false;
        this.show = true;
      }, 2000);
    });
  }
}
