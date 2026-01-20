---
layout: default
title: 블로그
lang: ko
---

<div class="container">
  <h1>블로그</h1>
  
  {% include search.html %}
  {% include tag-filter.html %}
  
  <div class="posts-list">
    {% for post in site.posts %}
    <article class="card">
      <h2 class="card-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <div class="card-meta">
        <span class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</span>
        {% if post.category %}
        <span class="post-category">{{ post.category }}</span>
        {% endif %}
      </div>
      <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
      {% if post.tags %}
      <div class="card-tags">
        {% for tag in post.tags %}
        <a href="{{ '/blog/?tag=' | append: tag | relative_url }}" class="tag">{{ tag }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</div>
