import { TestBed } from '@angular/core/testing';

import { SmokeDetectionService } from './smoke-detection.service';

describe('SmokeDetectionService', () => {
  let service: SmokeDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmokeDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
