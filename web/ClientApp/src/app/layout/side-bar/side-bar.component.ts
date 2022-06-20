import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    
    constructor() { }

    ngOnInit() {

        $(document).ready(function ($) {

            // Sidebar Initiate

            var Sidemenu = function () {
                this.$menuItem = $("#sidebar-menu a");
            };

            Sidemenu.prototype.init = function () {
                var $this = this;
                $this.$menuItem.on('click', function (e) {
                    if ($(this).parent().hasClass("submenu")) {
                        e.preventDefault();
                    }
                    if (!$(this).hasClass("subdrop")) {
                        $("ul", $(this).parents("ul:first")).slideUp(350);
                        $("a", $(this).parents("ul:first")).removeClass("subdrop");
                        $(this).next("ul").slideDown(350);
                        $(this).addClass("subdrop");
                    } else if ($(this).hasClass("subdrop")) {
                        $(this).removeClass("subdrop");
                        $(this).next("ul").slideUp(350);
                    }
                });
                $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
            };

            $.Sidemenu = new Sidemenu;

            $.Sidemenu.init();

            // Sidebar overlay

            var $sidebarOverlay = $(".sidebar-overlay");
            $("#mobile_btn, .task-chat").on("click", function (e) {
                var $target = $($(this).attr("href"));
                if ($target.length) {
                    $target.toggleClass("opened");
                    $sidebarOverlay.toggleClass("opened");
                    $("html").toggleClass("menu-opened");
                    $sidebarOverlay.attr("data-reff", $(this).attr("href"));
                }
                e.preventDefault();
            });

            $sidebarOverlay.on("click", function (e) {
                var $target = $($(this).attr("data-reff"));
                if ($target.length) {
                    $target.removeClass("opened");
                    $("html").removeClass("menu-opened");
                    $(this).removeClass("opened");
                    $(".main-wrapper").removeClass("slide-nav");
                }
                e.preventDefault();
            });

            if ($('.dropdown-toggle').length > 0) {
                $('.dropdown-toggle').click(function () {
                    if ($('.main-wrapper').hasClass('open-msg-box')) {
                        $('.main-wrapper').removeClass('open-msg-box');
                    }
                });
            }
        });

        


    }


}
