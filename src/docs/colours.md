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
sta-grey-light2: {color: sta-grey-light2, name: Light grey 2}
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
    info: {color: sta-blue, name: Information}
    warning: {color: sta-orange, name: Warning}
    danger: {color: sta-red, name: Danger}
---

<div class="row"><div class="col-md-8"><p class="lead">These are the approved colours for use on web sites and applications at the University of St Andrews.</p>
<p>Primary colours are the colours most widely used but when contrast is needed between two UI elements a tint or shade variant of a primary colour should be used. This can also be used to help show a change of state on an interactive element such as a button.</p>
<h2>Available palettes</h2>
<ul>
    <li><a href="#main">Main colours</a></li>
    <li><a href="#additional">Additional colours</a></li>
    <li><a href="#contextual">Contextual colours</a></li>
</ul></div></div>
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
{{> swatch sta-grey-light2 }}
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
<h3 id="contextual">Contextual colours</h3><div class="row"><div class="col-md-8"><p>Colour should never be solely used to provide meaning as this is not accessible to all users. These colours should only be used for buttons, alerts, and text banners where colour is used to assist meaning.</p></div></div>
<div class="colour-palette">
{{> swatch context.success}}
{{> swatch context.info}}
{{> swatch context.warning}}
{{> swatch context.danger}}
</div>

<hr>
<h2>Accessible colours</h2><div class="row"><div class="col-md-8"><p>You must make sure that the contrast ratio of text and interactive elements in your web site or application meets level AA of the <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">Web Content Accessibility Guidelines (WCAG 2.1)</a>.</p><p>The following table shows how the palette colours contrast as a background against the common text colours (dark grey #202020 and white #ffffff). It also shows the palette colours contrast when used as a graphical UI element against a white background. This is indicated with a tick for success and a cross for failure. You can use this <a href="https://webaim.org/resources/contrastchecker/">colour contrast checking tool</a> by WebAIM to test other combinations.</p></div></div>
<p><button class="btn btn-small-tag" id="toggle-colours-button" aria-pressed="false">Show colours</button></p>
<table class="table table-bordered table-contrast table-contrast--hide-colours">
<thead>
<tr>
<th>Colour</th>
<th>Dark text<br><small>#202024</small></th>
<th>Light text<br><small>#ffffff</small></th>
<th>UI element</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Blue</strong> (Primary)<br><small>#00539b</small></td>
<td style="background:#00539b;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#00539b;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#00539b" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Blue</strong> (25% tint)<br><small>#407eb4</small></td>
<td style="background:#407eb4;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#407eb4;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#407eb4" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Blue</strong> (50% tint)<br><small>#80a9cd</small></td>
<td style="background:#80a9cd;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#80a9cd;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#80a9cd" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Blue</strong> (25% shade)<br><small>#003e74</small></td>
<td style="background:#003e74;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#003e74;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#003e74" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Light blue</strong> (Primary)<br><small>#007bc2</small></td>
<td style="background:#007bc2;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#007bc2;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#007bc2" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Light blue</strong> (25% tint)<br><small>#409cd1</small></td>
<td style="background:#409cd1;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#409cd1;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#409cd1" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Light blue</strong> (50% tint)<br><small>#80bde1</small></td>
<td style="background:#80bde1;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#80bde1;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#80bde1" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Light blue</strong> (25% shade)<br><small>#005c92</small></td>
<td style="background:#005c92;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#005c92;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#005c92" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Red</strong> (Primary)<br><small>#ea1a13</small></td>
<td style="background:#ea1a13;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#ea1a13;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#ea1a13" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Red</strong> (25% tint)<br><small>#ef534e</small></td>
<td style="background:#ef534e;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#ef534e;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#ef534e" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Red</strong> (50% tint)<br><small>#f58d89</small></td>
<td style="background:#f58d89;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#f58d89;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#f58d89" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Red</strong> (25% shade)<br><small>#b0140e</small></td>
<td style="background:#b0140e;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#b0140e;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#b0140e" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Dark grey</strong> (Primary)<br><small>#202024</small></td>
<td style="background:#202024;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#202024;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#202024" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Grey</strong><br><small>#6a6a6b</small></td>
<td style="background:#6a6a6b;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#6a6a6b;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#6a6a6b" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Mid grey</strong><br><small>#949494</small></td>
<td style="background:#949494;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#949494;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#949494" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Mid grey 2</strong><br><small>#dedede</small></td>
<td style="background:#dedede;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#dedede;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#dedede" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Light grey</strong><br><small>#f0f0f0</small></td>
<td style="background:#f0f0f0;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#f0f0f0;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#f0f0f0" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Light grey 2</strong><br><small>#fafafa</small></td>
<td style="background:#fafafa;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#fafafa;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#fafafa" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Dark grey 2</strong><br><small>#0f0f11</small></td>
<td style="background:#0f0f11;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#0f0f11;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#0f0f11" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Orange</strong> (Primary)<br><small>#ffb400</small></td>
<td style="background:#ffb400;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#ffb400;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#ffb400" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Dark orange</strong><br><small>#bf5909</small></td>
<td style="background:#bf5909;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#bf5909;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#bf5909" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Green</strong> (Primary)<br><small>#00853f</small></td>
<td style="background:#00853f;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#00853f;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#00853f" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Green</strong> (25% tint)<br><small>#40a46f</small></td>
<td style="background:#40a46f;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#40a46f;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#40a46f" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Green</strong> (50% tint)<br><small>#80c29f</small></td>
<td style="background:#80c29f;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#80c29f;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#80c29f" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Green</strong> (25% shade)<br><small>#00642f</small></td>
<td style="background:#00642f;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#00642f;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#00642f" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Purple</strong> (Primary)<br><small>#7b439a</small></td>
<td style="background:#7b439a;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#7b439a;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#7b439a" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Purple</strong> (25% tint)<br><small>#9c72b3</small></td>
<td style="background:#9c72b3;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#9c72b3;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#9c72b3" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Purple</strong> (50% tint)<br><small>#bda1cd</small></td>
<td style="background:#bda1cd;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#bda1cd;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#bda1cd" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Purple</strong> (25% shade)<br><small>#5c3274</small></td>
<td style="background:#5c3274;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#5c3274;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#5c3274" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Burgundy</strong> (Primary)<br><small>#c60c46</small></td>
<td style="background:#c60c46;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#c60c46;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#c60c46" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Burgundy</strong> (25% tint)<br><small>#d44974</small></td>
<td style="background:#d44974;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#d44974;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#d44974" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Burgundy</strong> (50% tint)<br><small>#e386a3</small></td>
<td style="background:#e386a3;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#e386a3;color:#fff;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td><div style="color:#e386a3" class="font-scale-1"><i class="fas fa-times"></i></div>Fail</td>
</tr>
<tr>
<td><strong>Burgundy</strong> (25% shade)<br><small>#950935</small></td>
<td style="background:#950935;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#950935;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#950935" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Success</strong><br><small>#00853f</small></td>
<td style="background:#00853f;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#00853f;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#00853f" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Information</strong><br><small>#00539b</small></td>
<td style="background:#00539b;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Fail</div></td>
<td style="background:#00539b;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#00539b" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Warning</strong><br><small>#bf5909</small></td>
<td style="background:#bf5909;color:#202024;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#bf5909;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#bf5909" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
<tr>
<td><strong>Danger</strong><br><small>#ea1a13</small></td>
<td style="background:#ea1a13;color:#202024;">Normal: Fail<div class="font-scale-1">Large: Pass</div></td>
<td style="background:#ea1a13;color:#fff;">Normal: Pass<div class="font-scale-1">Large: Pass</div></td>
<td><div style="color:#ea1a13" class="font-scale-1"><i class="fas fa-check"></i></div>Pass</td>
</tr>
</tbody>
</table>