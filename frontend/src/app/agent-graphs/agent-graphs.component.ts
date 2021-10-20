import { Component, OnInit } from '@angular/core';
import { Realestate } from '../models/realestate';
import { RealestateService } from '../realestate.service';

@Component({
  selector: 'app-agent-graphs',
  templateUrl: './agent-graphs.component.html',
  styleUrls: ['./agent-graphs.component.css']
})
export class AgentGraphsComponent implements OnInit {

  constructor(private rs: RealestateService) { }

  cityChartLabels = [];
  cityChartData = [];
  cityChartColors = [{ backgroundColor:  []}];
  cityChartType = 'doughnut';

  priceLabels = [];
  priceData = [0, 0, 0, 0,0 ,0 ,0 ,0];
  priceColors = [{ backgroundColor:  []}];
  priceType = 'pie';

  public typeOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public typeLabels = ['Kuće', 'Stanovi'];
  public typeType = 'bar';
  public typeLegend = true;
  public typeData = [];

  ngOnInit(): void {
    this.rs.getAll().subscribe((res: Array<Realestate>)=>{
      let hl = 0;
        let hb = 0;
        let al = 0;
        let ab = 0;
      res.forEach(element => {
        // City data:
        let i = this.cityChartLabels.indexOf(element.city);
        if( i == -1) {
          i = this.cityChartLabels.length;
          this.cityChartLabels.push(element.city);
          this.cityChartData.push(0);
        }
        this.cityChartData[i]++;
        this.cityChartColors[0].backgroundColor.push('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));


        //adRealType:        
        if(element.adType == 0) {
          if(element.realestateType == 0) hb++;
          else ab++;
        } else {
          if(element.realestateType == 0) hl++;
          else al++;
        }

        //price:

        if(element.cost < 200) this.priceData[0]++;
        else if(element.cost < 600) this.priceData[1]++;
        else if(element.cost < 1000) this.priceData[2]++;
        else if(element.cost < 5000) this.priceData[3]++;
        else if(element.cost < 50000) this.priceData[4]++;
        else if(element.cost < 100000) this.priceData[5]++;
        else if(element.cost < 250000) this.priceData[6]++;
        else if(element.cost < 50000) this.priceData[7]++;
        else this.priceData[8]++
        this.priceColors[0].backgroundColor.push('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));
      });

      this.typeData = [
        {data: [hb, ab], label: 'Prodaja'},
        {data: [hl, al], label: 'Izdavanje'}
      ];

      this.priceLabels = ["0-200€", "200-600€", "600-1000€", "1000-5000€", "5000-50000€", "50000-100000€", "100000-250000€", "250000€+"];
    });
  }

}
