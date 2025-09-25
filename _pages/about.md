---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am currently a Senior Researcher at EPR laboratory of International Tomography Center, Novosibirsk, Russian Federation. My research interests include (i) magnetic resonance, including instrumentation development, (ii) control and automation of experiments, (iii) numerical simulations of spin dynamics, (iv) use of synchrotron and free-electron laser radiation to study single-molecule magnets. In recent years, together with colleagues, we have built several pulsed EPR spectrometers and created software for their use. Also, for the last six years I have been responsible for the EPR spectroscopy endstation at the large-science facility "Novosibirsk free electron laser". My current main project is focused on the development of fundamental and technical aspects of controlling the spin state of single-molecule magnets by applying resonant pulsed microwave and terahertz radiation to their spin system.

I enjoy coding and am a main developer of <a href="https://github.com/Anatoly1010/Atomize">Atomize</a>, modular open-source software for control and automation of scientific and industrial instruments. Atomize is used to control our homemade <a href="https://www.sciencedirect.com/science/article/pii/S2666441022000620">pulsed EPR spectrometer</a>. In addition to my scientific activities, I dedicate a significant amount of time to teaching at Department of Natural Sciences of Novosibirsk State University.

I am also an Associate Editor for the <a href="https://openresearchsoftware.metajnl.com/about/editorialteam">Journal of Open Research Software</a>.


<!-- -------------- two‑column section -------------- -->
<div style="display:flex; flex-wrap:wrap; gap:1rem; margin-top:1rem;">

  <!-- ░░ Column 2 — education summary ░░ -->
  <div style="flex:1 1 280px;">
    <h3>Education</h3>
    <ul style="margin-left:0;">
      <li><strong>Ph.D. Physical Chemistry</strong><br>
          Voevodsky Institute of Chemical Kinetics and Combustion SB RAS, 2016<br>
          Magnetosensitive luminescence of exciplexes, formed under the recombination of radiation generated radical ion pairs in non-polar solutions
      </li>
      <li><strong>Specialist Degree; Department of Natural Sciences</strong><br>
          Novosibirsk State University, 2013
      </li>
    </ul>
  </div>

</div>
<!-- ------------ end two‑column section ------------ -->

<div style="display:flex; flex-wrap:wrap; gap:1rem; margin-top:1rem;">

  <!-- ░░ Column 1 — latest 3 news posts ░░ -->
  <div style="flex:1 1 280px;">
    <h3>News</h3>
    <ul style="margin-left:0; padding-left:0; list-style:none;">
      {% assign news = site.posts
         | where_exp: "p", "p.categories contains 'news'"
         | sort: "date"
         | reverse
         | slice: 0, 4 %}
      {% for post in news %}
        <li style="margin-bottom:0.75rem;">
          <a href="{{ post.url | relative_url }}" style="font-weight:500;">
            {{ post.title }}
          </a><br>
          <small>{{ post.date | date: "%B %d, %Y" }}</small>
        </li>
      {% endfor %}
    </ul>
    <a class="btn btn--primary" href="/news/">More news →</a>
  </div>

</div>