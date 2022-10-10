import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './navbar_element/about/about.component';
import { ContactComponent } from './navbar_element/contact/contact.component';
import { DashboardComponent } from './navbar_element/dashboard/dashboard.component';
import { GalleryComponent } from './navbar_element/gallery/gallery.component';
import { HomeComponent } from './navbar_element/home/home.component';
import { ServiceComponent } from './navbar_element/service/service.component';
import { SignupComponent } from './navbar_element/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
