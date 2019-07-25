import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FoodServiceApiService } from '../services/food-service-api/food-service-api.service';
import { IFoodDetails } from './../interfaces/foodDetails';
import { Observable } from 'rxjs';

@Injectable()
export class FoodDetailsResolve implements Resolve<any> {

  constructor(
    private foodDetailsService: FoodServiceApiService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot):Observable<IFoodDetails[]> {
    const endpoint = '/foodDetails';
    const fcdId = route.params['id'];
    const foodDetails = this.foodDetailsService.getFoodDetails(fcdId, endpoint);

    return foodDetails;
  }
}
