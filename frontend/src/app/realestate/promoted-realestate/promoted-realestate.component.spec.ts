import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedRealestateComponent } from './promoted-realestate.component';

describe('PromotedRealestateComponent', () => {
  let component: PromotedRealestateComponent;
  let fixture: ComponentFixture<PromotedRealestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotedRealestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
