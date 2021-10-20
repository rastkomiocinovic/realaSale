import { Component, Input, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() re: Realestate;
  @Input() editable: boolean = false;
  @Input() clickable: boolean = false;
  @Input() isAgent: boolean = false;

  constructor(private rs: RealestateService) { }

  ngOnInit(): void {
    this.coverPhoto = <string>this.re.media[Math.floor(Math.random() * this.re.media.length)];
    this.deleteTarget = "#deleteModal"
  }

  coverPhoto: string;
  deleteTarget: string;


  delete(){
    document.getElementById(this.re._id).remove();
    this.rs.delete(this.re._id).subscribe((msg)=>{
      console.log(msg);
    });
  }

  edit(re) {
    re.name = 'asdf';
    console.log(re._id)
  }

  togglePromotion() {
    this.re.promoted = !this.re.promoted;
    this.rs.update(this.re).subscribe();
  }

  accept() {
    this.re.pending = false;
    this.rs.update(this.re).subscribe();
  }
}
