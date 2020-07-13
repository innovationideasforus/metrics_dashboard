import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctcuscommsComponent } from './functcuscomms.component';

describe('FunctcuscommsComponent', () => {
  let component: FunctcuscommsComponent;
  let fixture: ComponentFixture<FunctcuscommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctcuscommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctcuscommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
