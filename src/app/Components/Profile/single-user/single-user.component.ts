import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumInterface, UserInterface } from '../../interfaces/interface';
import { ProfileService } from '../profService/Profile.service';
import { delay, pipe } from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  singleUser: UserInterface;
  spinner: boolean = false;
  show: boolean = false;
  userId: number;
  userAlbums: AlbumInterface[] = [];

  constructor(
    private profService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params) {
        this.userId = params['userId'];

        // getting user infomation
        this.profService.getUserDetails(this.userId).subscribe((user) => {
          this.spinner = true;
          setTimeout(() => {
            this.singleUser = user;
            this.spinner = false;
            this.show = true;
          }, 2000);
        });
        // end of getting users infomation
        this.getAllUserAlbums(this.userId);
      }
    });
  }

  // function to get all user albums
  getAllUserAlbums(id: number) {
    this.profService
      .getUserAlbums()
      .subscribe((singleAlbum: AlbumInterface[]) => {
        for (const single of singleAlbum) {
          if (single.userId == id) {
            this.userAlbums.push(single);
          }
        }
      });
  }
  // end of the function to get all the users albums
}


