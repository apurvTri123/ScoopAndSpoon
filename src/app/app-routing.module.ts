import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPageComponent } from './detail-page/detail-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/LandingPageComponent', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'LandingPageComponent', component: LandingPageComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
