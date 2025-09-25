---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Physical Chemistry

Work experience
======
* 2022 - Present: International Tomography Center, Laboratory of electron paramagnetic resonance spectroscopy
* Winter 2019: Helmholtz-Zentrum Berlin, THz Beamline, The zero-field splitting parameters of a Co(II) single-molecule magnet in frozen liquid matrices
* Winter 2019: European Laboratory for Non-linear Spectroscopy, Ultrafast photophysics of diphenylacetylene and its derivatives
* Winter 2018: Institute of Physical Chemistry of the Polish Academy of Sciences, Photophysics of diphenylacetylene and its derivatives
* 2011 - 2022: Voevodsky Institute of Chemical Kinetics and Combustion, Laboratory of fast proceeded processes
  
Skills
======
* Programming: Python, Julia, Wolfram Mathematica
* EPR techniques: continious wave, pulsed, time-resovled, and optically detected EPR spectroscopy
* Other techniques: time-correlated single photon counting, IR spectroscopy, UV/Vis spectroscopy, THz radiation, large-scale facilities
* Chemistry: experience with organic synthesis, purification of chemicals compounds, chromatography

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

