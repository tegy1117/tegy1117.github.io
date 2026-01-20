---
layout: default
title: Certificates
lang: en
---

<div class="container">
  <h1>Certificates & Self-PR</h1>
  
  <section>
    <h2>Certificates</h2>
    <div class="certificates-grid">
      {% for cert in site.data.certificates %}
      <div class="card">
        <h3 class="card-title">{{ cert.name_en }}</h3>
        <div class="card-meta">
          <span class="status-badge {{ cert.status }}">
            {% if cert.status == 'acquired' %}Acquired{% else %}Studying{% endif %}
          </span>
          <span>{{ cert.category }}</span>
        </div>
        {% if cert.acquired_date %}
        <p>Acquired: {{ cert.acquired_date | date: "%Y-%m-%d" }}</p>
        {% endif %}
        <div class="card-tags">
          {% for tag in cert.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
</div>
