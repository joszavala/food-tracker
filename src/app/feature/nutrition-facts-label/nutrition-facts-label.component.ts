import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nutrition-facts-label',
  templateUrl: './nutrition-facts-label.component.html',
  styleUrls: ['./nutrition-facts-label.component.scss']
})
export class NutritionFactsLabelComponent implements OnInit {
  @Input() nutritionDetails: any = {};
  facts: any = {};

  constructor() { }

  ngOnInit() { 
    console.log(this.nutritionDetails.nutritionLabel.calories.value);
    //console.log(this.nutritionDetails.nutritionLabel.calores.value);

  }
}
