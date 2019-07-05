import { TestBed } from '@angular/core/testing';

import { FoodServiceApiService } from './food-service-api.service';

describe('FoodServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodServiceApiService = TestBed.get(FoodServiceApiService);
    expect(service).toBeTruthy();
  });
});
