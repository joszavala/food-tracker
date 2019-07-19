import { TestBed } from '@angular/core/testing';

import { SystemNutrientServiceApiService } from './system-nutrient-service-api.service';

describe('SystemNutrientServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemNutrientServiceApiService = TestBed.get(SystemNutrientServiceApiService);
    expect(service).toBeTruthy();
  });
});
