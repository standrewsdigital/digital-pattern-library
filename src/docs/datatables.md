---
title: Using data tables
---

## What is a data table? 

A data table is a table where we use the jQuery plugin [DataTables](http://www.datatables.net/) to automate the searching, ordering and paging of content. A data table can be created from a normal HTML table present on a page or could be pulled in through an ajax call after the page load. 

## When to use

Our recommendation is to use a data table when the table exceeds 20 rows or you have a number of rows that users might want to order by.

## Including dependencices 

First, you need to include the base JavaScript and CSS styles for DataTables. DataTables is loaded on the St Andrews CDN. These are the current JavaScript and CSS you need.

* JavaScript: <code>//www.st-andrews.ac.uk/~cdn/datatables/1.10.5/jquery.dataTables.min.js</code> (79 KB)
* CSS: <code>//www.st-andrews.ac.uk/~cdn/datatables/1.10.5/jquery.dataTables.min.css</code> (15 KB)

Additionally, you should load the pattern library's custom DataTables JavaScript and CSS. These files customise the look, feel and functionality of DataTables to match the pattern library.

* JavaScript: `{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/datatables.js`
* CSS: `{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/datatables.css`

## Creating a data table

After you have included the JavaScript and CSS dependencies, you can simply add a class of `dataTable` to any table and it will be transformed into a data table.

## Customisation

If you'd like to cusotmise the look, feel or functionality of a data table, you can create DataTable instances with your own customisations, beginning with the pattern library defaults and modifying as needed.

For more information including a reference manual on DataTables see the [DataTables website](http://www.datatables.net).
