---
layout: default
title: Projects
lang: en
---

<div class="container">
  <h1>Projects</h1>
  
  {% include search.html lang="en" %}
  {% include tag-filter.html lang="en" %}
  
  <div class="projects-grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project lang="en" %}
    {% endfor %}
  </div>
</div>
