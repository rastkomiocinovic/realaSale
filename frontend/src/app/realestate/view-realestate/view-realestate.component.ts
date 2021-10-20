import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Realestate } from 'src/app/models/realestate';
import { Sale } from 'src/app/models/sale';
import { RealestateService } from 'src/app/realestate.service';

@Component({
  selector: 'app-view-realestate',
  templateUrl: './view-realestate.component.html',
  styleUrls: ['./view-realestate.component.css']
})
export class ViewRealestateComponent implements OnInit {

  constructor(private rs: RealestateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let reId = String(routeParams.get('reId'));
    this.rs.getById(reId).subscribe((re)=>{
      this.re = <Realestate>re;
      this.offer = this.re.cost;
    });
  }

  re: Realestate;
  offer: number;
  transactionType: number = 2;
  dateFrom: string;
  dateTo: string;

  sendOffer() {
    document.getElementById("alertError").style.display = "none";

    if(this.re.adType == 0) {
      this.createOfferSale();
    } else {
      this.createOfferLease();
    }


  }

  createOfferLease() {
    if(!this.dateFrom || !this.dateTo) {
      document.getElementById("alertError").style.display = "block";
    }
    let sale = new Sale;
    sale.dateFrom = this.dateFrom;
    sale.dateTo = this.dateTo;
    sale.cost = this.offer;
    sale.owner = this.re.owner;
    sale.buyer = localStorage.getItem("username");
    sale.realestateId = this.re._id;
    sale.status = this.re.owner == 'agency' ? 1 : 0;
    sale.type = this.re.adType;

    this.rs.addSale(sale).subscribe();
  }

  createOfferSale() {
    if(!this.transactionType || !this.offer) {
      document.getElementById("alertError").style.display = "block";
    }

    let sale = new Sale;
    sale.cost = this.offer;
    sale.owner = this.re.owner;
    sale.buyer = localStorage.getItem("username");
    sale.realestateId = this.re._id;
    sale.status = this.re.owner == 'agency' ? 1 : 0;
    sale.type = this.re.adType;

    this.rs.addSale(sale).subscribe();
  }
}
