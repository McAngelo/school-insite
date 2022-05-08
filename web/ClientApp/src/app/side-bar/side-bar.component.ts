import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    public t_status: boolean = false;
    public s_status: boolean = false;
    public p_status: boolean = false;
    public m_status: boolean = false;
    public r_status: boolean = false;
    public st_status: boolean = false;
    public ac_status: boolean = false;
    public py_status: boolean = false;
    constructor() { }

    ngOnInit() {
     
    }

    public triggerDrop(menuItem: string): void {
        switch (menuItem) {
            case 'teacher':
                this.t_status = !this.t_status; 
                break;
            case 'student':
                this.s_status = !this.s_status;
                break;
            case 'parent':
                this.p_status = !this.p_status;
                break;
            case 'management':
                this.m_status = !this.m_status;
                break;
            case 'accounts':
                this.ac_status = !this.ac_status;
                break;
            case 'payroll':
                this.py_status = !this.py_status;
                break;
            case 'report':
                this.r_status = !this.r_status;
                break;
            case 'settings':
                this.st_status = !this.st_status;
                break;
        }
        
    }

}
