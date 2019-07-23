import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DailyValueComponent } from './../../feature/dailyValue/daily-value/daily-value.component';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit {
  params = {};

  constructor(
    private dialogRef: MatDialogRef<DailyValueComponent>,
    @Inject(MAT_DIALOG_DATA) {params}
  ) { this.params = params }

  ngOnInit() {
  }

  deleteInfo() {
    console.log('dialog component: ', this.params);
    this.dialogRef.close(this.params);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
