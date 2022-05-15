import { Component, OnInit } from '@angular/core';
import { MorrisJsModule } from 'angular-morris-js';
import Morris  from 'morris';
import $ from 'jquery';
declare var $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public donut: any = {
        element: 'pie-charts',
        colors: [
            '#ff9b44',
            '#fc6075',
            '#ffc999',
            '#fd9ba8'
        ],
        data: [],
        resize: true,
        redraw: true
    };

    public chartDonutOptions;

    public chartAreaData: any = [
        { label: "Download Sales", value: 12 },
        { label: "In-Store Sales", value: 30 },
        { label: "Mail-Order Sales", value: 20 }
    ];

  constructor() { }

    ngOnInit() {

        Morris.Donut({
            element: 'pie-chart',
            data: [
                { label: "Friends", value: 30 },
                { label: "Allies", value: 15 },
                { label: "Enemies", value: 45 },
                { label: "Neutral", value: 10 }
            ]
        });

    }

}
