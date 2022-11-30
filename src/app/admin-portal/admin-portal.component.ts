import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {

  username=""
  password=""
  constructor(private route : Router){}

  adminlogin =()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    if(this.username=="admin" && this.password=="nestdigital")
    {
      this.route.navigate(['/viewcourse'])
    }
    else{
      alert("not valid credential")
    }

  }

}
