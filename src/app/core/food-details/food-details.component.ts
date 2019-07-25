import { DailyValueAddComponent } from './../../feature/dailyValue/daily-value-add/daily-value-add.component';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})

export class FoodDetailsComponent implements OnInit {
  fdcId: string;
  foodDetails: any = {};
  nutritionalData: any = {};

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.data.subscribe(response => {
      const {data} = response.food;
      this.nutritionalData = data;
    });
  }
}
