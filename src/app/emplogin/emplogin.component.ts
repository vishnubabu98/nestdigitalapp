import { Component } from '@angular/core';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {

  username=""
  password=""

  emplogin =()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }

}
