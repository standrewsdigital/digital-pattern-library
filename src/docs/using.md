---
title: Using the pattern library
layout: _base.hbs
---

<div class="container">
    <div class="row">
        <div class="col-md-12 col-sm-12">

<h2>Using the pattern library</h2>

<p>In order to use the digital pattern library (DPL) you must link to the core CSS and JavaScript assets on each page. This page explains your options.</p>

<h3>Sections</h3>
<ul class="list-inline dpl-only">
    <li><a href="#quick-start" class="btn btn-primary">Quick start</a></li>
    <li><a href="#core" class="btn btn-primary">Link to core files</a></li>
    <li><a href="#css" class="btn btn-primary">CSS</a></li>
    <li><a href="#js" class="btn btn-primary">JavaScript</a></li>
    <li><a href="#cms" class="btn btn-primary">Content management systems</a></li>
    <li><a href="#third-party" class="btn btn-primary">Third-party applications</a></li>
</ul>

<hr>

<h3 id="quick-start">Quick start</h3>
<p>To quickly get set up and use the DPL, simply include the following lines of code within your web page or application. This code uses the CDN, if you have built your own version of the files, then you can change the paths to link to those files instead.</p>

<h4>CSS</h4>
<p>Link to the CSS files (for screen and print) within <code>&lt;head&gt;</code>.</p>

<pre><code>&lt;link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/screen.css" rel="stylesheet" type="text/css" media="screen" /&gt;
&lt;link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/print.css" rel="stylesheet" type="text/css" media="print" /&gt;
</code></pre>

<h4>JavaScript</h4>
<p>Link to the JavaScript file at the end of your <code>&lt;body&gt;</code> element.</p>

<pre><code>&lt;script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>

<hr>
<h3 id="core">Link to core files</h3>

<h4>CDN path</h4>
<p>You should link to the CDN versions of the core files, if possible. This takes advantage of users having already cached a copy of the core assets and also makes your project easier to update in the future.</p>

<p>Links to the CDN assets have the form: <code>&lt;endpoint&gt;/&lt;package&gt;/&lt;version&gt;/&lt;path-to-asset&gt;/</code>.</p>

<table style="margin-bottom: 1em;">
    <tr><th>endpoint</th><td><code>{{ pkg.cdn.endpoint }}</code></td></tr>
    <tr><th>package</th><td><code>{{ pkg.cdn.package }}</code></td></tr>
    <tr><th>version</th><td><code>{{ pkg.version }}</code></td></tr>
</table>

<p>The most up-to-date version of the DPL can be found at:</p>

<pre><code class="pattern-source html">{{ pkg.cdn.endpoint }}/{{ pkg.cdn.package }}/{{ pkg.version }}/</code></pre>

<h4>Build core files from source</h4>
<p>If something prevents you from linking to the CDN files and you need 

build the core files from source, you may gain access to the source code via Git and then follow the <a href="https://github.com/standrewsdigital/digital-pattern-library/blob/master/CONTRIBUTING.md">CONTRIBUTING</a> guide to set up Grunt to build the files. You may then copy the files in the `build` folder into your project.</p>

<hr>
<h3 id="css">CSS</h3>
<p>There are two CSS options.</p>

<div class="alert alert-danger" role="alert">What about print CSS? Should these be included in these examples?</div>
<div class="alert alert-danger" role="alert">When would we use Bootstrap and theme only?</div>

<!-- Begin pattern: accordion //-->
<div class="accordion">
    <h3>Bootstrap, theme and patterns (default)</h3>
    <div>
        <p>This option contains all the CSS needed to support the DPL: Bootstrap, Bootstrap theme and all patterns.</p>

        <pre><code>&lt;link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/screen.css" rel="stylesheet" type="text/css" media="screen" /&gt;</code></pre>
    </div>
</div>
<!-- End pattern: accordion //-->

<!-- Begin pattern: accordion //-->
<div class="accordion">
    <h3>Bootstrap and theme only</h3>
    <div>
        <p>This option includes only the Bootstrap framework and Bootstrap theme, meaning that patterns such as the header, footer, etc are not supported.</p>
        
        <pre><code>&lt;link href="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/styles/screen-bootstrap-only.css" rel="stylesheet" type="text/css" media="screen" /&gt;</code></pre>
    </div>
</div>
<!-- End pattern: accordion //-->

<hr>
<h3 id="js">JavaScript</h3>
<p>There are three JavaScript options.</p>

<!-- Begin pattern: accordion //-->
<div class="accordion">
    <h3>Everything (default)</h3>
    <div>
        <p>This option includes all the JavaScript needed in one file. It includes:</p>
        <ul>
            <li><strong>jQuery library</strong></li>
            <li><strong>jQuery plugins</strong></li>
            <li><strong>Bootstrap JavaScript</strong></li>
            <li><strong>Patterns JavaScript</strong></li>
        </ul>

        <pre><code>&lt;script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core.js" type="text/javascript"&gt;&lt;/script&gt;</code></pre>
    </div>
</div>
<!-- End pattern: accordion //-->

<!-- Begin pattern: accordion //-->
<div class="accordion">
    <h3>No jQuery</h3>
    <div>
        <p>This option is for those who need to use the DPL within an application that already pulls in the jQuery core library. This version includes:</p>

        <ul>
            <li><del>jQuery core</del></li>
            <li><strong>jQuery plugins</strong></li>
            <li><strong>Bootstrap JavaScript</strong></li>
            <li><strong>Patterns JavaScript</strong></li>
        </ul>        

        <pre><code>&lt;script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core-nojquery.js" type="text/javascript"&gt;&lt;/script&gt;</code></pre>
    </div>
</div>
<!-- End pattern: accordion //-->

<!-- Begin pattern: accordion //-->
<div class="accordion">
    <h3>Patterns only</h3>
    <div>
        <p>This option includes only the JavaScript required for the patterns. It is for those who need fine control over which elements are included.</p>

        <ul>
            <li><del>jQuery core</del></li>
            <li><del>jQuery plugins</del></li>
            <li><del>Bootstrap JavaScript</del></li>
            <li><strong>Patterns JavaScript</strong></li>
        </ul>   

        <pre><code>&lt;script src="{{pkg.cdn.endpoint}}/{{pkg.cdn.package}}/{{pkg.version}}/scripts/core-base.js" type="text/javascript"&gt;&lt;/script&gt;</code></pre>

        <p style="margin-top: 1em;">If you use this version then you will need to include any required dependencies manually:</p>

        <ul>
            <li><a href="http://jquery.com/">jQuery</a> (v3.1.1)</li>
            <li>jQuery <a href="https://github.com/leevigraham/jquery-bigTarget.js/">Big Target</a> (v1.1)</li>
            <li>jQuery <a href="https://github.com/davatron5000/FitVids.js">FitVids</a> (v1.2)</li>
            <li>jQuery <a href="https://github.com/standrewsdigital/jquery-theatre">Theatre</a> (v1.0.1) - Deprecated</li>
            <li><a href="https://github.com/twbs/bootstrap-sass">Bootstrap-Sass</a> (v3.3.7)</li>
            <li><a href="https://github.com/WickyNilliams/enquire.js">Enquire.js</a> (v2.1.2)</li>
            <li><a href="http://hammerjs.github.io/">Hammer.js</a> (v.2.0.4)</li>
            <li><a href="https://github.com/lokesh/lightbox2/">Lightbox.js</a> (v2.9.0)</li>
            <li><a href="https://github.com/scottjehl/Respond">Respond.js</a> (v1.4.0)</li>
        </ul>

        <p>See the <code>Gruntfile.js</code> to determine which additional JavaScript pieces are rolled into <code>core.js</code>.</p>

        <p>The following package is supported but not required:</p>
        <ul>
            <li><a href="https://www.datatables.net/">jQuery DataTables</a> (v1.10.13) is supported and we provide additional JavaScript and CSS to match the pattern library. See [DataTables](patterns/datatables/index.html) for more information.</li>
        </ul>
    </div>
</div>
<!-- End pattern: accordion //-->

<hr>
<h3 id="cms">Content management systems</h3>

<p>The pattern library is agnostic of platform. Integrating the pattern library with a content management system such as WordPress or T4 must follow these rules:</p>

<ul>
    <li>The core CSS and JavaScript files must be referenced from the CDN. A local copy must not be stored within the content management system.</li>
    <li>Naming conventions for the patterns must be mirrored in the content management system themes and templates. If the name of a pattern is changed, this must also be updated in the content management system.</li>
    <li>The code of a pattern (HTML, CSS, JavaScript) must not be added to or modified, other than to allow the content to be edited, for example, by the addition of tags to indicate editable areas.</li>
</ul>

<hr>
<h3 id="third-party">Third-party applications</h3>
<p>The digital communications team must be consulted when using the pattern library with third-party applications, which often offer limited customisation. It may only be possible to use certain elements of the pattern library such as the header and footer. At the very minimum we would expect the following patterns to be applied to a third-party application:</p>
<ul>
    <li><a href="patterns/header/index.html">Header</a></li>
    <li><a href="colours.html">Colours</a></li>
    <li><a href="patterns/typeface/index.html">Typeface</a></li>
    <li><a href="patterns/typography/index.html">Typography</a></li>
    <li><a href="patterns/footer/index.html">Footer</a></li>
</ul>

<!-- END -->
        </div><!-- end cols -->
    </div><!-- end row -->
</div><!-- end container -->