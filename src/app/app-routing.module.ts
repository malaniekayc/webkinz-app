import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { ShopLayoutComponent } from './layouts/shop-layout.component';
import { NewsLayoutComponent } from './layouts/news-layout.component';
import { HelpLayoutComponent } from './layouts/help-layout.component';
import { ParentsLayoutComponent } from './layouts/parents-layout.component';
import { AddCalendarCardComponent } from './cards/calendarCard/add-calendar-card/add-calendar-card.component';

const routes:Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'Shop', component: ShopLayoutComponent
  },
  {
    path: 'News', component: NewsLayoutComponent
  },
  {
    path: 'Help', component: HelpLayoutComponent
  },
  {
    path: 'Parents', component: ParentsLayoutComponent
  },
  {
    path: 'admin', component: AddCalendarCardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
