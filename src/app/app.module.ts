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
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpAddCourseComponent } from './emp-add-course/emp-add-course.component';
import { EmpaddfriendsComponent } from './empaddfriends/empaddfriends.component';
import { EmpregComponent } from './empreg/empreg.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

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
  },
  {
    path:"emplogin",component:EmploginComponent
  },
  {
    path:"empaddcourse",component:EmpAddCourseComponent
  },{
    path:"empaddfriend",component:EmpaddfriendsComponent
  },
  {
    path:"empreg",component:EmpregComponent
  },
  {
    path:"emp",component:EmploginComponent
  },
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
    ViewFriendComponent,
    EmploginComponent,
    EmpAddCourseComponent,
    EmpaddfriendsComponent,
    EmpregComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
