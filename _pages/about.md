---
permalink: /
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__inner">
    <div class="home-portrait">
      <img class="home-portrait__light" src="{{ '/images/bio-halftone.png' | relative_url }}" alt="Portrait of {{ site.author.name }}">
    </div>
    <div class="home-hero__main">
      <p class="home-eyebrow">Magnetic resonance · Pulsed EPR · Instrumentation · Software</p>
      <h1 class="home-name">{{ site.title }}</h1>
      <p class="home-role">Senior Researcher, EPR laboratory <span class="home-role__sep">/</span> International Tomography Center, Novosibirsk, Russia</p>
      <p class="home-statement">I use pulsed EPR spectroscopy and terahertz radiation to study single-molecule magnets, and write the open-source software that runs the experiments.</p>
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
</section>

<div class="home-grid">

<section class="panel" id="news">
  <div class="panel__head">
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

<section class="panel" id="teaching">
  <div class="panel__head">
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
  </div>
</section>

<section class="panel" id="interests">
  <div class="panel__head">
    <h2 class="panel__title">Research interests</h2>
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

</div>
