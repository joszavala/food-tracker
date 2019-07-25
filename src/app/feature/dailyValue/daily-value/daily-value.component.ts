import { Component, OnInit } from '@angular/core';
import { SystemNutrientServiceApiService } from '../../../services/system-nutrient-service-api/system-nutrient-service-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ActionDialogComponent } from '../../../shared/action-dialog/action-dialog.component';

@Component({
  selector: 'app-daily-value',
  templateUrl: './daily-value.component.html',
  styleUrls: ['./daily-value.component.scss']
})
export class DailyValueComponent implements OnInit {

  private dvList: any;
  constructor(private systemNutrientService: SystemNutrientServiceApiService, private dialogCase: MatDialog) { }

  ngOnInit(isUpdated = false) {
    if (isUpdated) { /* Show message. */ }
    this.getDailyValueDetail();
  }

  getDailyValueDetail() {
    this.systemNutrientService.DailyValues.list().subscribe(
      response => {
        this.dvList = response['data'];
        console.log(this.dvList);
      }
    );
  }

  openDialog(dv): void {
    const dialogConfig = new MatDialogConfig();
    const params = dv;

    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {params};

    const dialogRef = this.dialogCase.open(ActionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.systemNutrientService.DailyValues.delete(result._id).subscribe(
          data => {
            const isUpdated  = data['code'] === 200;
            this.ngOnInit(isUpdated);
          }
        );
      }
    });
  }
}
