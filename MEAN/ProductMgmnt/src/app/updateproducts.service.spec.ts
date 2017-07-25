import { TestBed, inject } from '@angular/core/testing';

import { UpdateproductsService } from './updateproducts.service';

describe('UpdateproductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateproductsService]
    });
  });

  it('should be created', inject([UpdateproductsService], (service: UpdateproductsService) => {
    expect(service).toBeTruthy();
  }));
});
