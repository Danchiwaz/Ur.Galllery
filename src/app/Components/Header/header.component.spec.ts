import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './Header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user to true if userInfo exists in local storage', () => {
    localStorage.setItem('socialUser', JSON.stringify({name: 'John Doe'}));
    component.ngOnInit();
    expect(component.user).toBe(true);
  });

  it('should set user to false if userInfo does not exist in local storage', () => {
    localStorage.removeItem('socialUser');
    component.ngOnInit();
    expect(component.user).toBe(false);
  });

  it('should clear local storage upon logout', () => {
    localStorage.setItem('socialUser', JSON.stringify({name: 'John Doe'}));
    component.logout();
    expect(localStorage.getItem('socialUser')).toBe(null);
  });
});
