import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextStockXYComponent } from './input-text-stock-x-y.component';

describe('InputTextStockXYComponent', () => {
  let component: InputTextStockXYComponent;
  let fixture: ComponentFixture<InputTextStockXYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextStockXYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextStockXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
