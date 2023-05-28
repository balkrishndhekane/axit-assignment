import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PricingComponent } from './shared/components/pricing/pricing.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "features", component: FeaturesComponent},
  {path: "about", component: AboutComponent},
  {path: "pricing", component: PricingComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "contacts", component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
