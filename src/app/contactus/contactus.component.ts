import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  FirstName=""
  SecondName=""
  Email=""
  HowCanWeHelpYou?=""

  readValues=()=>
  {
    let data:any={"FirsName":this.FirstName,"SecondName":this.SecondName,"Email":this.Email,"HowCanWeHelpYou?":this.HowCanWeHelpYou}
    console.log(data)
  }

}
