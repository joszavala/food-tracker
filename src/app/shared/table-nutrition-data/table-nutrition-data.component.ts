import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: '[app-table-nutrition-data]',
  templateUrl: './table-nutrition-data.component.html',
  styleUrls: ['./table-nutrition-data.component.scss'],
})
export class TableNutritionDataComponent implements OnInit, OnChanges {
  @Input()name: string;
  @Input()primary: boolean;
  @Input()nutritionLabelData: any = {};
  public nutritionLabelObj: any = {};
  private labelItemData: any = {};

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.nutritionLabelObj = {...this.nutritionLabelData};

    this.labelItemData = {
      ...this.calculatePorcentage(this.name),
      portionQty: this.formatData(0, this.name, true),
      colspan: this.getColspan(this.primary),
      classThText: this.primary ? 'primaryText' : 'secondaryText'
    };
  }

  ngOnChanges() {}

  calculatePorcentage(propertyName: string) {
    if (!this.isValidProperty(this.nutritionLabelObj, propertyName)) { return null; }

    const { value } = this.nutritionLabelObj[propertyName];
    const { hasDV, totalDailyIntake, labelName } = this.getNutrientIntake(propertyName);

    const dIntake = (value / totalDailyIntake) * 100;

    return {
      intakeDV: !hasDV ? null : this.formatData(dIntake),
      labelName,
    };
  }

  formatData(dataToFormat?: number, propertyName: string = '', isRequiredDec: boolean = false) {
    if (dataToFormat === 0) {
      // rise and error here
      if (!this.isValidProperty(this.nutritionLabelObj, propertyName)) { return 0; }
      dataToFormat = this.nutritionLabelObj[propertyName].value;
    }

    return dataToFormat === 0 ? 0 : this.decimalPipe.transform(dataToFormat, isRequiredDec ? '1.2-2' : '1.0-0');
  }

  getNutrientIntake(type: string) {
    const nutrientData = {
      totalDailyIntake: 0,
      labelName: '',
      hasDV: true
    };

    switch (type) {
      case 'fat': {
        nutrientData.labelName = 'Total Fat';
        nutrientData.totalDailyIntake = 65;
        break;
      }
      case 'saturatedFat':
      case 'transFat': {
        nutrientData.labelName = type === 'saturatedFat' ? 'Saturated Fat' : 'Trans Fat';
        nutrientData.totalDailyIntake = 20;
        break;
      }
      case 'cholesterol':
      case 'carbohydrates': {
        nutrientData.labelName = type === 'cholesterol' ? 'Cholesterol' : 'Total Carbohydrate';
        nutrientData.totalDailyIntake = 300;
        break;
      }
      case 'protein':
      case 'sugars': {
        nutrientData.labelName = type === 'protein' ? 'Protein' : 'Total Sugar';
        nutrientData.hasDV = false;
        break;
      }
      case 'sodium': {
        nutrientData.labelName = 'Sodium';
        nutrientData.totalDailyIntake = 2400;
        break;
      }
      case 'fiber': {
        nutrientData.labelName = 'Dietary Fiber';
        nutrientData.totalDailyIntake = 25;
        break;
      }
      case 'calcium': {
        nutrientData.labelName = 'Calcium';
        nutrientData.totalDailyIntake = 1100;
        break;
      }
      case 'iron': {
        nutrientData.labelName = 'Iron';
        nutrientData.totalDailyIntake = 14;
        break;
      }
    }

    return nutrientData;
  }

  getColspan(typeOfValue) {
    return typeOfValue ? 3 : 2;
  }

  isValidProperty(objectToValidate: object, propertyName: string) {
    return objectToValidate.hasOwnProperty(propertyName);
  }
}
