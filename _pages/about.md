---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently a Senior Researcher at EPR laboratory of International Tomography Center, Novosibirsk, Russian Federation. My research interests include (i) magnetic resonance, including instrumentation development, (ii) control and automation of experiments, (iii) numerical simulations of spin dynamics, (iv) use of synchrotron and free electron laser radiation to study single-molecule magnets. In recent years, together with colleagues, we have built several pulsed EPR spectrometers and created software for their use. Also, for the last six years I have been responsible for the EPR spectroscopy endstation at the large-science facility "Novosibirsk free electron laser". My current <a href="https://rscf.ru/prjcard_int?23-73-00042">main project</a> is focused on the development of fundamental and technical aspects of controlling the spin state of single-molecule magnets by applying resonant pulsed microwave and terahertz radiation to their spin system.

I enjoy coding and am a main developer of <a href="https://github.com/Anatoly1010/Atomize">Atomize</a>, modular open-source software for control and automation of scientific and industrial instruments. Atomize is used to control our homemade <a href="https://www.sciencedirect.com/science/article/pii/S2666441022000620">pulsed EPR spectrometer</a>. In addition to my scientific activities, I dedicate a significant amount of time to teaching at Department of Natural Sciences of Novosibirsk State University and I am a lecturer in the courses "Structure of Matter" and "Introduction to Magnetic Resonance".

I am also an Associate Editor for the <a href="https://openresearchsoftware.metajnl.com/about/editorialteam">Journal of Open Research Software</a>.

<section class="about-section about-news">
  <div class="about-section__header">
    <h2 class="about-section__title">News</h2>
    <a class="pill-btn" href="/news/">All news</a>
  </div>
  <ul class="news-list">
    {% assign news = site.posts
       | where_exp: "p", "p.categories contains 'news'"
       | sort: "date"
       | reverse
       | slice: 0, 5 %}
    {% for post in news %}
      <li class="news-item">
        <time class="news-item__date" datetime="{{ post.date | date_to_xmlschema }}">
          <span class="news-item__date-month">{{ post.date | date: "%b" }}</span>
          <span class="news-item__date-year">{{ post.date | date: "%Y" }}</span>
        </time>
        <div class="news-item__body">
          <a class="news-item__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.excerpt %}
            <p class="news-item__excerpt">{{ post.excerpt | strip_html | truncate: 180 }}</p>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>
</section>
