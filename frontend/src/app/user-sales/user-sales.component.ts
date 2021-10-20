import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { config } from 'rxjs';
import { Realestate } from '../models/realestate';
import { Sale } from '../models/sale';
import { RealestateService } from '../realestate.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-sales',
  templateUrl: './user-sales.component.html',
  styleUrls: ['./user-sales.component.css']
})
export class UserSalesComponent implements OnInit {

  constructor(private rs: RealestateService, private us: UsersService) { }

  ngOnInit(): void {
    this.userType = Number.parseInt(localStorage.getItem("userType"));
    if(localStorage.getItem("userType") == '3') {
      this.rs.getSalesByOwner(localStorage.getItem("username")).subscribe((sales: Sale[])=>{
        this.sales = sales;
        for(let i = 0; i < this.sales.length; i++) {
          this.rs.getById(this.sales[i].realestateId).subscribe((re: Realestate)=>{
            this.sales[i].re = re;
          });
        }
      });
    } else {
      this.rs.getSalesByStatus('1').subscribe((sales: Sale[])=>{
        this.sales = sales;
        for(let i = 0; i < this.sales.length; i++) {
          this.rs.getById(this.sales[i].realestateId).subscribe((re: Realestate)=>{
            this.sales[i].re = re;
          });
        }
      });
      this.rs.getSalesByStatus('2').subscribe((sales: Sale[])=>{
        this.us.getConfig().subscribe((config: Config)=>{
          this.config = config;
          console.log(config);
          this.commissionRent = config.rentCommission;
          this.commissionSale = config.saleCommission;
        });
        this.sold = sales;
        for(let i = 0; i < this.sold.length; i++) {
          this.rs.getById(this.sold[i].realestateId).subscribe((re: Realestate)=>{
            this.sold[i].re = re;
          });
        }
      });
    }    
  }

  sales;
  sold;
  userType: number;
  commissionSale: number;
  commissionRent: number;
  config: Config;

  delete(sale) {
    this.rs.deleteSaleById(sale._id).subscribe();
    sale.status = -1;
  }

  approve(sale) {
    sale.status = this.userType == 3 ? 1 : 2;
    alert(sale.status);

    let s = new Sale;
    s.cost = sale.cost;
    s.owner = sale.owner;
    s.buyer = sale.buyer;
    s.dateFrom = sale.dateFrom;
    s.dateTo = sale.dateTo;
    s.realestateId = sale.realestateId;
    s.status = sale.status;
    s.type = s.type;

    this.rs.deleteSaleByRealestate(s.realestateId).subscribe(() => {
      this.rs.addSale(s).subscribe();
      sale.re.pending = true;
      sale.re.promoted = false;
      this.rs.update(sale.re).subscribe();
    });
  }

  saveConfig() {
    this.config.saleCommission = this.commissionRent;
    this.config.rentCommission = this.commissionSale;
    console.log(this.config);
    this.us.updateConfig(this.config).subscribe();
  }

}
