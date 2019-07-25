import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: '[app-table-nutrition-data]',
  templateUrl: './table-nutrition-data.component.html',
  styleUrls: ['./table-nutrition-data.component.scss'],
})
export class TableNutritionDataComponent implements OnInit, OnChanges {
  @Input()name: string;
  @Input()primary: boolean;
  public nutritionLabelObj: any = {};
  private labelItemData: any = {};
  private dailyValues: any;

  constructor(
    private decimalPipe: DecimalPipe,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.nutritionLabelObj = res.food.data.nutritionLabel;
        this.dailyValues = res.dailyValues.data
      }
    );

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
    const { hasDV, totalDailyIntake, labelName, unit } = this.getNutrientIntake(propertyName);

    const dIntake = (value / totalDailyIntake) * 100;

    return {
      intakeDV: !hasDV ? null : this.formatData(dIntake),
      labelName,
      unit,
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
      hasDV: true,
      unit: ''
    };

    this.dailyValues.map(dailyValue => {
      if (dailyValue.systemName === type) {
        nutrientData.labelName = dailyValue.name;
        nutrientData.totalDailyIntake =  dailyValue.quantity;
        nutrientData.unit = dailyValue.unit;
        nutrientData.hasDV = dailyValue.hasDV;
      }
    });

    return nutrientData;
  }

  getColspan(typeOfValue) {
    return typeOfValue ? 3 : 2;
  }

  isValidProperty(objectToValidate: object, propertyName: string) {
    return objectToValidate.hasOwnProperty(propertyName);
  }
}
