import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {
  constructor(private api: ApiService) {

    api.fetchFriends().subscribe(
      (response) => {
        this.loading=false
        this.data = response
      }

    )

  }
  data: any = []
  loading:boolean=true

}
