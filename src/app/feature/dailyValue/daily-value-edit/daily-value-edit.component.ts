
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

import { SystemNutrientServiceApiService } from './../../../services/system-nutrient-service-api/system-nutrient-service-api.service';
import { IDailyValue } from './../../../interfaces/dailyValues';

import { DailyValueAddComponent } from './../daily-value-add/daily-value-add.component';


@Component({
  selector: 'app-daily-value-edit',
  templateUrl: '../daily-value-add/daily-value-add.component.html',
  styleUrls: ['./daily-value-edit.component.scss']
})
export class DailyValueEditComponent extends DailyValueAddComponent implements OnInit {

  id: string;
  buttonLegend: string;

  constructor(public fb: FormBuilder,
              public systemNutrimentService: SystemNutrientServiceApiService,
              public activatedRouter: ActivatedRoute,
              public router: Router) {
      super(fb, systemNutrimentService, router, activatedRouter);
  }

  ngOnInit() {
    super.dvForm;
    super.createForm();
    this.id = this.activatedRoute.snapshot.params['id'];
    super.changeButtonLegend(this.id);
    this.getDetails(this.id);
  }
}
