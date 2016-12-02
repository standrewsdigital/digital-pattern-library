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
    success: {color: sta-green, name: Success - Green}
    info: {color: sta-blue-light, name: Info - Blue light}
    warning: {color: sta-orange, name: Warning - Orange}
    danger: {color: sta-red, name: Danger - Red}
primary_palette:
    primary: {color: sta-blue, name: Primary - Blue}
    secondary: {color: sta-blue-light, name: Secondary - Light blue}
    tertiary1: {color: sta-green, name: Tertiary 1 - Green}
    tertiary2: {color: sta-burgundy, name: Tertiary 2 - Burgundy}
    tertiary3: {color: sta-purple, name: Tertiary 3 - Purple}
study_palette:
    primary: {color: sta-cyan, name: Primary - Cyan}
    secondary: {color: sta-cyan-light, name: Secondary - Light cyan}
    tertiary1: {color: sta-green, name: Tertiary 1 - Green}
    tertiary2: {color: sta-purple, name: Tertiary 2 - Purple}
---

## Palettes

Palettes are collections of brand colours that are used together to form the colour scheme for a website. Constraining our design to a few colours helps give a consistent, professional appearance.

* [Primary palette](palette/primary.html) {{> palette_swatch primary_palette.primary }}{{> palette_swatch primary_palette.secondary }}{{> palette_swatch primary_palette.tertiary1 }}{{> palette_swatch primary_palette.tertiary2 }}{{> palette_swatch primary_palette.tertiary3 }}
* [Study palette](palette/study.html) (deprecated) {{> palette_swatch study_palette.primary }}{{> palette_swatch study_palette.secondary }}{{> palette_swatch study_palette.tertiary1 }}{{> palette_swatch study_palette.tertiary2 }}

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
