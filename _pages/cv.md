---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-actions">
  <button type="button" class="pill-btn" onclick="window.print()">
    <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Save as PDF
  </button>
</div>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Education</h2>
  </div>
  <ul class="edu-list">
    <li class="edu-item">
      <div class="edu-item__year">2016</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">Ph.D., Physical Chemistry</div>
        <div class="edu-item__inst">Voevodsky Institute of Chemical Kinetics and Combustion, SB RAS</div>
        <p class="edu-item__thesis">Thesis: Magnetosensitive luminescence of exciplexes, formed under the recombination of radiation-generated radical ion pairs in non-polar solutions.</p>
      </div>
    </li>
    <li class="edu-item">
      <div class="edu-item__year">2013</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">Specialist Degree</div>
        <div class="edu-item__inst">Department of Natural Sciences, Novosibirsk State University</div>
      </div>
    </li>
  </ul>
</section>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Experience</h2>
  </div>
  <ul class="edu-list">
    <li class="edu-item">
      <div class="edu-item__year">2022–now</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">International Tomography Center</div>
        <div class="edu-item__inst">Laboratory of electron paramagnetic resonance spectroscopy</div>
      </div>
    </li>
    <li class="edu-item">
      <div class="edu-item__year">2019</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">Helmholtz-Zentrum Berlin, THz Beamline</div>
        <p class="edu-item__thesis">The zero-field splitting parameters of a Co(II) single-molecule magnet in frozen liquid matrices.</p>
      </div>
    </li>
    <li class="edu-item">
      <div class="edu-item__year">2019</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">European Laboratory for Non-linear Spectroscopy</div>
        <p class="edu-item__thesis">Ultrafast photophysics of diphenylacetylene and its derivatives.</p>
      </div>
    </li>
    <li class="edu-item">
      <div class="edu-item__year">2018</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">Institute of Physical Chemistry of the Polish Academy of Sciences</div>
        <p class="edu-item__thesis">Photophysics of diphenylacetylene and its derivatives.</p>
      </div>
    </li>
    <li class="edu-item">
      <div class="edu-item__year">2011–2022</div>
      <div class="edu-item__body">
        <div class="edu-item__degree">Voevodsky Institute of Chemical Kinetics and Combustion</div>
        <div class="edu-item__inst">Laboratory of fast proceeded processes</div>
      </div>
    </li>
  </ul>
</section>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Skills</h2>
  </div>
  <dl class="teach-meta">
    <div class="teach-meta__row">
      <dt>Programming</dt>
      <dd>Python, Julia, Wolfram Mathematica</dd>
    </div>
    <div class="teach-meta__row">
      <dt>EPR</dt>
      <dd>Continuous wave, pulsed, time-resolved, and optically detected EPR spectroscopy</dd>
    </div>
    <div class="teach-meta__row">
      <dt>Other</dt>
      <dd>Time-correlated single photon counting, IR spectroscopy, UV/Vis spectroscopy, THz radiation, large-scale facilities</dd>
    </div>
    <div class="teach-meta__row">
      <dt>Chemistry</dt>
      <dd>Organic synthesis, purification of chemical compounds, chromatography</dd>
    </div>
  </dl>
</section>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Publications</h2>
    <a class="pill-btn" href="{{ base_path }}/publications/">All publications</a>
  </div>
  {% for post in site.publications reversed %}
    {% include archive-single-publication.html %}
  {% endfor %}
</section>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Talks</h2>
    <a class="pill-btn" href="{{ base_path }}/talks/">All talks</a>
  </div>
  {% for post in site.talks reversed %}
    {% include archive-single-talk-list.html %}
  {% endfor %}
</section>

<section class="about-section">
  <div class="about-section__header">
    <h2 class="about-section__title">Teaching</h2>
    <a class="pill-btn" href="{{ base_path }}/teaching/">All teaching</a>
  </div>
  {% for post in site.teaching reversed %}
    {% include archive-single-teaching.html %}
  {% endfor %}
</section>
