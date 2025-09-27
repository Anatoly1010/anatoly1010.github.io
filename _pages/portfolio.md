---
title: "Projects"
layout: archive           # or "archive" if you prefer that look
collection: portfolio
permalink: /portfolio/
entries_layout: list  
---

{% include base_path %}

{% comment %}
  Loop over every post in the "portfolio" category and render it
{% endcomment %}
{% for post in site.categories.portfolio %}
  {% include archive-single.html %}
{% endfor %}
