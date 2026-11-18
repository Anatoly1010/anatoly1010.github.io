---
layout: archive
title: "Software"
permalink: /software/
lead: "Open-source software developed and maintained by our laboratory."
motif: instrument
motif_label: "instrument control"
---

{% include base_path %}

{% assign atomize_paper = site.publications | where_exp: 'p', "p.title contains 'Atomize'" | first %}

<section class="panel">
  <div class="panel__head">
    <img class="panel__icon" src="{{ '/images/atomize-icon.svg' | relative_url }}" alt="" width="20" height="20">
    <h2 class="panel__title">Atomize</h2>
    <a class="panel__see-all" href="https://github.com/Anatoly1010/Atomize">GitHub →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Modular open-source software for control and automation of scientific and industrial instruments. It combines device drivers, live plotting and data handling tools, so experiments can be written as short Python scripts.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Language</span><span class="panel-specs__value">Python</span></li>
      <li><span class="panel-specs__key">Licence</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize/blob/master/license.md">MIT</a></span></li>
      {% if site.author.atomize_stars %}
        <li><span class="panel-specs__key">GitHub stars</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize/stargazers">{{ site.author.atomize_stars }}</a></span></li>
      {% endif %}
      {% if atomize_paper %}
        <li><span class="panel-specs__key">Paper</span><span class="panel-specs__value"><a href="{{ atomize_paper.url | relative_url }}">{{ atomize_paper.venue }}, {{ atomize_paper.date | date: "%Y" }}</a></span></li>
      {% endif %}
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://github.com/Anatoly1010/Atomize">Repository</a>
      <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/">Documentation</a>
      {% if atomize_paper.paperurl %}<a class="panel-btn" href="{{ atomize_paper.paperurl }}">Paper</a>{% endif %}
    </div>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <img class="panel__icon" src="{{ '/images/atomize-icon.svg' | relative_url }}" alt="" width="20" height="20">
    <h2 class="panel__title">Atomize_stations</h2>
    <a class="panel__see-all" href="https://github.com/Anatoly1010/Atomize_stations">GitHub →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Station-specific extensions for Atomize, with graphical control panels, experiment presets, automation and data treatment tools. Each station package is installed on top of the shared Atomize core and contains the files for its laboratory setup.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Language</span><span class="panel-specs__value">Python</span></li>
      <li><span class="panel-specs__key">Licence</span><span class="panel-specs__value">MIT (<a href="https://github.com/Anatoly1010/Atomize_stations/blob/main/itc/license.md">ITC</a> and <a href="https://github.com/Anatoly1010/Atomize_stations/blob/main/itc2/license.md">ITC2</a> packages)</span></li>
      <li><span class="panel-specs__key">Extends</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize">Atomize</a></span></li>
      <li><span class="panel-specs__key">Available packages</span><span class="panel-specs__value">ITC EPR endstation<br>ITC2 continuous-wave / time-resolved EPR spectrometer</span></li>
      <li><span class="panel-specs__key">Soon available</span><span class="panel-specs__value">Pulsed X- and Q-band EPR spectrometers at Novosibirsk Institute of Organic Chemistry<br>Pulsed AWG setup at the Zavoisky Physical-Technical Institute<br>A Cryomech liquid helium plant</span></li>
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://github.com/Anatoly1010/Atomize_stations">Repository</a>
      <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/">Documentation</a>
    </div>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <img class="panel__icon" src="{{ '/images/atomize-icon.svg' | relative_url }}" alt="" width="20" height="20">
    <h2 class="panel__title">Atomize_treatment</h2>
    <a class="panel__see-all" href="https://github.com/Anatoly1010/Atomize_treatment">GitHub →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Optional data processing and analysis tools for Atomize.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Language</span><span class="panel-specs__value">Python</span></li>
      <li><span class="panel-specs__key">Licence</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize_treatment/blob/main/license.md">MIT</a></span></li>
      <li><span class="panel-specs__key">Extends</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize">Atomize</a></span></li>
      <li>
        <span class="panel-specs__key">Available tools</span>
        <span class="panel-specs__value">
          <code>atomize-treatment</code> — 1D data processing (baseline correction, smoothing, FFT, fitting and batch processing)<br>
          <code>atomize-treatment-2d</code> — 2D data processing (FFT, slices and projections)<br>
          <code>atomize-deer</code> — DEER/PDS analysis (Tikhonov regularization, Mellin transform, multi-Gaussian fitting and background fitting)<br>
          <code>atomize-seqcalc</code> — Pulse sequence timing and phase cycling<br>
          <code>atomize-excitation</code> — Pulse excitation and inversion profiles<br>
          <code>atomize-spin-sim</code> — Density-matrix simulation of pulse sequences
        </span>
      </li>
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://github.com/Anatoly1010/Atomize_treatment">Repository</a>
    </div>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-microchip" aria-hidden="true"></i>
    <h2 class="panel__title">SpinCorePCI_no_sudo</h2>
    <a class="panel__see-all" href="https://github.com/Anatoly1010/SpinCorePCI_no_sudo">GitHub →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Runs SpinCore PulseBlasterESR-PRO PCI boards on Linux without sudo. The vendor library reaches the card through x86 I/O ports, which normally forces the whole experiment to run as root. A small launcher carries that single privilege, and nothing else, into the program it starts, so the control software and the worker processes that talk to the card stay unprivileged.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Language</span><span class="panel-specs__value">C and shell</span></li>
      <li><span class="panel-specs__key">Devices</span><span class="panel-specs__value">SpinCore PulseBlasterESR-PRO PCI</span></li>
      <li><span class="panel-specs__key">Requires</span><span class="panel-specs__value">Linux 4.3 or newer, a C compiler and libcap; sudo once, at install time</span></li>
      <li><span class="panel-specs__key">Used with</span><span class="panel-specs__value">Atomize, on our pulsed EPR spectrometers</span></li>
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://github.com/Anatoly1010/SpinCorePCI_no_sudo">Repository</a>
    </div>
  </div>
</section>
