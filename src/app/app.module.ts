import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavBarComponent } from './navigation/topNavBar.component';
import { SocialNavBarComponent } from './navigation/socialNavBar.component';
import { storeCarouselComponent } from './carousel/storeCarousel.component';
import { CalendarCardComponent } from './cards/calendarCard/calendarCard.component';
import { NewsCardComponent } from './cards/newsCard/newsCard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { ShopLayoutComponent } from './layouts/shop-layout.component';
import { NewsLayoutComponent } from './layouts/news-layout.component';
import { HelpLayoutComponent } from './layouts/help-layout.component';
import { ParentsLayoutComponent } from './layouts/parents-layout.component';
import { ParentsNavBarComponent } from './navigation/parentsNavBar.component';
import { ShopNavBarComponent } from './navigation/shopNavBar.component';
import { NewsNavBarComponent } from './navigation/newsNavBar.component';
import { HelpNavBarComponent } from './navigation/helpNavBar.component';
import { ParentCardComponent } from './cards/parentCard/parentCard.component';
import { BottomNavComponent } from './navigation/bottom-nav/bottom-nav.component';
import { UserInfoHttpComponent } from './user-info-http/user-info-http.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddCalendarCardComponent } from './cards/calendarCard/add-calendar-card/add-calendar-card.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SocialNavBarComponent,
    storeCarouselComponent,
    CalendarCardComponent,
    NewsCardComponent,
    HomeLayoutComponent,
    ShopLayoutComponent,
    NewsLayoutComponent,
    HelpLayoutComponent,
    ParentsLayoutComponent,
    ShopNavBarComponent,
    NewsNavBarComponent,
    HelpNavBarComponent,
    ParentsNavBarComponent,
    ParentCardComponent,
    BottomNavComponent,
    UserInfoHttpComponent,
    AddCalendarCardComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
