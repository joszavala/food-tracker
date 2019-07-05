import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Features
import { NutritionFactsLabelComponent } from './feature/nutrition-facts-label/nutrition-facts-label.component';

//Core Components
import { FoodSearchComponent } from './core/food-search/food-search.component';
import { FoodDetailsComponent } from './core/food-details/food-details.component';

//Shared
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

// Services
import { FoodServiceApiService } from './services/food-service-api/food-service-api.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

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
    PageNotFoundComponent
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
    FoodServiceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
