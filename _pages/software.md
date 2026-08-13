---
layout: archive
title: "Software"
permalink: /software/
lead: "Open-source software I develop and maintain."
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
    <p class="panel-desc">Modular open-source software for control and automation of scientific and industrial instruments. It drives our homemade pulsed EPR spectrometers, including the EPR endstation at the Novosibirsk Free Electron Laser, and lets an experiment be written as a short Python script instead of vendor-specific glue.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Role</span><span class="panel-specs__value">Main developer</span></li>
      <li><span class="panel-specs__key">Language</span><span class="panel-specs__value">Python</span></li>
      <li><span class="panel-specs__key">Licence</span><span class="panel-specs__value">Open source</span></li>
      {% if site.author.atomize_stars %}
        <li><span class="panel-specs__key">GitHub stars</span><span class="panel-specs__value"><a href="https://github.com/Anatoly1010/Atomize/stargazers">{{ site.author.atomize_stars }}</a></span></li>
      {% endif %}
      {% if atomize_paper %}
        <li><span class="panel-specs__key">Paper</span><span class="panel-specs__value"><a href="{{ atomize_paper.url | relative_url }}">{{ atomize_paper.venue }}, {{ atomize_paper.date | date: "%Y" }}</a></span></li>
      {% endif %}
      <li><span class="panel-specs__key">Used at</span><span class="panel-specs__value">Pulsed X- and Q-band EPR spectrometers at NIOCH SB RAS, ITC SB RAS and the Zavoisky Physical-Technical Institute, and the EPR spectroscopy endstation of the Novosibirsk Free Electron Laser</span></li>
      <li><span class="panel-specs__key">Also drives</span><span class="panel-specs__value">A Cryomech liquid helium plant, via the Atomize_Cryomech build</span></li>
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
    <i class="panel__glyph fa-solid fa-microchip" aria-hidden="true"></i>
    <h2 class="panel__title">SpinCorePCI_no_sudo</h2>
    <a class="panel__see-all" href="https://github.com/Anatoly1010/SpinCorePCI_no_sudo">GitHub →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Runs SpinCore PulseBlasterESR-PRO PCI boards on Linux without sudo. The vendor library reaches the card through x86 I/O ports, which normally forces the whole experiment to run as root. A small launcher carries that single privilege, and nothing else, into the program it starts, so the control software and the worker processes that talk to the card stay unprivileged.</p>
    <ul class="panel-specs">
      <li><span class="panel-specs__key">Role</span><span class="panel-specs__value">Author</span></li>
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
