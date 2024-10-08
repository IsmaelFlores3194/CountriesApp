import { HomePageComponent } from './pages/homePage/homePage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbaoutPageComponent } from './pages/abaoutPage/abaoutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AbaoutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    HomePageComponent,
    AbaoutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,

  ]
})
export class SharedModule { }
