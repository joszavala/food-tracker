import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodServiceApiService } from '../../services/food-service-api/food-service-api.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.scss']
})
export class FoodSearchComponent implements OnInit {
  angForm: FormGroup;
  foodData: any = {};
  foodToSearch: string = null;
  data: any = {};

  constructor(private fb: FormBuilder, private foodApiService: FoodServiceApiService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
        foodToSearch: ''
    });
  }

  async getFoods(foodToSearch = null) {
    const endpoint = '/foodSearch';
    const searchCriteria = foodToSearch;

    this.foodApiService.getFoods(searchCriteria, endpoint)
    .subscribe(
      data => {
        this.foodData = data;
      }
    );
  }
}
