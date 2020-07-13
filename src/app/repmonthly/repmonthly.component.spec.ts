import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepmonthlyComponent } from './repmonthly.component';

describe('RepmonthlyComponent', () => {
  let component: RepmonthlyComponent;
  let fixture: ComponentFixture<RepmonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepmonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepmonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
