---
layout: default
title: 자격증
lang: ko
---

<div class="container">
  <h1>자격증 & 자기PR</h1>
  
  <section>
    <h2>자격증</h2>
    <div class="certificates-grid">
      {% for cert in site.data.certificates %}
      <div class="card">
        <h3 class="card-title">{{ cert.name }}</h3>
        <div class="card-meta">
          <span class="status-badge {{ cert.status }}">
            {% if cert.status == 'acquired' %}취득{% else %}공부중{% endif %}
          </span>
          <span>{{ cert.category }}</span>
        </div>
        {% if cert.acquired_date %}
        <p>취득일: {{ cert.acquired_date | date: "%Y년 %m월 %d일" }}</p>
        {% endif %}
        <div class="card-tags">
          {% for tag in cert.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% if cert.related_post %}
        <p><a href="{{ '/blog/?tag=' | append: cert.related_post | relative_url }}">관련 블로그 글 보기</a></p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </section>
</div>
