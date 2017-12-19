import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AccountComponent } from './components/account/account.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hem',
    pathMatch: 'full'
  },
  {
    path: 'hem',
    children: [],
    component: HomeComponent
  },
  {
    path: 'min-sida',
    children: [],
    component: AccountComponent
  },
  {
    path: 'kurser',
    children: [],
    component: CoursesComponent
  },
  {
    path: 'butik',
    children: [],
    component: StoreComponent
  },
  {
    path: 'om-oss',
    children: [
      {
        path: 'villkor',
        component: TermsAndConditionsComponent
      },
      {
        path: 'integritetspolicy',
        component: PrivacyPolicyComponent
      }
    ],
    component: AboutComponent
  },
  {
    path: 'notes',
    component: Error404Component,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    children: [],
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
