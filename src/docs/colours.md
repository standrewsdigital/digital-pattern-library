---
title: Colours
sta-blue: {color: sta-blue, name: Blue}
sta-blue-light: {color: sta-blue-light, name: Blue light}
sta-red: {color: sta-red, name: Red}
sta-yellow: {color: sta-yellow, name: Yellow, contrast: contrast_text}
sta-grey: {color: sta-grey, name: Grey}
sta-grey-light: {color: sta-grey-light, name: Grey light, contrast: contrast_text}
sta-grey-dark: {color: sta-grey-dark, name: Grey dark}
sta-cyan: {color: sta-cyan, name: Cyan}
sta-cyan-light: {color: sta-cyan-light, name: Cyan light}
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
    secondary: {color: sta-blue-light, name: Secondary - Blue light}
    tertiary1: {color: sta-green, name: Tertiary 1 - Green}
    tertiary2: {color: sta-burgundy, name: Tertiary 2 - Burgundy}
    tertiary3: {color: sta-purple, name: Tertiary 3 - Purple}
study_palette:
    primary: {color: sta-cyan, name: Primary - Cyan}
    secondary: {color: sta-cyan-light, name: Secondary - Cyan light}
    tertiary1: {color: sta-green, name: Tertiary 1 - Green}
    tertiary2: {color: sta-purple, name: Tertiary 2 - Purple}
---




## St Andrews Colours

These are the University of St Andrews colours for the web. Click on a color to see the corresponding CSS code.




## Palettes

Our palettes are collections of brand colours that we use together to form the palette for a website. Constraining our design to a few colours helps give a consistent, professional appearance. Please see the below palettes to see how these colours are used together. 

* [Primary palette](palette/primary.html) {{> palette_swatch primary_palette.primary }}{{> palette_swatch primary_palette.secondary }}{{> palette_swatch primary_palette.tertiary1 }}{{> palette_swatch primary_palette.tertiary2 }}{{> palette_swatch primary_palette.tertiary3 }}
* [Study palette](palette/study.html) {{> palette_swatch study_palette.primary }}{{> palette_swatch study_palette.secondary }}{{> palette_swatch study_palette.tertiary1 }}{{> palette_swatch study_palette.tertiary2 }}

---

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
