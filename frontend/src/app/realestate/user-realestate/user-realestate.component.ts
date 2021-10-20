import { Component, Input, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-user-realestate',
  templateUrl: './user-realestate.component.html',
  styleUrls: ['./user-realestate.component.css']
})
export class UserRealestateComponent implements OnInit {
  @Input() clickable: boolean = false;
  @Input() editable: boolean = true;

  constructor(private realestateService: RealestateService) { }

  ngOnInit(): void {    
    this.realestateService.getAllByOwner(localStorage.getItem('userType') == '3' ? localStorage.getItem('username') : 'agency').subscribe((res)=>{
      this.realestate = <Realestate[]>res;
    });
  }

  realestate: Realestate[];

}
