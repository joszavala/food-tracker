import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-nutrition-facts-label',
  templateUrl: './nutrition-facts-label.component.html',
  styleUrls: ['./nutrition-facts-label.component.scss']
})
export class NutritionFactsLabelComponent implements OnInit {
  @Input() nutritionDetails: any = {};
  nutritionLabel: any = {};

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.nutritionLabel = {...this.nutritionDetails.nutritionLabel};
    console.log(this.nutritionLabel);
  }

  calculatePorcentage(propertyName: string) {
    if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return null; }

    const { value } = this.nutritionLabel[propertyName];
    const dv: number | boolean = this.getNutrientIntake(propertyName);

    if (value === 0) { return value; }
    if (!dv) { return null; }

    const dIntake = (value / dv) * 100;

    return (this.formatData(dIntake));
  }

  formatData(dataToFormat?: number, propertyName: string = '', isRequiredDec: boolean = false) {
    if (dataToFormat === 0) {
      if (!this.isValidProperty(this.nutritionLabel, propertyName)) { return 0; }

      dataToFormat = this.nutritionLabel[propertyName].value;
    }

    if (dataToFormat === 0) { return dataToFormat; }

    return this.decimalPipe.transform(dataToFormat, isRequiredDec ? '1.2-2' : '1.0-0');
  }

  getNutrientIntake(type: string) {
    let nIntakeQty = 0;

    switch (type) {
      case 'fat': {
        nIntakeQty = 65;
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
        return false;
      }
      case 'sodium': {

      }
    }

    return nIntakeQty;
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
