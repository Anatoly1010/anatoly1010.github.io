---
permalink: /
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__inner">
    <div class="home-hero__main">
      <p class="home-eyebrow">Magnetic resonance · Pulsed EPR · Instrumentation<span class="home-eyebrow__sep"> · </span><br class="home-eyebrow__br">Software</p>
      <h1 class="home-name">{{ site.title }}</h1>
      <p class="home-role">International Tomography Center <span class="home-role__sep">/</span> Novosibirsk, Russia</p>
      <p class="home-statement">We use pulsed EPR spectroscopy and terahertz radiation to study single-molecule magnets, and build the instruments and open-source software that run the experiments.</p>
      <p class="home-links">
        <a href="{{ '/team/' | relative_url }}">Team</a>
        <span class="home-links__dot">·</span><a href="{{ '/team/#positions' | relative_url }}">Open positions</a>
        {% if site.author.github %}<span class="home-links__dot">·</span><a href="https://github.com/{{ site.author.github }}">GitHub</a>{% endif %}
        {% if site.author.email %}<span class="home-links__dot">·</span><a href="mailto:{{ site.author.email }}">Email</a>{% endif %}
      </p>
    </div>
  </div>
  <div class="home-hero__signal">{% include home-signal.html %}</div>
</section>

<div class="home-grid">

<section class="panel" id="currently">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-flask" aria-hidden="true"></i>
    <h2 class="panel__title">Currently</h2>
    <span class="panel__count">updated 2026-09</span>
  </div>
  <div class="panel__body panel__body--prose">
    <div class="panel-prose">
      <p>On the bench: the ITC field controller, where the target is 1 ppm stability; commissioning time-resolved EPR at NIOCH; and T<sub>2</sub> measurements on trityl isotopomers. Also the SIFTER background, with <a href="https://orcid.org/0000-0003-3275-0714">M. Yulikov</a> (ETH, Zürich) and <a href="https://orcid.org/0000-0002-3076-0196">N. Isaev</a> (ICKC, Novosibirsk).</p>
      <p>In the editor: a Mellin transform implementation, and <code>auto_epr</code> in <a href="https://github.com/Anatoly1010/Atomize">Atomize</a>.</p>
    </div>
  </div>
</section>

<section class="panel" id="interests">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-atom" aria-hidden="true"></i>
    <h2 class="panel__title">Research directions</h2>
  </div>
  <div class="panel__body">
    <ol class="panel-ints">
      <li><span class="panel-ints__key">Magnetic resonance</span><span class="panel-ints__value">including instrumentation development.</span></li>
      <li><span class="panel-ints__key">Control and automation</span><span class="panel-ints__value">of experiments and instruments.</span></li>
      <li><span class="panel-ints__key">Software development</span><span class="panel-ints__value"><a href="https://github.com/Anatoly1010/Atomize">Atomize</a>, modular open-source instrument control.</span></li>
      <li><span class="panel-ints__key">Numerical simulation</span><span class="panel-ints__value">of spin dynamics.</span></li>
      <li><span class="panel-ints__key">Synchrotron and FEL radiation</span><span class="panel-ints__value">applied to single-molecule magnets.</span></li>
    </ol>
  </div>
</section>

<section class="panel" id="news">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-tower-broadcast" aria-hidden="true"></i>
    <h2 class="panel__title">Recent news</h2>
    <a class="panel__see-all" href="{{ '/news/' | relative_url }}">See all →</a>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      {% assign news = site.posts | where_exp: "p", "p.categories contains 'news'" | sort: "date" | reverse %}
      {% for post in news limit: 5 %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <div class="panel-news__body">
          <a class="panel-news__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.excerpt %}<span class="panel-news__detail">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 110 }}</span>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="panel" id="publications">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-file-lines" aria-hidden="true"></i>
    <h2 class="panel__title">Selected publications</h2>
    <a class="panel__see-all" href="{{ '/publications/' | relative_url }}">See all →</a>
  </div>
  <div class="panel__body">
    <ol class="panel-pubs">
      {% assign pubs = site.publications | sort: "date" | reverse %}
      {% for pub in pubs limit: 4 %}
      <li>
        <a class="panel-pubs__title" href="{{ pub.url | relative_url }}">{{ pub.title }}</a>
        {% assign bits = pub.citation | split: '&quot;' %}
        {% if bits.size > 2 %}
        <span class="panel-pubs__authors">{{ bits[0] | strip }}</span>
        <span class="panel-pubs__meta">{{ bits | slice: 2, 99 | join: '&quot;' | strip }}</span>
        {% elsif pub.citation %}
        <span class="panel-pubs__meta">{{ pub.citation }}</span>
        {% else %}
        <span class="panel-pubs__meta"><i>{{ pub.venue }}</i> {{ pub.date | date: "%Y" }}.</span>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

</div>
