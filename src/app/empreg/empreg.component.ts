import { Component } from '@angular/core';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent {

empid=""
  fname=""
  lname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobno=""
  email=""
  parentname=""
  gender=""
  highestdefree=""
  yearofexperience=""
  dateofjoining=""
  username=""
  password=""
  confirmpassword=""


readEmployee=()=>

{

      let data:any ={"empid":this.empid,"fname":this.fname,"lname":this.lname,"houseno":this.houseno,"housename":this.housename,

                     "streetname":this.streetname,"pincode":this.pincode,"district":this.district,"state":this.state,

                       "country":this.country,"mobno":this.mobno,"email":this.email,"parentname":this.parentname,

                       "gender":this.gender,"highestdefree":this.highestdefree,"yearofexperience":this.yearofexperience,

                       "dateofjoining":this.dateofjoining,"username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}

      console.log(data)



}
}
