import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepweeklyComponent } from './repweekly.component';

describe('RepweeklyComponent', () => {
  let component: RepweeklyComponent;
  let fixture: ComponentFixture<RepweeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepweeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepweeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
