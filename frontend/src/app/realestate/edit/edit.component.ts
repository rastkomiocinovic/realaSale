import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Realestate } from 'src/app/models/realestate';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() returnUri: string;

  constructor(private rs: RealestateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let reId = String(routeParams.get('reId'));
    this.rs.getById(reId).subscribe((re)=>{
      this.re = <Realestate>re;
    });
  }

  re: Realestate;
  reId: string;

  edit() {
    this.rs.update(this.re).subscribe((res)=>{
      document.getElementById("successAlert").style.display="block";
    });
  }

  encodeMediaFiles() {
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

  removeMedia(media: string) {
    this.re.media.splice(this.re.media.indexOf(media), 1);
  }

  leavePage() {
    this.router.navigateByUrl("/realestate/user_realestate");
  }

}
