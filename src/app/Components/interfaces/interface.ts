export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  interface Geo {
    lat: string;
    lng: string;
  }



  export interface AlbumInterface {
    userId: number
    id: number
    title: string
    completed: boolean
  }


  export interface PhotoInterface {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }

