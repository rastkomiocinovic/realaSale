import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((requests: User[])=>{
      this.users = requests;
      for(let i = 0; i < this.users.length; i++) {
        if(this.users[i].type == '0' || this.users[i].type == '2') 
          this.users.splice(i--, 1);
      }
    });
  }

  users: User[] = [];
  editing: string;

  name: string;
  lastname: string;
  email: string;
  country: string;
  city: string;
  type: number;
  password: string;

  update(user: User) {
    this.userService.approveRequest(user.username).subscribe((res)=>{
      if(res['message']=='Success!'){
        const i = this.users.indexOf(user, 0);
        if(i>-1) {
          this.users.splice(i, 1);
        }
      }
    });
  }

  edit(user: User) {
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.country = user.country;
    this.city = user.city;
    this.password = null;
    this.type = user.type == '1' ? 1 : 3;
    this.editing = user.username;
  }

  cancel() {
    this.editing = "";
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

  apply(user: User) {
    const data = {
      name: this.name,
      lastname: this.lastname,
      username: this.editing,
      email: this.email,
      country: this.country,
      city: this.city,
      type: this.type,
      password: this.password ? this.password : user.password
    }
    user.name = this.name;
    user.lastname = this.lastname;
    user.email = this.email;
    user.country = this.country;
    user.city = this.city;
    user.type = this.type.toString();
    this.editing = null;
    this.userService.update(data).subscribe((res)=>{});
  }

}
