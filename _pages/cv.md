---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
lead: "Education, positions, skills and a full record of publications, talks and teaching."
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-actions">
  <button type="button" class="panel-btn" onclick="window.print()">
    <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Save as PDF
  </button>
</div>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Education</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      <li>
        <span class="panel-news__date">2016</span>
        <div class="panel-news__body">
          <span class="panel-news__title">Ph.D., Physical Chemistry</span>
          <span class="panel-news__detail">Voevodsky Institute of Chemical Kinetics and Combustion, SB RAS</span>
          <span class="panel-news__detail">Thesis: Magnetosensitive luminescence of exciplexes, formed under the recombination of radiation-generated radical ion pairs in non-polar solutions.</span>
        </div>
      </li>
      <li>
        <span class="panel-news__date">2013</span>
        <div class="panel-news__body">
          <span class="panel-news__title">Specialist Degree</span>
          <span class="panel-news__detail">Department of Natural Sciences, Novosibirsk State University</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Experience</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      <li>
        <span class="panel-news__date">2022–now</span>
        <div class="panel-news__body">
          <span class="panel-news__title">International Tomography Center</span>
          <span class="panel-news__detail">Laboratory of electron paramagnetic resonance spectroscopy</span>
        </div>
      </li>
      <li>
        <span class="panel-news__date">2019</span>
        <div class="panel-news__body">
          <span class="panel-news__title">Helmholtz-Zentrum Berlin, THz Beamline</span>
          <span class="panel-news__detail">The zero-field splitting parameters of a Co(II) single-molecule magnet in frozen liquid matrices.</span>
        </div>
      </li>
      <li>
        <span class="panel-news__date">2019</span>
        <div class="panel-news__body">
          <span class="panel-news__title">European Laboratory for Non-linear Spectroscopy</span>
          <span class="panel-news__detail">Ultrafast photophysics of diphenylacetylene and its derivatives.</span>
        </div>
      </li>
      <li>
        <span class="panel-news__date">2018</span>
        <div class="panel-news__body">
          <span class="panel-news__title">Institute of Physical Chemistry of the Polish Academy of Sciences</span>
          <span class="panel-news__detail">Photophysics of diphenylacetylene and its derivatives.</span>
        </div>
      </li>
      <li>
        <span class="panel-news__date">2011–2022</span>
        <div class="panel-news__body">
          <span class="panel-news__title">Voevodsky Institute of Chemical Kinetics and Combustion</span>
          <span class="panel-news__detail">Laboratory of fast proceeded processes</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Skills</h2>
  </div>
  <div class="panel__body">
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
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Publications</h2>
    <a class="panel__see-all" href="{{ base_path }}/publications/">All publications →</a>
  </div>
  <div class="panel__body">
    <ol class="panel-pubs">
      {% for post in site.publications reversed %}
        {% include archive-single-publication.html %}
      {% endfor %}
    </ol>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Talks</h2>
    <a class="panel__see-all" href="{{ base_path }}/talks/">All talks →</a>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      {% for post in site.talks reversed %}
        {% include archive-single-talk-list.html %}
      {% endfor %}
    </ul>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <h2 class="panel__title">Teaching</h2>
    <a class="panel__see-all" href="{{ base_path }}/teaching/">All teaching →</a>
  </div>
  <div class="panel__body">
    <ul class="panel-specs">
      {% for post in site.teaching reversed %}
        {% include archive-single-teaching.html %}
      {% endfor %}
    </ul>
  </div>
</section>
