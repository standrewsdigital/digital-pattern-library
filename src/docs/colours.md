---
title: Colours
sta-blue: {color: sta-blue, name: Blue}
sta-blue-light: {color: sta-blue-light, name: Light blue}
sta-red: {color: sta-red, name: Red}
sta-yellow: {color: sta-yellow, name: Yellow, contrast: contrast_text}
sta-grey: {color: sta-grey, name: Grey}
sta-grey-light: {color: sta-grey-light, name: Light grey, contrast: contrast_text}
sta-grey-dark: {color: sta-grey-dark, name: Dark grey }
sta-cyan: {color: sta-cyan, name: Cyan}
sta-cyan-light: {color: sta-cyan-light, name: Light cyan}
sta-orange: {color: sta-orange, name: Orange}
sta-green: {color: sta-green, name: Green}
sta-dkgreen: {color: sta-dkgreen, name: Dark green}
sta-purple: {color: sta-purple, name: Purple}
sta-burgundy: {color: sta-burgundy, name: Burgundy}
context:
    success: {color: sta-green, name: Success - green}
    info: {color: sta-blue-light, name: Info - blue light}
    warning: {color: sta-orange, name: Warning - orange}
    danger: {color: sta-red, name: Danger - red}
primary_palette:
    primary: {color: sta-blue, name: Primary - blue}
    secondary: {color: sta-blue-light, name: Secondary - light blue}
    tertiary1: {color: sta-green, name: Tertiary 1 - green}
    tertiary2: {color: sta-burgundy, name: Tertiary 2 - burgundy}
    tertiary3: {color: sta-purple, name: Tertiary 3 - purple}
study_palette:
    primary: {color: sta-cyan, name: Primary - cyan}
    secondary: {color: sta-cyan-light, name: Secondary - light cyan}
    tertiary1: {color: sta-green, name: Tertiary 1 - green}
    tertiary2: {color: sta-purple, name: Tertiary 2 - purple}
---

## Palettes

Palettes are collections of brand colours that are used together to form the colour scheme for a website. Constraining our design to a few colours helps give a consistent, professional appearance.

<div id="palettes_container" class="col-md-5">
    <ul>
        <li><a href="palette/primary.html">Primary {{> palette_swatch primary_palette.primary }}{{> palette_swatch primary_palette.secondary }}{{> palette_swatch primary_palette.tertiary1 }}{{> palette_swatch primary_palette.tertiary2 }}{{> palette_swatch primary_palette.tertiary3 }}</a></li>
        <li><a href="palette/study.html">Study (deprecated) {{> palette_swatch study_palette.primary }}{{> palette_swatch study_palette.secondary }}{{> palette_swatch study_palette.tertiary1 }}{{> palette_swatch study_palette.tertiary2 }}</a></li>
    </ul>
</div>


---

## Approved colours

These are the approved colours for use on the University of St Andrews domain.

{{> swatch sta-blue }}

{{> swatch sta-blue-light }}

{{> swatch sta-red }}

{{> swatch sta-yellow }}

{{> swatch sta-grey }}

{{> swatch sta-grey-light }}

{{> swatch sta-grey-dark }}

{{> swatch sta-cyan }}

{{> swatch sta-cyan-light }}

{{> swatch sta-orange }}

{{> swatch sta-green }}

{{> swatch sta-dkgreen }}

{{> swatch sta-purple }}

{{> swatch sta-burgundy }}




## Bootstrap contexts

These colours should only be used for buttons, alerts, and text banners.

{{> swatch context.success}}
{{> swatch context.info}}
{{> swatch context.warning}}
{{> swatch context.danger}}
