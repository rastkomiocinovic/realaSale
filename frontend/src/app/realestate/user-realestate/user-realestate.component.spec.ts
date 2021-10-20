import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRealestateComponent } from './user-realestate.component';

describe('UserRealestateComponent', () => {
  let component: UserRealestateComponent;
  let fixture: ComponentFixture<UserRealestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRealestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
