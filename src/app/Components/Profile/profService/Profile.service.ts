import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  AlbumInterface,
  PhotoInterface,
  UserInterface,
} from '../../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  //   service to get the users
  getUsers() {
    return this.http.get<UserInterface[]>(`${this.baseUrl}/users`);
  }

  //   service to get the user Details
  getUserDetails(userId: number) {
    return this.http.get<UserInterface>(`${this.baseUrl}/users/${userId}`);
  }

  //   service to get the user Albums
  getUserAlbums() {
    return this.http.get<AlbumInterface[]>(`${this.baseUrl}/albums`);
  }

  // service to get the single album infomation

  getPhotosForEachAlbum(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(`${this.baseUrl}/photos`);
  }

  //   service to get single Album basing on the albumId
  getAlbumTitle(albumId: number): Observable<AlbumInterface> {
    return this.http.get<AlbumInterface>(`${this.baseUrl}/albums/${albumId}`);
  }

  // service to get specific photo
  getPhotoAndTitle(photoId: number) {
    return this.http.get<PhotoInterface>(`${this.baseUrl}/photos/${photoId}`);
  }

  // service to update the title of the pic
  UpdateThePhotTitle(payload: PhotoInterface, photoId: number) {
    return this.http.put<PhotoInterface>(
      `${this.baseUrl}/photos/${photoId}`,
      payload
    );
  }
}
