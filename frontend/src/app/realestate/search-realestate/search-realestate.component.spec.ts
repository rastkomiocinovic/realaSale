import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRealestateComponent } from './search-realestate.component';

describe('SearchRealestateComponent', () => {
  let component: SearchRealestateComponent;
  let fixture: ComponentFixture<SearchRealestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRealestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
