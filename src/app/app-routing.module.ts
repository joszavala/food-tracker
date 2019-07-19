import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Features
// Core Components
import { FoodSearchComponent } from './core/food-search/food-search.component';
import { FoodDetailsComponent } from './core/food-details/food-details.component';

// Share
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { TableNutritionDataComponent } from './shared/table-nutrition-data/table-nutrition-data.component';
import { NutritionFactsLabelComponent } from './feature/nutrition-facts-label/nutrition-facts-label.component';


// Resolver
import { FoodDetailsResolve } from './resolvers/food-details.resolve.service';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent },
  {
    path: 'food/search',
    component: FoodSearchComponent },
  {
    path: 'food/details/:id',
    component: FoodDetailsComponent,
    resolve: {
      food: FoodDetailsResolve
    },
    children: [
      {
        path:'', component: TableNutritionDataComponent
      },
      {
        path:'', component: NutritionFactsLabelComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FoodDetailsResolve]
})
export class AppRoutingModule { }
