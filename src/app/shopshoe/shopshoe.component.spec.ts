import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopshoeComponent } from './shopshoe.component';

describe('ShopshoeComponent', () => {
  let component: ShopshoeComponent;
  let fixture: ComponentFixture<ShopshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
