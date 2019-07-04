import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NutritionFactsLabelComponent } from './nutrition-facts-label/nutrition-facts-label.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'food/search', component: FoodSearchComponent},
    {path: 'food/details/:id', component: FoodDetailsComponent},
    {path: 'food/details', component: FoodDetailsComponent},
    {path: 'food/nutrition', component: NutritionFactsLabelComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    FoodDetailsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NutritionFactsLabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
