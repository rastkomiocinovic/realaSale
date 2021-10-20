import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateSlideComponent } from './realestate-slide.component';

describe('RealestateSlideComponent', () => {
  let component: RealestateSlideComponent;
  let fixture: ComponentFixture<RealestateSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
