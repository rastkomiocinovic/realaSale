import { Component, OnInit } from '@angular/core';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private realEstateService: RealestateService) { }

  ngOnInit(): void {
    this.re = new Realestate();
    this.re.realestateType = 1;
    this.re.adType = 1;
    this.re.furnished = true;
    this.re.owner = localStorage.getItem('userType') == '3' ? localStorage.getItem('username') : 'agency';
    this.re.pending = localStorage.getItem('userType') == '3';
    this.re.media = new Array();
  }

  re: Realestate;

  add() {
    if(!this.re.name || !this.re.city || !this.re.municipality || !this.re.street || !this.re.number || !this.re.cost || !this.re.area || !this.re.rooms || !this.re.floors || (this.re.realestateType == 1 && !this.re.floor)) {
      document.getElementById("errorAlert").innerText = "Sva polja su obavezna!"
      document.getElementById("errorAlert").style.display = "block";
      return;
    }
    if((<HTMLInputElement>document.getElementById('fileInput')).files.length < 3)  {
      document.getElementById("errorAlert").innerText = "Dozvoljeno je minimalno 3 fotografije / video zapisa!"
      document.getElementById("errorAlert").style.display = "block";
      return;
    }

    this.realEstateService.add(this.re).subscribe((res)=>{
      if(res) {
        document.getElementById("successAlert").style.display = "block";
      }
    });
  }


  encodeMediaFiles() {
    this.re.media = new Array();
    let files = (<HTMLInputElement>document.getElementById('fileInput')).files;
    for(let i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.onloadend = ()=>{
        this.re.media.push(reader.result.toString());
      }
      reader.readAsDataURL(file);
    }
  }
}
