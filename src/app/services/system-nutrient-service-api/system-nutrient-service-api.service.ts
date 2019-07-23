import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDailyValue } from 'src/app/interfaces/dailyValues';

@Injectable({
  providedIn: 'root'
})

export class SystemNutrientServiceApiService {

  private BASE_URL = 'http://localhost:3000/v1';
  private PrefixDailyValue = '/dailyValues';
  constructor(private httpClient: HttpClient) { }

  DailyValues = {
    list: (): Observable<IDailyValue[]> => {
      return this.httpClient.get<IDailyValue[]>(`${this.BASE_URL}${this.PrefixDailyValue}`);
    },
    findById: (idDV: string): Observable<IDailyValue[]> => {
      return this.httpClient.get<IDailyValue[]>(`${this.BASE_URL}${this.PrefixDailyValue}/${idDV}`);
    },
    create: (bodyParams: IDailyValue): Observable<IDailyValue[]> => {
      return this.httpClient.post<IDailyValue[]>(`${this.BASE_URL}${this.PrefixDailyValue}`, bodyParams);
    },
    delete: (idDV: string) => {
      return this.httpClient.delete(`${this.BASE_URL}${this.PrefixDailyValue}/${idDV}`);
    },
    update: (idDV: string, bodyParams: IDailyValue): Observable<IDailyValue[]> => {
      return this.httpClient.patch<IDailyValue[]>(`${this.BASE_URL}${this.PrefixDailyValue}/${idDV}`, bodyParams);
    }
  };
}
