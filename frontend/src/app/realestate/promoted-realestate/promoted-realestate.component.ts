import { Component, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-promoted-realestate',
  templateUrl: './promoted-realestate.component.html',
  styleUrls: ['./promoted-realestate.component.css']
})
export class PromotedRealestateComponent implements OnInit {

  constructor(private rs: RealestateService) { }

  ngOnInit(): void {
    this.rs.getPromoted().subscribe((res)=>{
      this.re = <Realestate[]>res;
    });
  }

  re: Realestate[];
}
