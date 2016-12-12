---
title: Using the pattern library
---

In order to use the pattern library you have to include the assets. You have to make several decisions: _type_ of assets and _where_ to include the assets from.




## Type: JavaScript

There are a number of different JavaScript options to choose between. 


### Combined JavaScript

`core.js` has all the JavaScript needed in one file. It includes Bootstrap's JavaScript code, jQuery and jQuery plugins in addition to pattern-related JavaScript. 


### No jQuery

`core-nojquery.js` includes all the components of `core.js` without the main jQuery library.


### Pattern only JavaScript

A pattern-only version of the JavaScript file, `core-base.js`, does not include jQuery, Bootstrap JS and other external JavaScript libraries. If you use that version then you need to include these dependencies manually:

* [jQuery](http://jquery.com/) (v3.1.1)
* jQuery [Big Target](https://github.com/leevigraham/jquery-bigTarget.js/)
* jQuery [FitVids](https://github.com/davatron5000/FitVids.js) (v1.1)
* jQuery [FitTexts](https://github.com/davatron5000/FitText.js) (v1.2)
* jQuery [Theatre](https://bitbucket.org/st-andrews/jquery-theatre) (v1.0.1)
* [Respond.js](https://github.com/scottjehl/Respond) (v1.4.0)
* [Bootstrap-Sass](https://github.com/twbs/bootstrap-sass) (v3.3.7)
* [Enquire.js](https://github.com/WickyNilliams/enquire.js) (v2.1.2)

See the `Gruntfile.js` to determine which additional JS pieces are rolled into `core.js`.

The following package is supported by not required.

* [jQuery DataTables](http://www.datatables.net/) (v1.10.13) is supported and we provide additional JavaScript and CSS to match the pattern library. See [Data tables](datatables.html) for more information.




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





## Header and footer code

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

If you want the pattern-only JavaScript file, then include the following at the end of your`<body>` element. __Note__: you must manually link to all required dependencies separately.

```
<script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core-base.js" type="text/javascript" ></script>
```


---

## Third-party applications

The digital communications team must be consulted when using the pattern library with third-party applications, which often offer limited customisation. It may only be possible to use certain elements of the pattern library such as the header and footer. At the very minimum we would expect the following to be applied to a third-party application:

* Header
* Colours
* Fonts
* Footer


## Content management systems

The pattern library is agnostic of platform. Integrating the pattern library with a content management system such as WordPress or T4 must use the following principals:

* The core CSS and JavaScripts must be referenced from the CDN i.e. a local copy must not be stored within the content management system.
* Naming conventions for the patterns should be mirrored in the content management system themes and templates. If the name of a pattern were to change, this should be updated in the content management system.
* The code of a pattern (HTML, CSS, JavaScript) must not be added to or modified other than to allow the content to be edited e.g. by the addition of tags to indicate editable areas.