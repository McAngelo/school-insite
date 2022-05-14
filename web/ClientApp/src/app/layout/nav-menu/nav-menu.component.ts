import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;


    ngOnInit() {
       /* ! function ($) {
            "use strict";
            var Sidemenu = function () {
                this.$menuItem = $("#sidebar-menu a");
            };

            

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

                
                // Mail important

                if ($('.mail-important').length > 0) {
                    $(".mail-important").click(function () {
                        $(this).find('i.fa').toggleClass("fa-star");
                        $(this).find('i.fa').toggleClass("fa-star-o");
                    });
                }

                if ($('.dropdown-toggle').length > 0) {
                    $('.dropdown-toggle').click(function () {
                        if ($('.main-wrapper').hasClass('open-msg-box')) {
                            $('.main-wrapper').removeClass('open-msg-box');
                        }
                    });
                }

                //Dropfiles

                if ($("#drop-zone").length > 0) {
                    var dropZone = document.getElementById('drop-zone');
                    var uploadForm = document.getElementById('js-upload-form');
                    var startUpload = function (files) {
                        console.log(files)
                    }

                    uploadForm.addEventListener('submit', function (e) {
                        var uploadFiles = document.getElementById('js-upload-files').files;
                        e.preventDefault()

                        startUpload(uploadFiles)
                    })

                    dropZone.ondrop = function (e) {
                        e.preventDefault();
                        this.className = 'upload-drop-zone';

                        startUpload(e.dataTransfer.files)
                    }

                    dropZone.ondragover = function () {
                        this.className = 'upload-drop-zone drop';
                        return false;
                    }

                    dropZone.ondragleave = function () {
                        this.className = 'upload-drop-zone';
                        return false;
                    }

                }
            });*/

    }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
