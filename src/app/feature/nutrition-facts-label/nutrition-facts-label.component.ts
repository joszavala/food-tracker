import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SystemNutrientServiceApiService } from './../../services/system-nutrient-service-api/system-nutrient-service-api.service';

@Component({
  selector: 'app-nutrition-facts-label',
  templateUrl: './nutrition-facts-label.component.html',
  styleUrls: ['./nutrition-facts-label.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NutritionFactsLabelComponent implements OnInit {
  @Input() nutritionDetails: any = {};
  nutritionLabel: any = {};
  dailyValues: any;

  constructor(
    private decimalPipe: DecimalPipe,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.nutritionLabel = res.food.data.nutritionLabel;
        console.log(this.nutritionLabel);
      }
    );

    // this.nutritionLabel = {...this.nutritionDetails.nutritionLabel}

  }

  // calculatePorcentage(propertyName: string) {
  //   if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return null; }
  //   console.log('lol');
  //   const { value } = this.nutritionLabel[propertyName];
  //   const { hasDV, totalDailyIntake } = this.getNutrientIntake(propertyName);

  //   if (value === 0) { return value; }
  //   if (!hasDV && totalDailyIntake === 0 ) { return null; }

  //   const dIntake = (value / totalDailyIntake) * 100;

  //   return (this.formatData(dIntake));
  // }

  formatData(dataToFormat?: number, propertyName: string = '', isRequiredDec: boolean = false) {
    if (dataToFormat === 0) {
      if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return 0; }

      dataToFormat = this.nutritionLabel[propertyName].value;
    }

    return this.decimalPipe.transform(dataToFormat, isRequiredDec ? '1.2-2' : '1.0-0');
  }

  // getNutrientIntake(type: string) {
  //   // const nutrientData = {
  //   //   totalDailyIntake: 0,
  //   //   labelName: '',
  //   //   hasDV: true
  //   // };

  //   // this.dailyValues.map(dailyValue => {
  //   //   console.log(dailyValue.systemName);
  //   //   if (dailyValue.systemName === type) {
  //   //     nutrientData.labelName = dailyValue.name;
  //   //     nutrientData.totalDailyIntake =  dailyValue.intake;
  //   //     nutrientData.hasDV = dailyValue.hasDV;
  //   //   }
  //   // });

  //   // let nIntakeQty = 0;

  //   // switch (type) {
  //   //   case 'fat': {
  //   //     nutrientData.labelName = 'Total Fat';
  //   //     break;
  //   //   }
  //   //   case 'saturatedFat':
  //   //   case 'transFat': {
  //   //     nIntakeQty = 20;
  //   //     break;
  //   //   }
  //   //   case 'cholesterol':
  //   //   case 'carbohydrates': {
  //   //     nIntakeQty = 300;
  //   //     break;
  //   //   }
  //   //   case 'protein':
  //   //   case 'sugars': {
  //   //     nutrientData.labelName = 'Total Sugar';
  //   //     nutrientData.hasDV = false;
  //   //   }
  //   //   case 'sodium': {
  //   //     nutrientData.labelName = 'Sodium';
  //   //     nutrientData.totalDailyIntake = 2400;
  //   //     break;
  //   //   }
  //   // }

  //   //return nutrientData;
  // }

  isValidProperty(objectToValidate: object, propertyName: string) {
    return objectToValidate.hasOwnProperty(propertyName);
  }
}

/*
Fat 	65 g
Saturated and trans fats 	20 g
Cholesterol 	300 mg
Sodium 	2400 mg
Carbohydrate 	300 g
Fibre 	25 g
Sugars 	no DV
Protein 	no DV
Vitamin A 	1000 RE
Vitamin C 	60 mg
Calcium 	1100 mg
Iron 	14 mg
*/
