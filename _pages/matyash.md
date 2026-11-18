---
permalink: /team/matyash/
author: "Alexey Matyash"
description: "Alexey Matyash, Laboratory of Instrumentation and Experimental Methods, International Tomography Center, Novosibirsk."
---

{% assign member = site.data.team | where: "id", "matyash" | first %}
{% assign member_talks = site.talks | where: "speaker", member.id | sort: "date" | reverse %}

<section class="home-hero">
  <div class="home-hero__inner">
    <div class="home-portrait home-portrait--contain">
      <img class="home-portrait__light" src="{{ member.photo | relative_url }}" alt="Portrait of {{ member.name }}">
    </div>
    <div class="home-hero__main">
      <p class="home-eyebrow">Physical chemistry</p>
      <h1 class="home-name"><span class="home-name__main">{{ member.name }}</span></h1>
      <p class="home-role">{{ member.role }} <span class="home-role__sep">/</span> Laboratory of Instrumentation and Experimental Methods, International Tomography Center, Novosibirsk, Russia</p>
      <p class="home-statement">{{ member.bio }}</p>
      <p class="home-links">
        <a href="{{ member.orcid }}">ORCID</a>
        <span class="home-links__dot">·</span><a href="mailto:{{ member.email }}">Email</a>
        {% if member_talks.size > 0 %}<span class="home-links__dot">·</span><a href="#talks">Talks</a>{% endif %}
      </p>
    </div>
  </div>
  <div class="home-hero__signal">{% include home-signal.html %}</div>
</section>

<div class="home-grid home-grid--single">

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-graduation-cap" aria-hidden="true"></i>
    <h2 class="panel__title">Education</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-specs">
      <li><span class="panel-specs__key">University</span><span class="panel-specs__value">Novosibirsk State University</span></li>
      <li><span class="panel-specs__key">Faculty</span><span class="panel-specs__value">Faculty of Natural Sciences</span></li>
      <li><span class="panel-specs__key">Programme</span><span class="panel-specs__value">Theoretical and Applied Chemistry</span></li>
      <li><span class="panel-specs__key">Chair</span><span class="panel-specs__value">Physical Chemistry</span></li>
      <li><span class="panel-specs__key">Degree</span><span class="panel-specs__value">Specialist programme (master’s-equivalent level), final year</span></li>
    </ul>
  </div>
</section>

{% if member_talks.size > 0 %}
<section class="panel" id="talks">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-comments" aria-hidden="true"></i>
    <h2 class="panel__title">Talks and presentations</h2>
    <span class="panel__count">{{ member_talks.size }}</span>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      {% for post in member_talks %}
        {% include archive-single-talk-list.html %}
      {% endfor %}
    </ul>
  </div>
</section>
{% include talk-map.html talks=member_talks %}
{% endif %}

</div>
