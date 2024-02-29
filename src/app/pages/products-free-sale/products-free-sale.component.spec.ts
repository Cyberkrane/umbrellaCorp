import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFreeSaleComponent } from './products-free-sale.component';

describe('ProductsFreeSaleComponent', () => {
  let component: ProductsFreeSaleComponent;
  let fixture: ComponentFixture<ProductsFreeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFreeSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFreeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
