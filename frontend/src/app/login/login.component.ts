import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  login(): void {
    this.userService.signInService(this.username, this.password).subscribe((user: User)=>{
      if(user) {
        this.userService.setUser(user);
        this.router.navigate(['/']);
        document.location.href="/";
      } else {
        document.getElementById("alert").style.display = 'block';
      }
    });
  }

}
