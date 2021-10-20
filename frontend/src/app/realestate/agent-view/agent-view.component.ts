import { Component, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit {
  constructor(private realestateService: RealestateService) { }

  ngOnInit(): void {    
    this.realestateService.getAll().subscribe((res)=>{
      this.realestate = <Realestate[]>res;
    });
  }

  realestate: Realestate[];
}
