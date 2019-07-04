import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
    fdcId: string;
    foodDetails: any;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.fdcId = this.route.snapshot.paramMap.get("id");
        this.getFoodDetails(this.fdcId);
    }

    getFoodDetails(id) {
        const baseUrl = 'http://localhost:3000';
        const endpoint = '/foodDetails';
        const target_url = `${baseUrl}${endpoint}/${id}`;

        this.httpClient.get(
            target_url
        ).subscribe(
            data => {
                console.log('200');
                console.log(data);
                this.foodDetails = data;
            },
            error => {
                console.log(error);
                this.foodDetails = {error};
            }
        );
    }
}
