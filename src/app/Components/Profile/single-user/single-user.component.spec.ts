import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleUserComponent } from './single-user.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProfileService } from '../profService/Profile.service';

describe('SingleUserComponent', () => {
  let component: SingleUserComponent;
  let fixture: ComponentFixture<SingleUserComponent>;
  let activatedRoute: ActivatedRoute;
  let profileService: ProfileService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUserComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ userId: 1 }) } },
        { provide: ProfileService, useValue: {
            getUserDetails: () => of({ name: 'John Doe' }),
            getUserAlbums: () => of([{ id: 1, title: 'Album 1', userId: 1 }])
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    profileService = TestBed.get(ProfileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the userId from the activated route', () => {
    expect(component.userId).toEqual(1);
  });

  it('should set the singleUser with the user details', () => {
    expect(component.singleUser).toEqual(
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    );
  });

  it('should call the getAllUserAlbums method', () => {
    spyOn(component, 'getAllUserAlbums');
    component.ngOnInit();
    expect(component.getAllUserAlbums).toHaveBeenCalledWith(1);
  });

  it('should set the userAlbums with the user albums', () => {
    component.ngOnInit();
    expect(component.userAlbums).toEqual([{ id: 1, title: 'Album 1', userId: 1,completed:false }]);
  });
});
