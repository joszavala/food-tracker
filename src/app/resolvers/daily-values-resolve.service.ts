
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemNutrientServiceApiService } from './../services/system-nutrient-service-api/system-nutrient-service-api.service';
import { IDailyValue } from 'src/app/interfaces/dailyValues';

@Injectable({
  providedIn: 'root'
})
export class DailyValuesResolveService implements Resolve<any> {

  constructor(private systemNutrientApi: SystemNutrientServiceApiService) { }

  resolve(): Observable<IDailyValue[]> {
    const dvList = this.systemNutrientApi.DailyValues.list();
    return dvList;
  }
}
