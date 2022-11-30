import { Component } from '@angular/core';

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

  readValues = ()=>

  {

    let data :any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}

    console.log(data)

}
}
