import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoInterface } from '../../interfaces/interface';
import { ProfileService } from '../profService/Profile.service';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.scss'],
})
export class SingleAlbumComponent implements OnInit {
  // variable declarations
  albumId: number;
  AlbumCollection: PhotoInterface[] = [];
  albumTitle:string;
  spinner: boolean = false;
  show: boolean = false;
  // end of the variables declarations
  constructor(
    private profService: ProfileService,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit() {
    // getting the params from the activated Route 
    this.activatedRouter.params.subscribe((params) => {
      if (params) {
        this.albumId = params['albumId'];
        this.spinner = true;
        setTimeout(()=>{
          this.spinner = false;
          this.show = true;
        },2000)

        this.getAlbumPhotos(this.albumId);
        this.getTheTitleOfTheSelectedAlbum(this.albumId);
      }
    });
  }

  // function to get the title of the selected album 
  getTheTitleOfTheSelectedAlbum(albumId:number){
        this.profService.getAlbumTitle(albumId).subscribe(data =>{
            this.albumTitle = data.title;
        })
  }
  // end of the function to get the title of the selected album 

  //  function to get photos for a specific album
  getAlbumPhotos(albumId: number) {
    this.profService.getPhotosForEachAlbum().subscribe((albums) => {
      for (const singleAlbum of albums) {
        if (singleAlbum.albumId == albumId) {
          this.AlbumCollection.push(singleAlbum);
          console.log(this.AlbumCollection);
        }
      }
    });
  }
  // end of the  function to get photos for a specific album
}
