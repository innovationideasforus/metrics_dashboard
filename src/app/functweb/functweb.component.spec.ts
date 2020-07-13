import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctwebComponent } from './functweb.component';

describe('FunctwebComponent', () => {
  let component: FunctwebComponent;
  let fixture: ComponentFixture<FunctwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
