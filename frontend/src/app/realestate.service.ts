import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Realestate } from './models/realestate';
import { Sale } from './models/sale';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {
  uri = 'http://localhost:4000/realestate';

  constructor(private http: HttpClient) { }

  add(re: Realestate) {
    return this.http.post(`${this.uri}/add`, re);
  }

  update(re: Realestate) {
    return this.http.post(`${this.uri}/update`, re)
  }

  getById(_id: string) {
    return this.http.post(`${this.uri}/getById`, {"_id": _id})
  }

  getAllByOwner(owner: string) {
    return this.http.post(`${this.uri}/getByOwner`, {"owner": owner});
  }

  getAll() {
    return this.http.get(`${this.uri}/getAll`);
  }

  getPromoted() {
    return this.http.get(`${this.uri}/getPromoted`);
  }

  delete(_id: string) {
    console.log(_id);
    return this.http.post(`${this.uri}/delete`, {"_id": _id});
  }

  search(city: string, minCost: number, maxCost: number) {
    return this.http.post(`${this.uri}/search`, {
      "city": city,
      "minCost": minCost,
      "maxCost": maxCost
    });
  }

  addSale(sale: Sale) {
    return this.http.post(`${this.uri}/addSale`, sale);
  }

  getSalesByOwner(owner: string) {
    return this.http.post(`${this.uri}/getSalesByOwner`, {
      "owner": owner
    });
  }
  getSalesByStatus(status: string) {
    return this.http.post(`${this.uri}/getSalesByStatus`, {
      "status": status
    });
  }

  deleteSaleById(id: string) {
    return this.http.post(`${this.uri}/deleteSaleById`, {_id: id});
  }

  deleteSaleByRealestate(id: string) {
    return this.http.post(`${this.uri}/deleteSaleByRealestate`, {realestateId: id});
  }

  deleteSaleByDates(dateFrom: string, dateTo: string, realestateId: string) {
    return this.http.post(`${this.uri}/deleteSaleByDates`, {realestateId: realestateId, dateFrom: dateFrom, dateTo: dateTo});
  }
}
