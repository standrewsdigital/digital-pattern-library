---
title: Using jQuery DataTables
---

[DataTables](http://www.datatables.net/) is a jQuery plugin to provide progressive enhancement to HTML tables. It provides the ability to search, order and page through data in a table. The plugin can be called on an existing HTML table so that clients can see a basic presentation without JavaScript and enhanced interaction if JavaScript is enabled. DataTables also has the ability to load data from ajax calls.

See [examples of DataTables](examples/datatables.html) in action.

## When to use

Our recommendation is to use DataTables when the table exceeds 20 rows or you have a number of columns that users might want to order by.

## What is provided

The Digital pattern library provides a JavaScript configuration and CSS styles to make the default DataTables look, feel and behavior more consistent the the rest of interface.

## Including dependencices 

To use DataTables, first, you need to include the DataTables plugin. DataTables is loaded on the St Andrews CDN. These are the current file you need.

* JavaScript: `https://www.st-andrews.ac.uk/~cdn/datatables/1.10.7/js/jquery.dataTables.min.js`

Additionally, you should load the Digital Pattern library's custom DataTables JavaScript and CSS. These files customise the look, feel and functionality of DataTables to match the pattern library.

* JavaScript: `https:{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/datatables.js`
* CSS: `https:{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/datatables.css`

## Creating a DataTable

After you have included the JavaScript and CSS dependencies, you can simply add a class of `dataTable` to any table and the DataTables will be called on it.

## Customisation

If you'd like to customise the look, feel or functionality, you can create DataTable instances with your own customisations, beginning with the pattern library defaults and modifying as needed. For example you might call DataTables like this:

```
$('tables.all_my_tables').DataTable({
    // Custom options ...
});
```

For more information including a reference manual on DataTables see the [DataTables website](http://www.datatables.net).
