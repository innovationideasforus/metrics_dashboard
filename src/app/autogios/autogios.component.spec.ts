import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutogiosComponent } from './autogios.component';

describe('AutogiosComponent', () => {
  let component: AutogiosComponent;
  let fixture: ComponentFixture<AutogiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutogiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutogiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
