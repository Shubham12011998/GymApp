import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './navbar_element/home/home.component';
import { AboutComponent } from './navbar_element/about/about.component';
import { ServiceComponent } from './navbar_element/service/service.component';
import { GalleryComponent } from './navbar_element/gallery/gallery.component';
import { ContactComponent } from './navbar_element/contact/contact.component';
import { ServiceitemComponent } from './navbar_element/service/serviceitem/serviceitem.component';
import { ServicedetailsComponent } from './navbar_element/service/servicedetails/servicedetails.component';
import { ServicelistComponent } from './navbar_element/service/serviceitem/servicelist/servicelist.component';
import { GymItemComponent } from './navbar_element/about/gyn-item-list/gym-item/gym-item.component';
import { GynItemDetailsComponent } from './navbar_element/about/gyn-item-details/gyn-item-details.component';
import { GynItemListComponent } from './navbar_element/about/gyn-item-list/gyn-item-list.component';
import { SignupComponent } from './navbar_element/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './navbar_element/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    ContactComponent,
    ServiceitemComponent,
    ServicedetailsComponent,
    ServicelistComponent,
    GymItemComponent,
    GynItemDetailsComponent,
    GynItemListComponent,
    SignupComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
