import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Features
import { NutritionFactsLabelComponent } from './feature/nutrition-facts-label/nutrition-facts-label.component';

// Core Components
import { FoodSearchComponent } from './core/food-search/food-search.component';
import { FoodDetailsComponent } from './core/food-details/food-details.component';

// Shared
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

// Services
import { FoodServiceApiService } from './services/food-service-api/food-service-api.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TableNutritionDataComponent } from './shared/table-nutrition-data/table-nutrition-data.component';

// CRUD
// // Daily Value
import { DailyValueComponent } from './feature/dailyValue/daily-value/daily-value.component';
import { DailyValueDetailComponent } from './feature/dailyValue/daily-value-detail/daily-value-detail.component';
import { DailyValueAddComponent } from './feature/dailyValue/daily-value-add/daily-value-add.component';
import { DailyValueEditComponent } from './feature/dailyValue/daily-value-edit/daily-value-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    FoodDetailsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NutritionFactsLabelComponent,
    PageNotFoundComponent,
    TableNutritionDataComponent,
    DailyValueComponent,
    DailyValueDetailComponent,
    DailyValueAddComponent,
    DailyValueEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    FoodServiceApiService,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
