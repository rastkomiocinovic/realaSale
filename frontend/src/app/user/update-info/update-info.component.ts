import { Component, Input, OnInit } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.get(localStorage.getItem("username")).subscribe((user: User)=>{
      if(user) {
        this.user = user;
        this.name = user.name;
        this.lastname = user.lastname;
        this.country = user.country;
        this.city = user.city;
        this.avatar = user.avatar;
        
        
      } else {
        document.getElementById("alert").style.display = 'block';
      }
    });

    this.avatar = this.userService.getDefaultAvatar();
  }

  name: string;
  lastname: string;
  country: string;
  city: string;
  user: User;
  avatar: string;

  update() {
    const data = {
      name: this.name,
      lastname: this.lastname,
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      country: this.country,
      city: this.city,
      type: this.user.type,
      avatar: this.avatar
    }

    this.userService.update(data).subscribe((res)=>{
      document.getElementById("alertSuccess").style.display = "block";
    });
  }

  encodeImageFile() {
    let file = (<HTMLInputElement>document.getElementById('fileInput')).files[0];
    let reader = new FileReader();
    reader.onloadend = ()=>{
      this.avatar = reader.result.toString();
    }
    reader.readAsDataURL(file);
  }
}
