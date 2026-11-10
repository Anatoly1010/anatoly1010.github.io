---
layout: archive
title: "Equipment"
permalink: /equipment/
lead: "Spectrometers and control systems the laboratory has built or automated, all&nbsp;driven by Atomize."
motif: cw
motif_label: "cw spectrum"
---

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-gauge-high" aria-hidden="true"></i>
    <h2 class="panel__title">At a glance</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-stats"><li><b>6</b><i>Setups</i></li><li><b>X · Q</b><i>Microwave bands</i></li><li><b>1</b><i>Control software</i></li></ul>
  </div>
</section>

<section class="panel panel--accent">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-bolt" aria-hidden="true"></i>
    <h2 class="panel__title">EPR spectroscopy endstation</h2>
    <span class="panel__count">Novosibirsk FEL</span>
  </div>
  <div class="panel__body">
    <p class="panel-desc">A multi-functional setup at the <a href="https://ieeexplore.ieee.org/document/7163372">Novosibirsk Free Electron Laser Facility</a>: three X-band EPR machines, pulsed, continuous wave, and time-resolved with a Lotis TII Nd:YAG laser. All three run on <a href="https://github.com/Anatoly1010/Atomize_ITC">Atomize_ITC</a>; the pulsed machine can also tune itself and measure unattended with <a href="https://anatoly1010.github.io/atomize_docs/projects/epr_auto/">epr_auto</a>.</p>
    <div class="panel-cols panel-cols--media">
      <div class="panel-cols__col">
        <ul class="panel-stats"><li><b>8.5–11.5</b><i>GHz range</i></li><li><b>300 W</b><i>Solid-state amplifier</i></li><li><b>3.2 ns</b><i>Pulse resolution</i></li><li><b>0.8 ns</b><i>AWG resolution</i></li></ul>
        <div class="panel-cols">
          <div class="panel-cols__col">
            <h3 class="panel-cols__title">Pulsed X-band</h3>
            <ul class="panel-specs">
            <li><span class="panel-specs__key">Pulse gen. / ADC / DAC</span><span class="panel-specs__value">Insys FM214x3GDA: 312.5 MHz TTL, 2.5 GHz ADC, 1.5 GHz DAC</span></li>
            <li><span class="panel-specs__key">Microwave bridge</span><span class="panel-specs__value">Micran X-band v2</span></li>
            <li><span class="panel-specs__key">Field</span><span class="panel-specs__value">BH15</span></li>
            <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Lakeshore 335</span></li>
          </ul>
          </div>
          <div class="panel-cols__col">
            <h3 class="panel-cols__title">CW X-band</h3>
            <ul class="panel-specs">
            <li><span class="panel-specs__key">Lock-in</span><span class="panel-specs__value">Stanford Research SR-850</span></li>
            <li><span class="panel-specs__key">Frequency counter</span><span class="panel-specs__value">Agilent 53131A</span></li>
            <li><span class="panel-specs__key">Field</span><span class="panel-specs__value">BH15</span></li>
            <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Lakeshore 335</span></li>
          </ul>
          </div>
          <div class="panel-cols__col">
            <h3 class="panel-cols__title">Time-resolved X-band</h3>
            <ul class="panel-specs">
            <li><span class="panel-specs__key">Laser</span><span class="panel-specs__value">Lotis TII Nd:YAG</span></li>
            <li><span class="panel-specs__key">Oscilloscopes</span><span class="panel-specs__value">Keysight DSOX3034A, DSOX2012A</span></li>
            <li><span class="panel-specs__key">Frequency counter</span><span class="panel-specs__value">Agilent 53131A</span></li>
            <li><span class="panel-specs__key">Field</span><span class="panel-specs__value">BH15</span></li>
            <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Lakeshore 335</span></li>
            <li><span class="panel-specs__key">Gaussmeter</span><span class="panel-specs__value">Sibir 1 NMR</span></li>
          </ul>
          </div>
        </div>
        <div class="panel-actions">
          <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/projects/endstation/">Documentation</a>
          <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/projects/epr_auto/">epr_auto</a>
        </div>
      </div>
      <figure class="panel-figure panel-figure--bottom">
        <img src="{{ '/images/equipment/epr-endstation.jpg' | relative_url }}" alt="EPR endstation with its magnet, instrument racks and beamline at the Novosibirsk Free Electron Laser Facility" width="960" height="1280">
        <figcaption>EPR spectroscopy endstation at the Novosibirsk Free Electron Laser Facility.</figcaption>
      </figure>
    </div>
  </div>
</section>

<div class="panel-grid">

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-wave-square" aria-hidden="true"></i>
    <h2 class="panel__title">X-band pulsed EPR</h2>
    <span class="panel__count">NIOCH</span>
  </div>
  <div class="panel__body">
    <ul class="panel-stats"><li><b>8.5–11.5</b><i>GHz range</i></li><li><b>300 W</b><i>Solid-state amplifier</i></li><li><b>2 ns</b><i>Pulse resolution</i></li></ul>
    <p class="panel-desc">A broadband spectrometer for high-throughput measurements, with a control center built on Atomize: presets for standard experiments, interactive pulse tables with phase cycling and shaped pulses, on-the-fly Fourier transform, and non-uniform sampling.</p>
      <ul class="panel-specs">
        <li><span class="panel-specs__key">Digitizer</span><span class="panel-specs__value">Spectrum M4i-4450-x8 PCIe</span></li>
        <li><span class="panel-specs__key">DAC</span><span class="panel-specs__value">Spectrum M4i.6631-x8 PCIe</span></li>
        <li><span class="panel-specs__key">Pulse generator</span><span class="panel-specs__value">PulseBlaster ESR-PRO-500 PCI</span></li>
        <li><span class="panel-specs__key">Microwave bridge</span><span class="panel-specs__value">Micran X-band</span></li>
        <li><span class="panel-specs__key">Oscilloscope</span><span class="panel-specs__value">Keysight DSOX3034A</span></li>
        <li><span class="panel-specs__key">Field</span><span class="panel-specs__value">BH15</span></li>
        <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Stanford Research PTC10</span></li>
      </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/projects/xband/">Documentation</a>
      <a class="panel-btn" href="https://doi.org/10.1016/j.jmro.2022.100092">Paper</a>
    </div>
  </div>
</section>

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-satellite-dish" aria-hidden="true"></i>
    <h2 class="panel__title">Q-band pulsed EPR</h2>
    <span class="panel__count">NIOCH</span>
  </div>
  <div class="panel__body">
    <ul class="panel-stats"><li><b>33–35.5</b><i>GHz range</i></li><li><b>200 W</b><i>Solid-state amplifier</i></li><li><b>4 ns</b><i>Pulse resolution</i></li></ul>
    <p class="panel-desc">Built on the same control center as the X-band machine, with its own hardware and a 1.25 GS/s DAC for shaped microwave pulses.</p>
      <ul class="panel-specs">
        <li><span class="panel-specs__key">DAC</span><span class="panel-specs__value">Spectrum M4i.6631-x8 PCIe</span></li>
        <li><span class="panel-specs__key">Pulse generator</span><span class="panel-specs__value">Micran PCIe, based on Insys FMC126P</span></li>
        <li><span class="panel-specs__key">Microwave bridge</span><span class="panel-specs__value">Micran Q-band</span></li>
        <li><span class="panel-specs__key">Oscilloscope</span><span class="panel-specs__value">Keysight DSOX3034A</span></li>
        <li><span class="panel-specs__key">Field</span><span class="panel-specs__value">Homemade</span></li>
        <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Lakeshore 335</span></li>
      </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/projects/qband/">Documentation</a>
    </div>
  </div>
</section>

</div>

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-snowflake" aria-hidden="true"></i>
    <h2 class="panel__title">Cryomech control center</h2>
    <span class="panel__count">ITC</span>
  </div>
  <div class="panel__body">
    <div class="panel-cols panel-cols--media">
      <div class="panel-cols__col">
        <p class="panel-desc">A standalone application on top of Atomize that runs the closed-cycle helium system: it supervises the compressor, the liquid-helium level and the cold-head temperature, automates the compressor duty cycle, logs every reading, and answers to a Telegram bot for remote monitoring and control.</p>
        <ul class="panel-specs">
        <li><span class="panel-specs__key">Compressor</span><span class="panel-specs__value">Cryomech CPA1110</span></li>
        <li><span class="panel-specs__key">Helium level</span><span class="panel-specs__value">Cryomagnetics LM-510</span></li>
        <li><span class="panel-specs__key">Cold head</span><span class="panel-specs__value">Scientific Instruments SCM10</span></li>
        <li><span class="panel-specs__key">Temperature</span><span class="panel-specs__value">Lakeshore 340, optional</span></li>
        <li><span class="panel-specs__key">Moisture</span><span class="panel-specs__value">IVG-1/1, optional</span></li>
      </ul>
        <div class="panel-actions">
          <a class="panel-btn" href="https://anatoly1010.github.io/atomize_docs/projects/cryomech/">Documentation</a>
        </div>
      </div>
      <figure class="panel-figure">
        <img src="{{ '/images/equipment/cryomech-control.png' | relative_url }}" alt="Cryomech control center main window">
      </figure>
    </div>
  </div>
</section>
