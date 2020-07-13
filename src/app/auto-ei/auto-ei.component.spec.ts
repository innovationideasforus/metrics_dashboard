import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEiComponent } from './auto-ei.component';

describe('AutoEiComponent', () => {
  let component: AutoEiComponent;
  let fixture: ComponentFixture<AutoEiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
