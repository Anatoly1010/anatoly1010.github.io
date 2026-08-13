---
title: "News"
layout: archive
collection: news
permalink: /news/
motif: cw
motif_label: "cw spectrum"
---

{% include base_path %}

{% assign news_posts = site.categories.news | sort: "date" | reverse %}
<section class="panel">
  <div class="panel__head">
    <i class="panel__glyph fa-solid fa-tower-broadcast" aria-hidden="true"></i>
    <h2 class="panel__title">All news</h2>
    <span class="panel__count">{{ news_posts.size }}</span>
  </div>
  <div class="panel__body">
    <ul class="panel-news">
      {% for post in news_posts %}
        {% include archive-single-post.html %}
      {% endfor %}
    </ul>
  </div>
</section>
