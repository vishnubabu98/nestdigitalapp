import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent {

  constructor(private route: Router) { }

  empid = ""
  fname = ""
  lname = ""
  houseno = ""
  housename = ""
  streetname = ""
  pincode = ""
  district = ""
  state = ""
  country = ""
  mobno = ""
  email = ""
  parentname = ""
  gender = ""
  highestdefree = ""
  yearofexperience = ""
  dateofjoining = ""
  username = ""
  password = ""
  confirmpassword = ""

  readEmployee = () => {

    let data: any = {
      "empid": this.empid, "fname": this.fname, "lname": this.lname, "houseno": this.houseno, "housename": this.housename,
      "streetname": this.streetname, "pincode": this.pincode, "district": this.district, "state": this.state,
      "country": this.country, "mobno": this.mobno, "email": this.email, "parentname": this.parentname,
      "gender": this.gender, "highestdefree": this.highestdefree, "yearofexperience": this.yearofexperience,
      "dateofjoining": this.dateofjoining, "username": this.username, "password": this.password, "confirmpassword": this.confirmpassword
    }
    console.log(data)
    if (this.password == this.confirmpassword) {
      alert("successfully registered")
      this.empid=""
      this.fname=""
      this.lname=""
      this.houseno=""
      this.housename=""
      this.streetname=""
      this.pincode=""
      this.district=""
      this.state=""
      this.country=""
      this.mobno=""
      this.email=""
      this.parentname=""
      this.gender=""
      this.highestdefree=""
      this.yearofexperience=""
      this.dateofjoining=""
      this.username=""
      this.password=""
      this.confirmpassword=""
    }
    else {
      alert("passwords are not matching")
      this.password=""
      this.confirmpassword=""
    }
  }
}
