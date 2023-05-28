import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PricingComponent } from './shared/components/pricing/pricing.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { AboutComponent } from './shared/components/about/about.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    ReviewsComponent,
    NavigationComponent,
    AboutComponent,
    FeaturesComponent,
    ContactsComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
