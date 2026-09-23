---
layout: page
title: ALSEBO
description: Active Sequence Exploration Bayesian Optimizer for generative protein design with variational autoencoders.
img: assets/img/projects/alsebo.svg # placeholder: replace with a screenshot or figure
importance: 2
category: work
# github: https://github.com/your-org/alsebo # TODO: add the repository link to show a GitHub badge on the card
related_publications: false
---

**ALSEBO** (Active Sequence Exploration Bayesian Optimizer) searches protein sequence space efficiently. It encodes sequences into the continuous latent space of a **variational autoencoder (VAE)**, then uses **Bayesian optimization** in that space to propose new variants that are likely to improve a target property while staying close to realistic, foldable sequences.

#### Key features

- **Generative latent space:** a VAE trained on protein sequences turns a huge discrete search into a smooth, continuous one.
- **Active exploration:** acquisition functions balance exploiting known good regions against exploring uncertain ones, keeping the number of measurements small.
- **Case study:** generative design of novel **avGFP** (_Aequorea victoria_ green fluorescent protein) variants, validated with molecular dynamics simulations.

#### Tech stack

Python · variational autoencoders · Bayesian optimization · active learning
