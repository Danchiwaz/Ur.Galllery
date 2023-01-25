import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoInterface } from '../../interfaces/interface';
import { ProfileService } from '../profService/Profile.service';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss'],
})
export class PicComponent implements OnInit {
  // variable Declarations
  edit: boolean = false;
  photo: PhotoInterface;
  photoId: number;
  phototitle: string;
  spinner: boolean = false;
  show: boolean = false;
  // end of variable declarations

  constructor(
    private profService: ProfileService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params) {
        this.photoId = params['photoId'];
        this.spinner = true;
        setTimeout(() => {
          this.spinner = false;
          this.show = true;
        }, 2000);
        this.getSinglePhoto(this.photoId);
      }
    });
  }
  // function to change the state of the edit form
  changeEditState() {
    this.edit = true;
  }

  // function to negate the boolen controlling the show and hode of the edit form
  editTitle() {
    this.edit = false;
  }

  // function to subscribe to the service getting the specific pic based on the photoId
  getSinglePhoto(photoId: number) {
    this.profService.getPhotoAndTitle(photoId).subscribe({
      next: (data) => {
        this.photo = data;
        this.phototitle = this.photo.title;
      },
      error: (err) => console.log(err),
    });
  }
  // function to update the title of the photo
  updateThePhotoTitle(photoId: number) {
    const payload = {
      ...this.photo,
      title: this.phototitle,
    };

    this.profService.UpdateThePhotTitle(payload, photoId).subscribe((data) => {
      console.log('Title updated successfully');
    });
  }
}
