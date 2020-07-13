import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepleaveComponent } from './repleave.component';

describe('RepleaveComponent', () => {
  let component: RepleaveComponent;
  let fixture: ComponentFixture<RepleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
