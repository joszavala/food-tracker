
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError, Observable } from 'rxjs';

import { SystemNutrientServiceApiService } from './../../../services/system-nutrient-service-api/system-nutrient-service-api.service';
import { IDailyValue } from './../../../interfaces/dailyValues';

@Component({
  selector: 'app-daily-value-add',
  templateUrl: './daily-value-add.component.html',
  styleUrls: ['./daily-value-add.component.scss']
})
export class DailyValueAddComponent implements OnInit {

  public dvForm: FormGroup;
  public buttonLegend: string;
  public id: string;

  constructor(public fb: FormBuilder,
              public systemNutrientService: SystemNutrientServiceApiService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.changeButtonLegend();
  }

  saveDailyValue(id= null) {
    const bodyParams = this.buildBodyParams(id, this.dvForm.controls);

    const responseApi: Observable<IDailyValue[]> = !id ?
    this.systemNutrientService.DailyValues.create(bodyParams) :
    this.systemNutrientService.DailyValues.update(id, bodyParams);

    responseApi.subscribe(
      response => {
        if (response['code'] === 200) {
         this.router.navigate(['/dv']);
        }
      }
    );
  }

  createForm() {
    this.dvForm = this.fb.group({
      name: '',
      quantity: '',
      unit: 'g',
      systemName: '',
      hasDV: true
    });
  }

  buildBodyParams(id, formControls) {
    let formInterface: IDailyValue;
    const payload: IDailyValue = this.createObject(formControls, formInterface, true);

    return payload;
  }

  changeButtonLegend(id= null) {
    this.buttonLegend = id !== null ? 'Update' : 'Add';
  }

  getDetails(idDV: string) {
    this.systemNutrientService.DailyValues.findById(idDV).subscribe(
      response => {
        if (response['code'] !== 200) { throwError('Data not found'); }
        this.id = response['data']._id;
        this.fillCtrlsToUpdate(response['data']);
      },
      err => {
        console.log(err);
      }
    );
  }

  fillCtrlsToUpdate(dataToFill: IDailyValue) {
    this.dvForm.setValue({
      name: dataToFill.name,
      systemName: dataToFill.systemName,
      quantity: dataToFill.quantity,
      unit: dataToFill.unit,
      hasDV: dataToFill.hasDV
    });
  }

  private getPropertyNameValue(objectToObtain, propertyName, isPayload:boolean = false) {
    let propertyData = !isPayload ? objectToObtain[propertyName] : objectToObtain[propertyName].value;
    console.log(propertyData);
    return propertyData;
  }

  private createObject(propertyNames, interfaceStructure, isPayload = false) {
    const keyNames = Object.keys(propertyNames);
    let objectMirror = {};

    for (let keyName of keyNames) {
      objectMirror[keyName] = this.getPropertyNameValue(propertyNames, keyName, isPayload);
    }

    interfaceStructure = {...objectMirror};

    return interfaceStructure;
  }
}
