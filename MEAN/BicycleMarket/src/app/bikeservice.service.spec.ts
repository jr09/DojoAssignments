import { TestBed, inject } from '@angular/core/testing';

import { BikeserviceService } from './bikeservice.service';

describe('BikeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeserviceService]
    });
  });

  it('should be created', inject([BikeserviceService], (service: BikeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
