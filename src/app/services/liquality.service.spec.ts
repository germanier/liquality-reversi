import { TestBed } from '@angular/core/testing';

import { LiqualityService } from './liquality.service';

describe('LiqualityService', () => {
  let service: LiqualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiqualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
