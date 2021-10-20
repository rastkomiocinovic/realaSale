import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGraphsComponent } from './agent-graphs.component';

describe('AgentGraphsComponent', () => {
  let component: AgentGraphsComponent;
  let fixture: ComponentFixture<AgentGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
