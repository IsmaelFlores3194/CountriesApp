import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AbaoutPageComponent } from './shared/pages/abaoutPage/abaoutPage.component';
import { CountriesModule } from './countries/countries.module';

const routes : Routes = [
  // {
  //   path : '',
  //   component : HomePageComponent
  // },
  // {
  //   path : 'about',
  //   component : AbaoutPageComponent
  // },
  // {
  //   path : 'contact',
  //   component : ContactPageComponent
  // },
  {
    path : 'countries',
    loadChildren :  () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path : '**',
    redirectTo : 'countries'
  },
]

@NgModule({

  imports : [
    RouterModule.forRoot( routes ),
  ],
  exports : [
    RouterModule,
  ]

})
export class AppRoutingModule { }
