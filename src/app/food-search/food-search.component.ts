import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent implements OnInit {
    angForm: FormGroup;
    foodData: any = {};
    foodToSearch: string = null;

    constructor(private httpClient: HttpClient, private fb: FormBuilder) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
          foodToSearch: ''
      });
    }

    getFoods(foodToSearch = null) {
      const baseUrl = 'http://localhost:3000';
      const endpoint = '/foodSearch';
      const searchCriteria = foodToSearch.split(' ').join(' \+');
      const target_url = `${baseUrl}${endpoint}/${searchCriteria}`;

      console.log(searchCriteria);

      this.httpClient.get(
        target_url
      ).subscribe(
        data => {
          console.log(200);
          this.foodData = data;
        },
        error => {
          console.log(error);
          this.foodData = {error};
        }
      );
    }
}
