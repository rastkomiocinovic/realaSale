import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  oldP: string;
  newP: string;
  newPC: string;

  change() {
    // Data validation
    if(!this.oldP || !this.newP || !this.newPC) {
      document.getElementById("alert").textContent = 'Sva polja su obavezna!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    if(this.newP != this.newPC) {
      document.getElementById("alert").textContent = 'Lozinka i potvrda se ne poklapaju!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    let passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
    if(!this.newP.match(passwordFormat)) {
      document.getElementById("alert").textContent = 'Password mora biti dužine 8-24 karaktera. Mora sadržati malo slovo, veliko slovo, broj i specijalni karakter!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    
    // Update user
    this.userService.signInService(localStorage.getItem("username"), this.oldP).subscribe((user: User)=>{
      if(user) {
        const data = {
          name: user.name,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          password: this.newP,
          country: user.country,
          city: user.city,
          type: user.type
        }
        this.userService.update(data).subscribe((res)=>{
          this.userService.logout();
          document.location.href="/";
        });
        
      } else {
        document.getElementById("alert").style.display = 'block';
      }
    });
  }
}
