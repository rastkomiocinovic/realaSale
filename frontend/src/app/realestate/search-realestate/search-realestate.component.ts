import { Component, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-search-realestate',
  templateUrl: './search-realestate.component.html',
  styleUrls: ['./search-realestate.component.css']
})
export class SearchRealestateComponent implements OnInit {

  constructor(private rs: RealestateService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  username: string;

  city: string = null;
  minCost: number = null;
  maxCost: number = null; 

  results: Realestate[];

  search() {
    if(this.city == '') this.city = null;
    if(!this.city && !this.minCost && !this.maxCost) {
      document.getElementById('alert').style.display='block';
      return;
    } else {
      document.getElementById('alert').style.display='none';
    }

    this.rs.search(this.city, this.minCost, this.maxCost).subscribe((res: Realestate[])=>{
      this.results = res;
    });
  }

}
