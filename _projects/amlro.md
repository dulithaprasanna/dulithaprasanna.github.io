---
layout: page
title: AMLRO
description: Active Machine Learning Reaction Optimizer for single- and multi-objective, closed- and open-loop reaction optimization with explainable AI.
img: assets/img/projects/amlro_overview.jpg
importance: 2
category: work
github: https://github.com/RxnRover/amlro
related_publications: false
---

**AMLRO** (Active Machine Learning Reaction Optimizer) finds high-yielding reaction conditions using far fewer experiments than grid or one-factor-at-a-time screening. A surrogate model learns from each round of results and proposes the next most informative set of conditions.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/amlro_overview.jpg" title="AMLRO overview" alt="AMLRO active learning cycle: define reaction space, select initial data, model training and prediction, experimental feedback" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  The AMLRO active learning cycle: define the reaction space, select initial data, train a model and predict, then feed experimental results back in. Figure from the <a href="https://github.com/RxnRover/amlro">AMLRO repository</a>.
</div>

#### Key features

- **Closed-loop optimization:** runs autonomously with automated or high-throughput experimental platforms.
- **Open-loop optimization:** keeps a chemist in the loop through a web GUI (Flask/Streamlit); the chemist reviews each suggestion before running it.
- **Single- and multi-objective:** optimize yield alone, or trade off competing goals such as yield and selectivity.
- **Explainable AI:** SHAP analysis shows which variables (catalyst, solvent, temperature, time, …) drive reaction performance, so the model's recommendations are interpretable, not a black box.
- **Applications:** aldehyde-selective **Wacker oxidation** (multi-objective, 7-dimensional parameter space), Paal-Knorr flow synthesis, and closed-loop continuous flow synthesis of diglycolamides.

Code: [RxnRover/amlro](https://github.com/RxnRover/amlro) · Software DOI: [10.11578/dc.20260205.1](https://doi.org/10.11578/dc.20260205.1)

#### How it works

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/amlro_workflow.jpg" title="AMLRO workflow" alt="AMLRO workflow: reaction space and initial sampling, initial experiments, and the active learning optimization loop" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  AMLRO in three steps: define the reaction space and generate initial samples (random, Latin hypercube, or Sobol), run initial experiments, then iterate the active learning loop of training, prediction, selection, and retraining.
</div>

#### Tech stack

Python · active learning · surrogate modeling · SHAP · Flask / Streamlit
