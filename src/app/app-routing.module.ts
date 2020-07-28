import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AutoClaimsautoComponent } from './auto-claimsauto/auto-claimsauto.component';
import { AutoeiComponent } from './auto-ei/auto-ei.component';
import { AutogiosComponent } from './autogios/autogios.component';
import { FunctclaimsComponent } from './functclaims/functclaims.component';
import { FunctcuscommsComponent } from './functcuscomms/functcuscomms.component';
import { FunctmobileComponent } from './functmobile/functmobile.component';
import { FunctwebComponent } from './functweb/functweb.component';
import { RepdefectsComponent } from './repdefects/repdefects.component';
import { RepleaveComponent } from './repleave/repleave.component';
import { RepmonthlyComponent } from './repmonthly/repmonthly.component';
import { RepweeklyComponent } from './repweekly/repweekly.component';

const routes: Routes = [
  {
    path: '', // Default page is submitted apps
    redirectTo: '/signup',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'claimsauto',
    component: AutoClaimsautoComponent,
  },
  {
    path: 'auto-ei',
    component: AutoeiComponent,
  },
  {
    path: 'autogios',
    component: AutogiosComponent,
  },
  {
    path: 'functclaims',
    component: FunctclaimsComponent,
  },
  {
    path: 'functcuscomms',
    component: FunctcuscommsComponent,
  },
  {
    path: 'functmobile',
    component: FunctmobileComponent,
  },
  {
    path: 'functweb',
    component: FunctwebComponent,
  },
  {
    path: 'repdefects',
    component: RepdefectsComponent,
  },
  {
    path: 'repleave',
    component: RepleaveComponent,
  },
  {
    path: 'repmonthly',
    component: RepmonthlyComponent,
  },
  {
    path: 'repweekly',
    component: RepweeklyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
