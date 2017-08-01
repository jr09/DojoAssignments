import { TestBed, inject } from '@angular/core/testing';

import { GithubapiserviceService } from './githubapiservice.service';

describe('GithubapiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubapiserviceService]
    });
  });

  it('should be created', inject([GithubapiserviceService], (service: GithubapiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
