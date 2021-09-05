import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service).toBeTruthy();
  });

  it('should call getProducts method', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProducts().length).toBe(7);
  });

  it('Number product with price greater than 200', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service.getProducts().filter(p=>{
      return p.price > 100;
    }).length).toEqual(2);
  });

  it('2 equal', () => {
    expect(2).toBeGreaterThan(1);
  });
  
});
