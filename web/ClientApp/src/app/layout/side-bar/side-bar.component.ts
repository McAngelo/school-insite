import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
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
        /*! function ($) {
            "use strict";
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
            },
                $.Sidemenu = new Sidemenu;

        }(window.jQuery),


            $(document).ready(function ($) {

                //Sidebar Initiate

                $.Sidemenu.init();

                //Sidebar overlay

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

                //Select 2

                if ($('.select').length > 0) {
                    $('.select').select2({
                        minimumResultsForSearch: -1,
                        width: '100%'
                    });
                }

                //Floating Label

                if ($('.floating').length > 0) {
                    $('.floating').on('focus blur', function (e) {
                        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
                    }).trigger('blur');
                }

                ///Right Sidebar Scroll

                if ($('.msg-list-scroll').length > 0) {
                    $('.msg-list-scroll').slimscroll({
                        height: '100%',
                        color: '#878787',
                        disableFadeOut: true,
                        borderRadius: 0,
                        size: '4px',
                        alwaysVisible: false,
                        touchScrollStep: 100
                    });
                    var h = $(window).height() - 124;
                    $('.msg-list-scroll').height(h);
                    $('.msg-sidebar .slimScrollDiv').height(h);

                    $(window).resize(function () {
                        var h = $(window).height() - 124;
                        $('.msg-list-scroll').height(h);
                        $('.msg-sidebar .slimScrollDiv').height(h);
                    });
                }

                //Left Sidebar Scroll

                if ($('.slimscroll').length > 0) {
                    $('.slimscroll').slimScroll({
                        height: 'auto',
                        width: '100%',
                        position: 'right',
                        size: "7px",
                        color: '#ccc',
                        wheelStep: 10,
                        touchScrollStep: 100
                    });
                    var hei = $(window).height() - 60;
                    $('.slimscroll').height(hei);
                    $('.sidebar .slimScrollDiv').height(hei);

                    $(window).resize(function () {
                        var hei = $(window).height() - 60;
                        $('.slimscroll').height(hei);
                        $('.sidebar .slimScrollDiv').height(hei);
                    });
                }

                //Page wrapper height

                if ($('.page-wrapper').length > 0) {
                    var height = $(window).height();
                    $(".page-wrapper").css("min-height", height);
                }

                $(window).resize(function () {
                    if ($('.page-wrapper').length > 0) {
                        var height = $(window).height();
                        $(".page-wrapper").css("min-height", height);
                    }
                });

               // Datetimepicker

                if ($('.datetimepicker').length > 0) {
                    $('.datetimepicker').datetimepicker({
                        format: 'DD/MM/YYYY'
                    });
                }

               // Datatable

                if ($('.datatable').length > 0) {
                    $('.datatable').DataTable({
                        "bFilter": false,
                    });
                }

               // Bootstrap Tooltip

                if ($('[data-toggle="tooltip"]').length > 0) {
                    $('[data-toggle="tooltip"]').tooltip();
                }

               // Toggle Button

                if ($('.btn-toggle').length > 0) {
                    $('.btn-toggle').click(function () {
                        $(this).find('.btn').toggleClass('active');
                        if ($(this).find('.btn-success').size() > 0) {
                            $(this).find('.btn').toggleClass('btn-success');
                        }
                    });
                }

                //Mobile Menu

                if ($('.main-wrapper').length > 0) {
                    var $wrapper = $(".main-wrapper");
                    $('#mobile_btn').click(function () {
                        $wrapper.toggleClass('slide-nav');
                        $('#chat_sidebar').removeClass('opened');
                        $(".dropdown.open > .dropdown-toggle").dropdown("toggle");
                        return false;
                    });
                    $('#open_msg_box').click(function () {
                        $wrapper.toggleClass('open-msg-box');
                        $('.dropdown').removeClass('open');
                        return false;
                    });
                }

                //Lightgallery

                if ($('#lightgallery').length > 0) {
                    $('#lightgallery').lightGallery({
                        thumbnail: true,
                        selector: 'a'
                    });
                }

                //Incoming call popup

                if ($('#incoming_call').length > 0) {
                    $(window).on('load', function () {
                        $('#incoming_call').modal('show');
                        $("body").addClass("call-modal");
                    });
                }

                //Summernote

                if ($('.summernote').length > 0) {
                    $('.summernote').summernote({
                        height: 200,
                        minHeight: null,
                        maxHeight: null,
                        focus: false
                    });
                }

                //Check all email

                if ($('.checkbox-all').length > 0) {
                    $('.checkbox-all').click(function () {
                        $('.checkmail').click();
                    });
                }
                if ($('.checkmail').length > 0) {
                    $('.checkmail').each(function () {
                        $(this).click(function () {
                            if ($(this).closest('tr').hasClass("checked")) {
                                $(this).closest('tr').removeClass('checked');
                            } else {
                                $(this).closest('tr').addClass('checked');
                            }
                        });
                    });
                }
               
            });*/

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
