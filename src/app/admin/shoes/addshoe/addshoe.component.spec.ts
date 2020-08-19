import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoeComponent } from './addshoe.component';

describe('AddshoeComponent', () => {
  let component: AddshoeComponent;
  let fixture: ComponentFixture<AddshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
