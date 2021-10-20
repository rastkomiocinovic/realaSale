import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getRequests().subscribe((requests: User[])=>{this.users = requests;});
  }

  users: User[] = [];

  approve(user: User) {
    this.userService.approveRequest(user.username).subscribe((res)=>{
      if(res['message']=='Success!'){
        const i = this.users.indexOf(user, 0);
        if(i>-1) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  delete(user: User) {
    this.userService.delete(user.username).subscribe((res)=>{
      if(res['message']=='Success!'){
        const i = this.users.indexOf(user, 0);
        if(i>-1) {
          this.users.splice(i, 1);
        }
      }
    });
  }
}
