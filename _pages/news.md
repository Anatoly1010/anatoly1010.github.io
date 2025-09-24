---
title: "News"
layout: collection           # or "archive" if you prefer that look
collection: news
permalink: /news/
entries_layout: list  
---

{% include base_path %}

{% comment %}
  Loop over every post in the "news" category and render it
{% endcomment %}
{% for post in site.categories.news %}
  {% include archive-single.html %}
{% endfor %}
