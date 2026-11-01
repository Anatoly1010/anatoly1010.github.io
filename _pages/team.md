---
layout: archive
title: "Team"
permalink: /team/
lead: "The people of the Laboratory of Instrumentation and Experimental Methods."
motif: spin-echo
motif_label: "two-pulse echo"
---

{% include base_path %}

{% assign heads = site.data.team | where: "head", true %}
{% for member in heads %}
<section class="panel panel--accent">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-user-tie" aria-hidden="true"></i>
    <h2 class="panel__title">{{ member.role }}</h2>
    <a class="panel__see-all" href="{{ member.url | relative_url }}">Profile →</a>
  </div>
  <div class="panel__body">
    <div class="panel-person">
      <a class="panel-person__photo" href="{{ member.url | relative_url }}"><img src="{{ member.photo | relative_url }}" alt="Portrait of {{ member.name }}"></a>
      <div class="panel-person__text">
        <a class="panel-person__name" href="{{ member.url | relative_url }}">{{ member.name }}</a>
        <span class="panel-person__role">{{ member.role }}</span>
        <p class="panel-person__bio">{{ member.bio }}</p>
      </div>
    </div>
  </div>
</section>
{% endfor %}

<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-user-group" aria-hidden="true"></i>
    <h2 class="panel__title">Members</h2>
  </div>
  <div class="panel__body">
    <ul class="panel-specs">
      {% assign members = site.data.team | where_exp: "m", "m.head != true" %}
      {% for member in members %}
      <li>
        <span class="panel-specs__key">{% if member.url %}<a href="{% if member.url contains '#' %}{{ member.url }}{% else %}{{ member.url | relative_url }}{% endif %}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</span>
        <span class="panel-specs__value{% if member.placeholder %} panel-specs__value--muted{% endif %}">{{ member.role }}</span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="panel" id="positions">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-user-plus" aria-hidden="true"></i>
    <h2 class="panel__title">Open positions</h2>
  </div>
  <div class="panel__body">
    <p class="panel-desc">We are looking for students and postdocs interested in pulsed EPR, instrument development and experiment automation. Write with a short CV and a few lines about your interests.</p>
    <div class="panel-actions">
      <a class="panel-btn" href="mailto:{{ site.author.email }}">Email</a>
    </div>
  </div>
</section>
