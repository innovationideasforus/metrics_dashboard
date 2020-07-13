import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClaimsautoComponent } from './auto-claimsauto.component';

describe('AutoClaimsautoComponent', () => {
  let component: AutoClaimsautoComponent;
  let fixture: ComponentFixture<AutoClaimsautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoClaimsautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoClaimsautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
