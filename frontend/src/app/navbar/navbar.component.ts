import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) {
    this.router.events.subscribe(event => {
      // filter `NavigationEnd` events
      if (event instanceof NavigationEnd) {
        // get current route without leading slash `/`
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join('');
        
        let userType = Number.parseInt(localStorage.getItem('userType'));
        let username = localStorage.getItem('username');

        if(userType == 1 || userType == 0)
          document.getElementById("AgencijaDropdown").classList.remove("active");
        if(username)
          document.getElementById("NekretnineDropdown").classList.remove("active");
        if(userType == 0)
          document.getElementById("AdministracijaDropdown").classList.remove("active");

        if(userType != 0 && userType != 1)
          document.getElementById("Pretraga").classList.remove("active");
        
        

        if(currentRoute == "realestate/user_realestate" || currentRoute == "realestate/user_add" || userType == 3 && currentRoute == "user_sales") {
          document.getElementById("NekretnineDropdown").classList.add("active");
        }
        if((userType == 1 || userType == 0) && (currentRoute == "" || currentRoute == "agent_graphs" || currentRoute == "realestate/agent_realestate" || (this.userType != '3' && currentRoute == "user_sales"))) {
          document.getElementById("AgencijaDropdown").classList.add("active");
        }
        if(userType == 0 && (currentRoute == "admin/registration_requests" || currentRoute == "admin/user_creation" || currentRoute == "admin/edit_users")) {
          document.getElementById("AdministracijaDropdown").classList.add("active");
        }
        if((userType != 0 && userType != 1) && currentRoute == "") {
          document.getElementById("Pretraga").classList.add("active");
        }
      }
    });
  }

  ngOnInit(): void {    
    this.userType = localStorage.getItem('userType');
    this.username = localStorage.getItem('username');
  }

  username: string;
  userType: string;

  logout(): void {
    this.userService.logout();
    document.location.href = '/';
  }
}
