import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.avatar = this.userService.getDefaultAvatar();
  }

  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  country: string;
  city: string;
  avatar: string;

  register() : void {
    // Data validation
    if(!this.name || !this.lastname || !this.username || !this.email || !this.password || !this.passwordConfirmation || !this.country || !this.city) {
      document.getElementById("alert").textContent = 'Sva polja su obavezna!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    if(this.password != this.passwordConfirmation) {
      document.getElementById("alert").textContent = 'Lozinka i potvrda se ne poklapaju!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    let passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
    if(!this.password.match(passwordFormat)) {
      document.getElementById("alert").textContent = 'Password mora biti dužine 8-24 karaktera. Mora sadržati malo slovo, veliko slovo, broj i specijalni karakter!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!this.email.match(mailformat)) {
      document.getElementById("alert").textContent = 'Email adresa nije validna!';
      document.getElementById("alert").style.display = 'block';
      return;
    }
    
    // Register user
    this.userService.register(this.name, this.lastname, this.username, this.email, this.password, this.country, this.city, this.avatar).subscribe(res=>{
      if(res['message'] == 'Success!') {
        document.getElementById("alert").style.display = 'none';
        document.getElementById("alertSuccess").style.display = 'block';
      }
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
