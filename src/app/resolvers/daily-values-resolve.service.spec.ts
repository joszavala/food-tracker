import { TestBed } from '@angular/core/testing';

import { DailyValuesResolveService } from './daily-values-resolve.service';

describe('DailyValuesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyValuesResolveService = TestBed.get(DailyValuesResolveService);
    expect(service).toBeTruthy();
  });
});
