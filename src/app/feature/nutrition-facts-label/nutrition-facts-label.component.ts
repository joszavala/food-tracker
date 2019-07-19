import { Component, OnInit, Input,ViewEncapsulation, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { TableNutritionDataComponent } from '../../shared/table-nutrition-data/table-nutrition-data.component';

@Component({
  selector: 'app-nutrition-facts-label',
  templateUrl: './nutrition-facts-label.component.html',
  styleUrls: ['./nutrition-facts-label.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NutritionFactsLabelComponent implements OnInit, AfterViewInit, OnChanges {
  // @ViewChild(TableNutritionDataComponent, { static: false }) nutritionDataReference;
  @Input() nutritionDetails: any = {};
  nutritionLabel: any = {};

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    console.log(this.nutritionDetails.nutritionLabel);
    this.nutritionLabel = {...this.nutritionDetails.nutritionLabel}
  }

  ngAfterViewInit() {
    // this.nutritionDataReference.nutritionLabelObj = this.nutritionLabel;
    // console.log('afterView', this.nutritionDataReference.nutritionLabelObj);
  }

  ngOnChanges() {}

  calculatePorcentage(propertyName: string) {
    if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return null; }

    const { value } = this.nutritionLabel[propertyName];
    const { hasDV, totalDailyIntake } = this.getNutrientIntake(propertyName);

    if (value === 0) { return value; }
    if (!hasDV && totalDailyIntake === 0 ) { return null; }

    const dIntake = (value / totalDailyIntake) * 100;

    return (this.formatData(dIntake));
  }

  formatData(dataToFormat?: number, propertyName: string = '', isRequiredDec: boolean = false) {
    if (dataToFormat === 0) {
      if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return 0; }

      dataToFormat = this.nutritionLabel[propertyName].value;
    }

    return this.decimalPipe.transform(dataToFormat, isRequiredDec ? '1.2-2' : '1.0-0');
    // return `<div>${dataToFormat}</div>`;
  }

  getNutrientIntake(type: string) {
    const nutrientData = {
      totalDailyIntake: 0,
      labelName: '',
      hasDV: true
    };
    let nIntakeQty = 0;

    switch (type) {
      case 'fat': {
        nutrientData.labelName = 'Total Fat';
        nutrientData.totalDailyIntake = 65;
        break;
      }
      case 'saturatedFat':
      case 'transFat': {
        nIntakeQty = 20;
        break;
      }
      case 'cholesterol':
      case 'carbohydrates': {
        nIntakeQty = 300;
        break;
      }
      case 'protein':
      case 'sugars': {
        nutrientData.labelName = 'Total Sugar';
        nutrientData.hasDV = false;
      }
      case 'sodium': {
        nutrientData.labelName = 'Sodium';
        nutrientData.totalDailyIntake = 2400;
        break;
      }
    }

    return nutrientData;
  }

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
