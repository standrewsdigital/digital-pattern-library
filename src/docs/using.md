---
title: Using the pattern library
---

In order to use the pattern library you have to include the assets. You have to make several decisions: _type_ of assets and _where_ to include the assets from.



## Type: Combined or pattern-only JavaScript

There are two flavours of the JavaScript files that you can choose between. A combined JS file, `core.js`, that has all the JavaScript needed in one file, or a separate pattern-only JS file, `core-base.js`. `core.js` includes Bootstrap's JS code, jQuery and jQuery plugins in addition to pattern-related JavaScript. If you use `core-base.js`, you are responsible for ensuring that all required [JavaScript dependencies](dependencies.html) are included. See the `Gruntfile.js` to determine which additional JS pieces are rolled into `core.js`.

## Type: Patterns or bootstrap-only CSS

There are two flavours of the CSS files that you can choose between. A combined CSS file, `screen.css`, that has all the CSS needed in one file, or a separate Bootstrap-only CSS file, `screen-bootstrap-only.css`. `screen.css` includes CSS for the patterns laid out in the library in addition to the underlying custom Boostrap theme. The `screen-bootstrap-only.css` includes only the Bootstrap theme, meaning that patterns such as the header, footer, etc are not supported.

## Where: CDN or local

### Including core files from the CDN

It is preferable to be using a CDN version if possible. This takes advantage of users having already cached a copy of the core assets and also makes your project easier to update in the future.

Links to the CDN assets have the form:

    <endpoint>/<package>/<version>/<path-to-asset>

<table>
  <tr><th>endpoint</th><td>`{{ pkg.cdn.endpoint }}`</td></tr>
  <tr><th>package</th><td>`{{ pkg.cdn.package }}`</td></tr>
  <tr><th>version</th><td>`{{ pkg.version }}`</td></tr>
</table>

### Building core files from source

If you'd rather build the core files from source, you can do so by gaining access to the source code through git and then following the [Contributing](https://github.com/standrewsdigital/digital-pattern-library/blob/master/CONTRIBUTING.md) guide to setting up Grunt to build the files. You can then copy the files in the `build` folder into your project.

## Header and Footer Code

You need to include the following HTML code in your pages. The code uses the CDN, if you have built your own version of the files, then you can change the paths to link to those files instead.

### Styles

```
<link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/screen.css" rel="stylesheet" type="text/css" media="screen" />
<link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/print.css" rel="stylesheet" type="text/css" media="print" />
<!--[if lt IE 9]><link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/ie.css" rel="stylesheet" type="text/css" media="screen" /><![endif]-->
```

### Scripts

If you want the combined JavaScript file, then include the following at the end of your`<body>` element.

```
<script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core.js" type="text/javascript" ></script>
```

If you want the pattern-only JavaScript file, then include the following at the end of your`<body>` element. __Note__: you must manually link to all required [
dependencies](dependencies.html) separately.

```
<script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core-base.js" type="text/javascript" ></script>
```
