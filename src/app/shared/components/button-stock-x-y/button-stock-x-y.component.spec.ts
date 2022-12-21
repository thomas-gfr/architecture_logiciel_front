import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStockXYComponent } from './button-stock-x-y.component';

describe('ButtonStockXYComponent', () => {
  let component: ButtonStockXYComponent;
  let fixture: ComponentFixture<ButtonStockXYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStockXYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStockXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
