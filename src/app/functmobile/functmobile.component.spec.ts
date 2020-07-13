import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctmobileComponent } from './functmobile.component';

describe('FunctmobileComponent', () => {
  let component: FunctmobileComponent;
  let fixture: ComponentFixture<FunctmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
