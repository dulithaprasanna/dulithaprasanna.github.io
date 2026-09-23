---
layout: page
permalink: /repositories/
title: repositories
description: Open-source software for active learning, reaction optimization, and protein design.
nav: true
nav_order: 4
---

{% assign profile = site.data.repositories.github_profile %}

<div class="gh-profile d-flex align-items-center flex-wrap mb-4">
  <img src="https://github.com/{{ profile }}.png?size=160" alt="GitHub avatar of {{ profile }}" class="gh-avatar rounded-circle mr-3" width="64" height="64" loading="lazy">
  <div class="mr-auto">
    <div class="gh-handle">@{{ profile }}</div>
    <div class="gh-sub">Code, data, and notebooks behind my research</div>
  </div>
  <a class="btn btn-sm gh-button mt-2 mt-sm-0" href="https://github.com/{{ profile }}" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i> View GitHub profile
  </a>
</div>

<div class="row">
  {% for r in site.data.repositories.repos %}
    {% assign owner = r.repo | split: '/' | first %}
    <div class="col-md-6 mb-4">
      <div class="repo-card h-100">
        <div class="repo-owner"><i class="fa-solid fa-book-bookmark"></i> {{ owner }}</div>
        <a class="repo-name" href="https://github.com/{{ r.repo }}" target="_blank" rel="noopener">{{ r.name }}</a>
        <p class="repo-desc">{{ r.description }}</p>
        <div class="repo-meta">
          {% if r.language %}
            {% case r.language %}
              {% when 'Python' %}{% assign lang_color = '#3572A5' %}
              {% when 'Jupyter Notebook' %}{% assign lang_color = '#DA5B0B' %}
              {% else %}{% assign lang_color = '#8b949e' %}
            {% endcase %}
            <span class="repo-lang"><span class="lang-dot" style="background-color: {{ lang_color }}"></span>{{ r.language }}</span>
          {% endif %}
          <img src="https://img.shields.io/github/stars/{{ r.repo }}?style=flat&label=stars&color=1f6fb2" alt="GitHub stars for {{ r.repo }}" loading="lazy" height="20">
          <span class="repo-links">
            <a href="https://github.com/{{ r.repo }}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
            {% if r.docs %}
              <a href="{{ r.docs }}" target="_blank" rel="noopener"><i class="fa-solid fa-book"></i> Docs</a>
            {% endif %}
          </span>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<style>
  .gh-handle {
    font-weight: 600;
    font-size: 1.1rem;
  }
  .gh-sub {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }
  .gh-button {
    border: 1px solid var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .gh-button:hover {
    background-color: var(--global-theme-color);
    color: var(--global-hover-text-color);
  }
  .repo-card {
    display: flex;
    flex-direction: column;
    padding: 1.1rem 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.6rem;
    background-color: var(--global-card-bg-color);
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }
  .repo-card:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  }
  .repo-owner {
    color: var(--global-text-color-light);
    font-size: 0.8rem;
  }
  .repo-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.1rem 0 0.4rem;
  }
  .repo-desc {
    flex-grow: 1;
    font-size: 0.92rem;
    margin-bottom: 0.9rem;
  }
  .repo-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem 1rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  .lang-dot {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin-right: 0.35rem;
    vertical-align: middle;
  }
  .repo-links {
    margin-left: auto;
  }
  .repo-links a {
    margin-left: 0.8rem;
  }
</style>
