import { Component, OnInit } from '@angular/core';
 
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datasets: any[] = [
    {
      data: [20, 20, 20,20, 20, 20,20, 20, 20,20],
      borderWidth: 1,
      radius: "90%", 
      innerRadius: "75%",
      cutoutPercentage: 10,
      responsive:true,
      options: {
        radius: "90%", 
        innerRadius: "75%",
        cutoutPercentage: 10,
        responsive:true,
        scales: {
        xAxes: [{
            barPercentage: 0.4
        }]
    }
    },
      backgroundColor: [
        "#41CF69",
        "rgba(88, 80, 107, 0.9)",
        "rgba(88, 80, 107, 0.8)",
        "rgba(88, 80, 107, 0.7)",
        "rgba(88, 80, 107, 0.6)",
        "rgba(88, 80, 107, 0.5)",
        "rgba(88, 80, 107, 0.4)",
        "rgba(88, 80, 107, 0.3)",
        "rgba(88, 80, 107, 0.2)",
        "rgba(88, 80, 107, 0.1)",
      ],
      
    }];
  public doughnutChartLabels: Label[] = ['item', 'item', 'item','item', 'item', 'item','item', 'item', 'item','item'];
  public doughnutColors:any[] = [
    { backgroundColor: ["#86c7f3", "#ffe199"] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }];
  public doughnutChartData: MultiDataSet = [

  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {

    this.doughnutChartData =[ [20, 20, 20,20, 20, 20,20, 20, 20],
     ]
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
