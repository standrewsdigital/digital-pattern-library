/**
 * DataTables integration
 * This file sets defaults styles and options for the Datatable plugin.
 *
 * Based on the vanilla integration for Bootstrap 3.
 * http://datatables.net/manual/styling/bootstrap
 */
$(document).ready(function(window, document, undefined) {

    var factory = function($, DataTable) {
    "use strict";


        /* Set the defaults for DataTables initialisation */
        $.extend(true, DataTable.defaults, {
            dom: "<'row dt-pre'<'col-md-6'<'dt-title'>l><'col-md-6 text-right'f>>" +
                "<'row dt-table'<'col-sm-12'tr>>" +
                "<'row dt-post'<'col-md-6'p><'col-md-6 text-right'i>>",
            renderer: 'bootstrap',
            preDrawCallback: function(settings) {
                var container = $(this.api().table().container()),
                    table = $(this.api().table()),
                    padding = table.find("th").css('padding');

                container.find(".dt-title").css('padding', padding);
                container.find(".dataTables_filter").css('padding', padding);
            },
            language: {
                info: "_START_ to _END_ of _TOTAL_ rows",
                infoEmpty: "0 rows",
                infoFiltered: "filtered from _MAX_ total rows",
                paginate: {
                    previous: "&laquo;",
                    next: "&raquo;"
                },
                processing: "Loading...",
                search: "Filter "
            },
            info: false,
            pageLength: 10,
            processing: true,
            responsive: true,
            searching: false,
            paging: false
        });


        /* Default class modification */
        $.extend(DataTable.ext.classes, {
            sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
            sFilterInput: "form-control",
            sLengthSelect: "form-control"
        });


        /* Bootstrap paging button renderer */
        DataTable.ext.renderer.pageButton.bootstrap = function(settings, host, idx, buttons, page, pages) {
            var api = new DataTable.Api(settings);
            var classes = settings.oClasses;
            var lang = settings.oLanguage.oPaginate;
            var btnDisplay, btnClass;

            var attach = function(container, buttons) {
                var i, ien, node, button;
                var clickHandler = function(e) {
                    e.preventDefault();
                    if (!$(e.currentTarget).hasClass('disabled')) {
                        api.page(e.data.action).draw(false);
                    }
                };

                for (i = 0, ien = buttons.length; i < ien; i++) {
                    button = buttons[i];

                    if ($.isArray(button)) {
                        attach(container, button);
                    } else {
                        btnDisplay = '';
                        btnClass = '';

                        switch (button) {
                            case 'ellipsis':
                                btnDisplay = '&hellip;';
                                btnClass = 'disabled';
                                break;

                            case 'first':
                                btnDisplay = lang.sFirst;
                                btnClass = button + (page > 0 ?
                                    '' : ' disabled');
                                break;

                            case 'previous':
                                btnDisplay = lang.sPrevious;
                                btnClass = button + (page > 0 ?
                                    '' : ' disabled');
                                break;

                            case 'next':
                                btnDisplay = lang.sNext;
                                btnClass = button + (page < pages - 1 ?
                                    '' : ' disabled');
                                break;

                            case 'last':
                                btnDisplay = lang.sLast;
                                btnClass = button + (page < pages - 1 ?
                                    '' : ' disabled');
                                break;

                            default:
                                btnDisplay = button + 1;
                                btnClass = page === button ?
                                    'active' : '';
                                break;
                        }

                        // Only show pagination of there is more than one page (>10 rows).
                        if (btnDisplay && pages > 1) {
                            node = $('<li>', {
                                    'class': classes.sPageButton + ' ' + btnClass,
                                    'aria-controls': settings.sTableId,
                                    'tabindex': settings.iTabIndex,
                                    'id': idx === 0 && typeof button === 'string' ?
                                        settings.sTableId + '_' + button : null
                                })
                                .append($('<a>', {
                                        'href': '#'
                                    })
                                    .html(btnDisplay)
                                )
                                .appendTo(container);

                            settings.oApi._fnBindAction(
                                node, {
                                    action: button
                                }, clickHandler
                            );
                        }
                    }
                }
            };

            attach(
                $(host).empty().html('<ul class="pagination"/>').children('ul'),
                buttons
            );
        };


        /*
         * TableTools Bootstrap compatibility
         * Required TableTools 2.1+
         */
        if (DataTable.TableTools) {
            // Set the classes that TableTools uses to something suitable for Bootstrap
            $.extend(true, DataTable.TableTools.classes, {
                "container": "DTTT btn-group",
                "buttons": {
                    "normal": "btn btn-default",
                    "disabled": "disabled"
                },
                "collection": {
                    "container": "DTTT_dropdown dropdown-menu",
                    "buttons": {
                        "normal": "",
                        "disabled": "disabled"
                    }
                },
                "print": {
                    "info": "DTTT_print_info"
                },
                "select": {
                    "row": "active"
                }
            });

            // Have the collection use a bootstrap compatible drop down
            $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
                "collection": {
                    "container": "ul",
                    "button": "li",
                    "liner": "a"
                }
            });


        }



    }; // /factory


    // Define as an AMD module if possible
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'datatables'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'), require('datatables'));
    } else if (jQuery) {
        // Otherwise simply initialise as normal, stopping multiple evaluation
        factory(jQuery, jQuery.fn.dataTable);
    }

    // Auto setup any tables with class 'dataTable' that arent within a class 'pattern-source'
    $(".dataTable").not(".pattern-source > .dataTable").DataTable({
        info: true, // enable the "x to xx of xx rows" text
        lengthChange: true, // enable the num of rows selector
        lengthMenu: [ [ 10, 25, 50, 100, -1], [ 10, 25, 50, 100, "All"] ], // Set the row selector values
        searching: true, // enable the filter
        paging: true // enable pagination
    });

    // Auto setup bare-bones version of the datatable with any tables with class
    $(".dataTable-simplified").not(".pattern-source > .dataTable-simplified").DataTable({

    });

/*
This is required to fix a responsiveness and width issue when using a DataTable within an accordion.
*/
$('.accordion > h3').click(function() {
    $('.accordion table.dataTable').DataTable().columns.adjust().responsive.recalc();
    $('.accordion table.dataTable').css('width', '100%');
 });

}(window, document));