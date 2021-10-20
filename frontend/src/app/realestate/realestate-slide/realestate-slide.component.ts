import { Component, Input, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';

@Component({
  selector: 'app-realestate-slide',
  templateUrl: './realestate-slide.component.html',
  styleUrls: ['./realestate-slide.component.css']
})
export class RealestateSlideComponent implements OnInit {
  
  @Input() re: Realestate;
  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  username: string;

}
