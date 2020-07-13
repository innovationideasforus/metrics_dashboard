import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AutogiosComponent } from './autogios/autogios.component';
import { AutoEiComponent } from './auto-ei/auto-ei.component';
import { AutoClaimsautoComponent } from './auto-claimsauto/auto-claimsauto.component';
import { FunctcuscommsComponent } from './functcuscomms/functcuscomms.component';
import { FunctmobileComponent } from './functmobile/functmobile.component';
import { FunctclaimsComponent } from './functclaims/functclaims.component';
import { FunctwebComponent } from './functweb/functweb.component';
import { RepweeklyComponent } from './repweekly/repweekly.component';
import { RepmonthlyComponent } from './repmonthly/repmonthly.component';
import { RepleaveComponent } from './repleave/repleave.component';
import { RepdefectsComponent } from './repdefects/repdefects.component';
import { LearningComponent } from './learning/learning.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    HomepageComponent,
    AutogiosComponent,
    AutoEiComponent,
    AutoClaimsautoComponent,
    FunctcuscommsComponent,
    FunctmobileComponent,
    FunctclaimsComponent,
    FunctwebComponent,
    RepweeklyComponent,
    RepmonthlyComponent,
    RepleaveComponent,
    RepdefectsComponent,
    LearningComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
