import { TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let service: Calculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator);
  });

  it('should add 2 numbers', () => {
    expect(service.add(2,3)).toBe(5);
  });

  it('should subtract 2 numbers', () => {
    expect(service.subtract(5,3)).toBe(0);
  });
});
