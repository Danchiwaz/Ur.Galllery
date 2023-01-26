import { TestBed } from '@angular/core/testing';
import { ProfileService } from './Profile.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProfileService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProfileService]
    });
    it('should be created', () =>{
      const service = TestBed.get(ProfileService);
      expect(service).toBeTruthy();
    });
    
  });

 
});


// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {HttpClientModule} from '@angular/common/http';
// import { myService } from './myservice';


// describe('myService', () => {

//       beforeEach(() => TestBed.configureTestingModule({
//         imports: [HttpClientTestingModule], 
//         providers: [myService]
//       }));

//        it('should be created', () => {
//         const service: myService = TestBed.get(myService);
//         expect(service).toBeTruthy();
//        });

//        it('should have getData function', () => {
//         const service: myService = TestBed.get(myService);
//         expect(service.getData).toBeTruthy();
//        });

//     });