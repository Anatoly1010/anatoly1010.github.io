---
permalink: /team/melnikov/
description: "Anatoly Melnikov, Head of the Laboratory of Instrumentation and Experimental Methods, International Tomography Center, Novosibirsk"
---

<section class="home-hero">
  <div class="home-hero__inner">
    <div class="home-portrait">
      <img class="home-portrait__light" src="{{ '/images/bio-halftone.png' | relative_url }}" alt="Portrait of {{ site.author.name }}">
    </div>
    <div class="home-hero__main">
      <p class="home-eyebrow">Magnetic resonance · Pulsed EPR · Instrumentation<span class="home-eyebrow__sep"> · </span><br class="home-eyebrow__br">Software</p>
      <h1 class="home-name"><span class="home-name__main">{{ site.author.name }}</span><span class="home-name__post">, Ph.D.</span></h1>
      <p class="home-role">Head of the Laboratory of Instrumentation and Experimental Methods <span class="home-role__sep">/</span> International Tomography Center, Novosibirsk, Russia</p>
      <p class="home-links">
        {% assign sep = false %}
        {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}">Google&nbsp;Scholar</a>{% assign sep = '1' %}{% endif %}
        {% if site.author.orcid %}{% if sep %}<span class="home-links__dot">·</span>{% endif %}<a href="{{ site.author.orcid }}">ORCID</a>{% assign sep = '1' %}{% endif %}
        {% if site.author.researchgate %}{% if sep %}<span class="home-links__dot">·</span>{% endif %}<a href="{{ site.author.researchgate }}">Research Gate</a>{% assign sep = '1' %}{% endif %}
        {% if site.author.github %}{% if sep %}<span class="home-links__dot">·</span>{% endif %}<a href="https://github.com/{{ site.author.github }}">GitHub</a>{% assign sep = '1' %}{% endif %}
        {% if site.author.telegram_channel %}{% if sep %}<span class="home-links__dot">·</span>{% endif %}<a href="https://t.me/{{ site.author.telegram_channel }}">Telegram</a>{% assign sep = '1' %}{% endif %}
        {% if site.author.email %}{% if sep %}<span class="home-links__dot">·</span>{% endif %}<a href="mailto:{{ site.author.email }}">Email</a>{% endif %}
      </p>
    </div>
  </div>
  <div class="home-hero__signal">{% include home-signal.html %}</div>
</section>

<div class="home-grid">

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-briefcase" aria-hidden="true"></i>
    <h2 class="panel__title">Positions</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-specs">
      <li><span class="panel-specs__key">ITC</span><span class="panel-specs__value">Head of the Laboratory of Instrumentation and Experimental Methods</span></li>
      <li><span class="panel-specs__key">NSU</span><span class="panel-specs__value">Associate Professor, Department of Natural Sciences</span></li>
      <li><span class="panel-specs__key">JORS</span><span class="panel-specs__value">Associate Editor, Journal of Open Research Software</span></li>
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="{{ '/cv/' | relative_url }}">CV</a>
      <a class="panel-btn" href="{{ '/talks/' | relative_url }}">Talks</a>
    </div>
  </div>
</section>

<section class="panel" id="teaching">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-chalkboard-user" aria-hidden="true"></i>
    <h2 class="panel__title">Teaching</h2>
    <a class="panel__see-all" href="{{ '/teaching/' | relative_url }}">See all →</a>
  </div>
  <div class="panel__body">
    <p class="panel-desc">Associate Professor at the Department of Natural Sciences,<br>Novosibirsk State University.</p>
    <ul class="panel-specs">
      {% assign courses = site.teaching | where: "ongoing", true | sort: "date" | reverse %}
      {% for course in courses %}
      <li>
        <span class="panel-specs__key"><a href="{{ course.url | relative_url }}">{{ course.title }}</a></span>
        <span class="panel-specs__value">{{ course.type }}</span>
      </li>
      {% endfor %}
    </ul>
    <div class="panel-actions">
      <a class="panel-btn" href="{{ '/teaching/' | relative_url }}">All courses and materials</a>
    </div>
  </div>
</section>

</div>
