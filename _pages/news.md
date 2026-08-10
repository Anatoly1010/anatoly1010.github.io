---
title: "News"
layout: archive
collection: news
permalink: /news/
---

{% include base_path %}

{% assign news_posts = site.categories.news | sort: "date" | reverse %}
<section class="panel">
  <div class="panel__head">
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
