import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFoods } from 'src/app/interfaces/foods';
import { IFoodDetails } from 'src/app/interfaces/foodDetails';

@Injectable({
  providedIn: 'root'
})

export class FoodServiceApiService {
  constructor(private httpClient: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  getFoods(searchCriteria: string, endpoint: string): Observable<IFoods[]> {
    return this.httpClient.get<IFoods[]>(`${this.BASE_URL}/v1${ endpoint }/${searchCriteria}`);
  }
  getFoodDetails(fdcID: string, endpoint: string): Observable<IFoodDetails[]> {
    return this.httpClient.get<IFoodDetails[]>(`${this.BASE_URL}/v1${endpoint}/${fdcID}`);
  }
}