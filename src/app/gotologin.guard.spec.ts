import { TestBed } from '@angular/core/testing';

import { GotologinGuard } from './gotologin.guard';

describe('GotologinGuard', () => {
  let guard: GotologinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GotologinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
