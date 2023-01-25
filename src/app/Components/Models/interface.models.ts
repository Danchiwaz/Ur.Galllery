// the model structure for the user interface 
export interface UserModel{
    userId?:string
    name:string;
    username: string;
    email:string;
}
// end of the  user model structure 

// the model structure for the album interface 
export interface AlbumModel{
    albumId?:string;
    userId:string;
    albumTitle: string;
}
// end of the album model structure 

// the model structure for the photo model 
export interface PhotoModel{
    photoId?:string;
    AlbumId:string;
    titles:string;
    imgUrl:string;

}
// end of the photo model structure 


export interface userI{
    name:string;
    password:string;
    photoUrl:string;
    lastname:string;
}