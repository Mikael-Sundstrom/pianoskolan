/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
/* Design */
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
  MatChipsModule, MatGridListModule, MatTabsModule, MatCardModule
} from '@angular/material';
/* Angular fire */
import { AngularFireModule } from 'angularfire2';
/* Modules */
import { AppRoutingModule } from './app-routing.module';
/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StoreComponent } from './components/store/store.component';
import { Error404Component } from './components/error404/error404.component';
import { AccountComponent } from './components/account/account.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    StoreComponent,
    Error404Component,
    AccountComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatChipsModule, MatGridListModule, MatTabsModule, MatCardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
