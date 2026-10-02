---
layout: page
permalink: /talks/
title: talks
description: Conference talks, posters, and Ph.D. milestones.
nav: true
nav_order: 3
---

{% assign talks = site.data.talks %}

## Ph.D. milestones

<div class="row">
  {% for m in talks.milestones %}
    <div class="col-md-6 mb-4">
      <div class="talk-card h-100">
        <div class="talk-media">
          {% assign m_path = 'assets/img/talks/' | append: m.image %}
          {% include figure.liquid loading="eager" path=m_path alt=m.title class="talk-img" zoomable=true %}
        </div>
        <div class="talk-body">
          <span class="talk-badge talk-badge-milestone">{{ m.type }}</span>
          <h3 class="talk-title">{{ m.title }}</h3>
          <div class="talk-event">{{ m.venue }}</div>
          <div class="talk-date"><i class="fa-regular fa-calendar"></i> {{ m.date }}</div>
          {% if m.link %}
            <a class="talk-link" href="{{ m.link }}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> {{ m.link_label | default: 'More' }}</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

## Talks and posters

{% assign by_year = talks.presentations | group_by: 'year' %}
{% for group in by_year %}

<h3 class="talk-year">{{ group.name }}</h3>
<div class="row">
  {% for t in group.items %}
    {% if t.images %}
      <div class="col-md-6 mb-4">
        <div class="talk-card h-100">
          <div class="talk-media{% if t.images.size > 1 %} talk-media-pair{% endif %}">
            {% for img in t.images %}
              {% assign img_path = 'assets/img/talks/' | append: img %}
              {% include figure.liquid path=img_path alt=t.title class="talk-img" zoomable=true %}
            {% endfor %}
          </div>
          <div class="talk-body">
            <span class="talk-badge talk-badge-{{ t.type | downcase }}">{{ t.type }}</span>
            <h4 class="talk-title">{{ t.title }}</h4>
            <div class="talk-authors">{{ t.authors | replace: 'Dulitha P. Kulathunga', '<b>Dulitha P. Kulathunga</b>' }}</div>
            <div class="talk-event"><i class="fa-solid fa-location-dot"></i> {{ t.event }}{% if t.location %}, {{ t.location }}{% endif %}</div>
            {% if t.link %}
              {% assign first_char = t.link | slice: 0 %}
              <a class="talk-link" href="{% if first_char == '/' %}{{ t.link | relative_url }}{% else %}{{ t.link }}{% endif %}"{% if first_char != '/' %} target="_blank" rel="noopener"{% endif %}><i class="fa-solid fa-arrow-up-right-from-square"></i> {{ t.link_label | default: 'More' }}</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
{% for t in group.items %}{% unless t.images %}
<div class="talk-row">
<span class="talk-badge talk-badge-{{ t.type | downcase }}">{{ t.type }}</span>
<span class="talk-row-title">{{ t.title }}</span>
<div class="talk-authors">{{ t.authors | replace: 'Dulitha P. Kulathunga', '<b>Dulitha P. Kulathunga</b>' }}</div>
<div class="talk-event"><i class="fa-solid fa-location-dot"></i> {{ t.event }}{% if t.location %}, {{ t.location }}{% endif %}</div>
</div>
{% endunless %}{% endfor %}
{% endfor %}

<style>
  .talk-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.6rem;
    overflow: hidden;
    background-color: var(--global-card-bg-color);
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }
  .talk-card:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  }
  .talk-media {
    display: flex;
    gap: 2px;
  }
  .talk-media figure {
    flex: 1;
    margin: 0;
  }
  .talk-media .talk-img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: center 30%;
  }
  .talk-media-pair .talk-img {
    height: 240px;
  }
  .talk-body {
    padding: 1rem 1.2rem 1.1rem;
  }
  .talk-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0.5rem 0 0.35rem;
    line-height: 1.35;
  }
  h3.talk-title {
    font-size: 1.2rem;
  }
  .talk-authors,
  .talk-event,
  .talk-date {
    font-size: 0.88rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.2rem;
  }
  .talk-authors b {
    color: var(--global-text-color);
  }
  .talk-link {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.88rem;
  }
  .talk-badge {
    display: inline-block;
    padding: 0.1rem 0.55rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
    background-color: #1f6fb2;
  }
  .talk-badge-poster {
    background-color: #2e8b57;
  }
  .talk-badge-milestone {
    background-color: #8a5a00;
  }
  .talk-year {
    margin-top: 0.5rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .talk-row {
    padding: 0.7rem 0 0.8rem;
    margin-bottom: 1rem;
    border-left: 3px solid var(--global-divider-color);
    padding-left: 0.9rem;
  }
  .talk-row-title {
    font-weight: 600;
    margin-left: 0.4rem;
  }
</style>
