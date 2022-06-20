import { Component, OnInit } from '@angular/core';

import $ from 'jquery';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;


    ngOnInit() {
        $(document).ready(function ($) {

            if ($('.dropdown-toggle').length > 0) {
                $('.dropdown-toggle').click(function () {
                    if ($('.main-wrapper').hasClass('open-msg-box')) {
                        $('.main-wrapper').removeClass('open-msg-box');
                    }
                });
            }
        });

    }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
