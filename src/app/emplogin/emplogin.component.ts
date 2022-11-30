import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {

  username = ""
  password = ""

  constructor(private route: Router) { }

  emplogin = () => {
    let data: any = {
      "username": this.username,
      "password": this.password
    }
    console.log(data)
    if (this.username == "1122" && this.password == "12345") {
      this.route.navigate(['/empaddcourse'])
    }
    else {
      alert("not valid credential")
    }

  }

}
