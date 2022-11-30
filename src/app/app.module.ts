import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactusComponent,
    GalleryComponent,
    AboutComponent,
    NavbarHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
