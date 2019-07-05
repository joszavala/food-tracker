
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Features
// Core Components
import { FoodSearchComponent } from './core/food-search/food-search.component';
import { FoodDetailsComponent } from './core/food-details/food-details.component';

// Share
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food/search' , component: FoodSearchComponent },
  { path: 'food/details/:id', component: FoodDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
