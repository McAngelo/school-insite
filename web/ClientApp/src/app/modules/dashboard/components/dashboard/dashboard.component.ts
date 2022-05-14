import { Component, OnInit } from '@angular/core';
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

  constructor() { }

    ngOnInit() {

        this.donut.data.push(
            //{ label: "Owners", value: this.dashboardData.ownerOccupied },
            //{ label: "Tenants", value: this.dashboardData.renterOccupied },
            //{ label: "Caretakers", value: this.dashboardData.caretakerOccupied }

            { label: "Friends", value: 30 },
            { label: "Allies", value: 15 },
            { label: "Enemies", value: 45 },
            { label: "Neutral", value: 10 }
        );
        Morris.Donut(this.donut);

    }

}
