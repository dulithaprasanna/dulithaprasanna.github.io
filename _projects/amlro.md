---
layout: page
title: AMLRO
description: Active Machine Learning Reaction Optimizer for single- and multi-objective, closed- and open-loop reaction optimization with explainable AI.
img: assets/img/projects/amlro.svg # placeholder: replace with a screenshot or figure
importance: 1
category: work
github: https://github.com/RxnRover/amlro
related_publications: false
---

**AMLRO** (Active Machine Learning Reaction Optimizer) finds high-yielding reaction conditions using far fewer experiments than grid or one-factor-at-a-time screening. A surrogate model learns from each round of results and proposes the next most informative set of conditions.

#### Key features

- **Closed-loop optimization:** runs autonomously with automated or high-throughput experimental platforms.
- **Open-loop optimization:** keeps a chemist in the loop through a web GUI (Flask/Streamlit); the chemist reviews each suggestion before running it.
- **Single- and multi-objective:** optimize yield alone, or trade off competing goals such as yield and selectivity.
- **Explainable AI:** SHAP analysis shows which variables (catalyst, solvent, temperature, time, …) drive reaction performance, so the model's recommendations are interpretable, not a black box.
- **Applications:** aldehyde-selective **Wacker oxidation** (multi-objective, 7-dimensional parameter space), Paal-Knorr flow synthesis, and closed-loop continuous flow synthesis of diglycolamides.

Code: [RxnRover/amlro](https://github.com/RxnRover/amlro) · Software DOI: [10.11578/dc.20260205.1](https://doi.org/10.11578/dc.20260205.1)

#### Tech stack

Python · active learning · surrogate modeling · SHAP · Flask / Streamlit
