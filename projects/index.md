---
layout: default
title: 프로젝트
lang: ko
---

<div class="container">
  <h1>프로젝트</h1>
  
  {% include search.html %}
  {% include tag-filter.html %}
  
  <div class="projects-grid">
    {% for project in site.data.projects %}
      {% include project-card.html project=project lang="ko" %}
    {% endfor %}
  </div>
</div>
