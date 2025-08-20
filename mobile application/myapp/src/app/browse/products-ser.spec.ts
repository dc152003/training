import { TestBed } from '@angular/core/testing';

import { ProductsSer } from './products-ser';

describe('ProductsSer', () => {
  let service: ProductsSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
