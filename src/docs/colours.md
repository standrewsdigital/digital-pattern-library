---
title: Colours
sta-blue: {color: sta-blue, name: Blue, variant: Primary}
sta-blue-tint50: {color: sta-blue-tint50, name: Blue, variant: 50% tint}
sta-blue-tint25: {color: sta-blue-tint25, name: Blue, variant: 25% tint}
sta-blue-shade25: {color: sta-blue-shade25, name: Blue, variant: 25% shade}
sta-blue-light: {color: sta-blue-light, name: Light blue, variant: Primary, desc: Use for main links and buttons.}
sta-blue-light-tint50: {color: sta-blue-light-tint50, name: Light blue, variant: 50% tint}
sta-blue-light-tint25: {color: sta-blue-light-tint25, name: Light blue, variant: 25% tint}
sta-blue-light-shade25: {color: sta-blue-light-shade25, name: Light blue, variant: 25% shade}
sta-red: {color: sta-red, name: Red, variant: Primary}
sta-red-tint50: {color: sta-red-tint50, name: Red, variant: 50% tint}
sta-red-tint25: {color: sta-red-tint25, name: Red, variant: 25% tint}
sta-red-shade25: {color: sta-red-shade25, name: Red, variant: 25% shade}
sta-grey: {color: sta-grey, name: Grey}
sta-grey-light: {color: sta-grey-light, name: Light grey}
sta-grey-mid2: {color: sta-grey-mid2, name: Mid grey 2}
sta-grey-highlight: {color: sta-grey-highlight, name: Mid grey, desc: Use for visible interactive graphical UI elements.}
sta-grey-dark: {color: sta-grey-dark, name: Dark grey, variant: Primary, desc: Use for main text. }
sta-grey-dark2: {color: sta-grey-dark2, name: Dark grey 2}
sta-orange-highlight: {color: sta-orange-highlight, name: Orange, variant: Primary, desc: Use only to signify focus on an element.}
sta-orange: {color: sta-orange, name: Dark orange}
sta-yellow: {color: sta-yellow, name: Yellow}
sta-cyan: {color: sta-cyan, name: Cyan}
sta-cyan-light: {color: sta-cyan-light, name: Light cyan}
sta-green: {color: sta-green, name: Green, variant: Primary}
sta-green-tint50: {color: sta-green-tint50, name: Green, variant: 50% tint}
sta-green-tint25: {color: sta-green-tint25, name: Green, variant: 25% tint}
sta-green-shade25: {color: sta-green-shade25, name: Green, variant: 25% shade}
sta-dkgreen: {color: sta-dkgreen, name: Dark green}
sta-purple: {color: sta-purple, name: Purple, variant: Primary}
sta-purple-tint50: {color: sta-purple-tint50, name: Purple, variant: 50% tint}
sta-purple-tint25: {color: sta-purple-tint25, name: Purple, variant: 25% tint}
sta-purple-shade25: {color: sta-purple-shade25, name: Purple, variant: 25% shade}
sta-burgundy: {color: sta-burgundy, name: Burgundy, variant: Primary}
sta-burgundy-tint50: {color: sta-burgundy-tint50, name: Burgundy, variant: 50% tint}
sta-burgundy-tint25: {color: sta-burgundy-tint25, name: Burgundy, variant: 25% tint}
sta-burgundy-shade25: {color: sta-burgundy-shade25, name: Burgundy, variant: 25% shade}
context:
    success: {color: sta-green, name: Success}
    info: {color: sta-blue-light, name: Information}
    warning: {color: sta-orange, name: Warning}
    danger: {color: sta-red, name: Danger}
---

<p class="lead">These are the approved colours for use on web sites and applications at the University of St Andrews.</p>
<p>Primary colours are the colours most widely used but when contrast is needed between two UI elements a tint or shade variant of a primary colour should be used. This can also be used to help show a change of state on an interactive element such as a button.</p>
<h2>Available palettes</h2>
<ul>
    <li><a href="#main">Main colours</a></li>
    <li><a href="#additional">Additional colours</a></li>
    <li><a href="#contextual">Contextual colours</a></li>
</ul>
<hr>
<h3 id="main">Main colours</h3>

<div class="colour-palette">
{{> swatch sta-blue }}
{{> swatch sta-blue-tint25 }}
{{> swatch sta-blue-tint50 }}
{{> swatch sta-blue-shade25 }}
</div>
<div class="colour-palette">
{{> swatch sta-blue-light }}
{{> swatch sta-blue-light-tint25 }}
{{> swatch sta-blue-light-tint50 }}
{{> swatch sta-blue-light-shade25 }}
</div>
<div class="colour-palette">
{{> swatch sta-red }}
{{> swatch sta-red-tint25 }}
{{> swatch sta-red-tint50 }}
{{> swatch sta-red-shade25 }}
</div>
<div class="colour-palette">
{{> swatch sta-grey-dark }}
{{> swatch sta-grey }}
{{> swatch sta-grey-highlight }}
{{> swatch sta-grey-mid2 }}
{{> swatch sta-grey-light }}
{{> swatch sta-grey-dark2 }}
</div>
<div class="colour-palette">
{{> swatch sta-orange-highlight }}
{{> swatch sta-orange }}
</div>
<hr>
<h3 id="additional">Additional colours</h3>
<div class="colour-palette">
{{> swatch sta-green }}
{{> swatch sta-green-tint25 }}
{{> swatch sta-green-tint50 }}
{{> swatch sta-green-shade25 }}
</div>
<div class="colour-palette">
{{> swatch sta-purple }}
{{> swatch sta-purple-tint25 }}
{{> swatch sta-purple-tint50 }}
{{> swatch sta-purple-shade25 }}
</div>
<div class="colour-palette">
{{> swatch sta-burgundy }}
{{> swatch sta-burgundy-tint25 }}
{{> swatch sta-burgundy-tint50 }}
{{> swatch sta-burgundy-shade25 }}
</div>
<hr>
<h3 id="contextual">Contextual colours</h3>

<p>Colour should never be solely used to provide meaning as this is not accessible to all users. These colours should only be used for buttons, alerts, and text banners where colour is used to assist meaning.</p>
<div class="colour-palette">
{{> swatch context.success}}
{{> swatch context.info}}
{{> swatch context.warning}}
{{> swatch context.danger}}
</div>
<hr>
<h2>Accessible colours</h2>
<p>You must make sure that the contrast ratio of text and interactive elements in your web site or application meets level AA of the <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">Web Content Accessibility Guidelines (WCAG 2.1)</a>. The following table shows how the colour palettes contrast against the common text colours and backgrounds. You can use this <a href="https://webaim.org/resources/contrastchecker/">colour contrast checking tool</a> by WebAIM to test other combinations.</p>
<table class="table table-striped">
<thead>
<tr>
<th>Colour</th>
<th>Dark text #202024</th>
<th>Light text #ffffff</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>