import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoeiComponent } from './auto-ei.component';

describe('AutoeiComponent', () => {
  let component: AutoeiComponent;
  let fixture: ComponentFixture<AutoeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutoeiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
