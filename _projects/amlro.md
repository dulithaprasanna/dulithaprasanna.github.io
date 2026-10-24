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
- **Open-loop optimization:** keeps a chemist in the loop, reviewing each AI-suggested experiment before running it, through the no-code [AMLRO GUI](#amlro-gui-no-code-optimization-for-bench-chemists).
- **Single- and multi-objective:** optimize yield alone, or trade off competing goals such as yield and selectivity.
- **Explainable AI:** SHAP analysis shows which variables (catalyst, solvent, temperature, time, …) drive reaction performance, so the model's recommendations are interpretable, not a black box.
- **Applications:** aldehyde-selective **Wacker oxidation** (multi-objective, 7-dimensional parameter space), Paal-Knorr flow synthesis, and closed-loop continuous flow synthesis of diglycolamides.

Code: [RxnRover/amlro](https://github.com/RxnRover/amlro) · Web GUI: [amlro_GUI](https://github.com/dulithaprasanna/amlro_GUI) ([DOI: 10.11578/dc.20260928.1](https://doi.org/10.11578/dc.20260928.1)) · Software DOI: [10.11578/dc.20260205.1](https://doi.org/10.11578/dc.20260205.1)

#### How it works

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/amlro_workflow.jpg" title="AMLRO workflow" alt="AMLRO workflow: reaction space and initial sampling, initial experiments, and the active learning optimization loop" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  AMLRO in three steps: define the reaction space and generate initial samples (random, Latin hypercube, or Sobol), run initial experiments, then iterate the active learning loop of training, prediction, selection, and retraining.
</div>

#### AMLRO GUI: no-code optimization for bench chemists

The **AMLRO GUI** is a desktop web app that lets a bench chemist run a full active learning optimization campaign without writing any Python. It wraps the AMLRO library behind a Flask JSON API with a React/TypeScript interface.

<div class="row justify-content-sm-center">
  <div class="col-sm-9 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/amlro_gui.png" title="AMLRO GUI" alt="AMLRO GUI start screen with links to documentation, GitHub, and a Colab notebook, a form to start a new experiment, and a list of saved experiments to resume" class="img-fluid rounded z-depth-1" zoomable=true avoid_scaling=true %}
  </div>
</div>
<div class="caption">
  The AMLRO GUI start screen: start a new experiment from a new reaction scope or existing data, or resume a saved optimization campaign.
</div>

- **Define the reaction scope:** set the reaction parameters and their ranges, or start from existing experimental data.
- **Collect initial training data:** generate and record the first set of experiments.
- **Iterate with the model:** review AI-suggested reaction conditions, record the measured results, and let the model retrain each cycle.
- **Pick up where you left off:** experiments are saved to disk, so a campaign can be paused and resumed at any time.

Code: [dulithaprasanna/amlro_GUI](https://github.com/dulithaprasanna/amlro_GUI) · Software DOI: [10.11578/dc.20260928.1](https://doi.org/10.11578/dc.20260928.1) (DOE CODE, MIT license)

#### Tech stack

Python · active learning · surrogate modeling · SHAP · Flask · React/TypeScript
