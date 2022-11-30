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
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';

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
  },
  {
    path:"admin",
    component:AdminPortalComponent
  },
  {
    path:"viewcourse",component:ViewCoursesComponent
  },
  {
    path:"viewfriend",component:ViewFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactusComponent,
    GalleryComponent,
    AboutComponent,
    NavbarHomeComponent,
    AdminPortalComponent,
    ViewCoursesComponent,
    ViewFriendComponent
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
