import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepdefectsComponent } from './repdefects.component';

describe('RepdefectsComponent', () => {
  let component: RepdefectsComponent;
  let fixture: ComponentFixture<RepdefectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepdefectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepdefectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
