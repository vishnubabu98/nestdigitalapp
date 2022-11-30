import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empaddfriends',
  templateUrl: './empaddfriends.component.html',
  styleUrls: ['./empaddfriends.component.css']
})
export class EmpaddfriendsComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""


  constructor(private api:ApiService){}
  readValues = ()=>

  {

    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}

    console.log(data)
    this.api.addFreind(data).subscribe(



      (response: any)=>

      {

        console.log(response)

        if(response.status == "success")

        {

          alert("Added Successfully")

          this.DescribeYourFriend=""

          this.friendName=""

          this.friendNickName=""

          this.name=""

        }

        else {

          alert ("Not Added")

        }

  }

    )

}

}

