import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctclaimsComponent } from './functclaims.component';

describe('FunctclaimsComponent', () => {
  let component: FunctclaimsComponent;
  let fixture: ComponentFixture<FunctclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
