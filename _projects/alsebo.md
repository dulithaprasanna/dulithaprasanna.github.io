---
layout: page
title: ALSEBO
description: Active Learning Sequence Exploration via Bayesian Optimization. Coevolution-informed, sample-efficient generative protein design.
img: assets/img/projects/alsebo_pipeline.jpg
importance: 3
category: work
github: https://github.com/dulithaprasanna/ALSEBO
related_publications: false
---

**ALSEBO** (Active Learning Sequence Exploration via Bayesian Optimization) searches protein sequence space efficiently. It encodes sequences into the continuous latent space of a **variational autoencoder (VAE)**, then uses **Bayesian optimization** in that space to propose new variants that are likely to improve a target property while staying close to realistic, foldable sequences.

Preprint: [Coevolution-informed Bayesian optimization for sample-efficient protein design](https://www.biorxiv.org/content/10.64898/2026.08.06.743295) (bioRxiv, 2026). Code: [dulithaprasanna/ALSEBO](https://github.com/dulithaprasanna/ALSEBO).

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/alsebo_pipeline.jpg" title="ALSEBO pipeline" alt="ALSEBO closed-loop active learning pipeline: MSA and DCA train a VAE latent generative landscape; candidates are featurized and selected by Bayesian optimization, then validated" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  The ALSEBO closed loop. A multiple sequence alignment (MSA) and direct coupling analysis (DCA) train a variational autoencoder, giving a latent generative landscape of sequences. Candidates are featurized, scored by a Gaussian process surrogate, chosen by an acquisition function, and validated computationally or in the wet lab.
</div>

#### Key features

- **Generative latent space:** a VAE trained on protein sequences turns a huge discrete search into a smooth, continuous one.
- **Coevolution-informed features:** candidates are described by evolutionary (DCA) features, protein language model embeddings (ESM2), and latent coordinates, so the surrogate model learns fitness from very few examples.
- **Gaussian process surrogate:** predicts fitness with uncertainty, which drives the Bayesian selection of the next sequences to test.
- **Active exploration:** acquisition functions balance exploiting known good regions against exploring uncertain ones, keeping the number of measurements small.
- **Case study:** generative design of novel **avGFP** (_Aequorea victoria_ green fluorescent protein) variants, validated with molecular dynamics simulations.

#### Tech stack

Python · variational autoencoders · Bayesian optimization · active learning
