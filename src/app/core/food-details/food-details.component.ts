import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { FoodServiceApiService } from '../../services/food-service-api/food-service-api.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
    fdcId: string;
    foodDetails: any = {};

    constructor(private route: ActivatedRoute, private foodApiService: FoodServiceApiService) { }

    async ngOnInit() {
      this.fdcId = this.route.snapshot.paramMap.get("id");
      const endpoint = '/foodDetails';

      this.foodApiService.getFoodDetails(this.fdcId, endpoint)
      .subscribe(
        data => {
          this.foodDetails = data;
          console.log(data);
        }
      );
    }
}
