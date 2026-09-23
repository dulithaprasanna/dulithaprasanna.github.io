---
layout: about
title: about
permalink: /
subtitle: <b>Computational & Theoretical Chemist · Computational Biophysicist · Machine Learning for Molecular Discovery</b><br>Postdoctoral Research Associate · <a href='https://www.med.unc.edu/pharm/miaolab/' target='_blank'>Miao Lab</a>, <a href='https://www.med.unc.edu/pharm/' target='_blank'>Department of Pharmacology</a>, University of North Carolina at Chapel Hill

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Department of Pharmacology</p>
    <p>University of North Carolina at Chapel Hill</p>
    <p>Chapel Hill, NC</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

I am a **computational and theoretical chemist and biophysicist** working at the interface of molecular simulation, machine learning, and scientific discovery. I am currently a Postdoctoral Research Associate in the [**Miao Lab**](https://www.med.unc.edu/pharm/miaolab/), led by [Prof. Yinglong Miao](https://www.med.unc.edu/pharm/miaolab/pi/), in the Department of Pharmacology at the **University of North Carolina at Chapel Hill**. I earned my Ph.D. in Physical Chemistry from **Iowa State University and Ames National Laboratory** in April 2026, advised by Prof. Theresa L. Windus and Prof. Davit Potoyan.

My research focuses on understanding and designing **complex chemical and biological systems across multiple scales**, from molecular interactions and biomolecular dynamics to chemical reactions and molecular design. I combine **physics-based computational methods (molecular dynamics, quantum chemistry, and enhanced-sampling simulations) with machine learning and data-driven optimization** to explore chemical and biological spaces efficiently.

A central theme of my research is **data-efficient scientific discovery**: how can we identify promising molecules, reaction conditions, protein sequences, or molecular interactions while minimizing the number of costly experiments or simulations required? I approach this problem by combining **molecular simulation, statistical learning, active machine learning, and biophysical analysis**. Machine learning models guide exploration toward informative regions of chemical and biological space, while physics-based simulations provide mechanistic insight into the molecular interactions and dynamics underlying observed behavior.

My research therefore spans several interconnected directions, including **computational chemistry, molecular and biomolecular simulation, protein biophysics, reaction optimization, protein design, and AI-driven molecular discovery**. Across these areas, my goal is to develop computational approaches that are not only predictive, but also **mechanistically informative and experimentally useful**.

<div class="row align-items-center mt-4">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/amlro_overview.jpg" title="AMLRO" alt="AMLRO active learning cycle for reaction optimization" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/alsebo_pipeline.jpg" title="ALSEBO" alt="ALSEBO active learning loop for protein design" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption mb-4">
  Data-efficient discovery in two design spaces. <b>Left:</b> <a href="{% link _projects/amlro.md %}">AMLRO</a> closes the loop between experiments and machine learning to optimize chemical reactions. <b>Right:</b> <a href="{% link _projects/alsebo.md %}">ALSEBO</a> explores a generative protein landscape with coevolution-informed Bayesian optimization.
</div>

#### Research directions

- **Enhanced sampling and AI for RNA-targeted drug discovery (current, Miao Lab).** I run Gaussian accelerated molecular dynamics (GaMD) enhanced-sampling simulations and develop AI-driven models for RNA drug discovery and virtual screening, combining physics-based sampling with machine learning to find and rank small molecules that bind RNA targets. See [project]({% link _projects/rna_drug_discovery.md %}).
- **Active learning for reaction optimization.** I develop [AMLRO]({% link _projects/amlro.md %}), an Active Machine Learning Reaction Optimizer for closed- and open-loop optimization of reaction conditions. It uses explainable AI (SHAP) to show which variables drive performance, and it has been applied to Wacker oxidation.
- **Generative protein design.** I develop [ALSEBO]({% link _projects/alsebo.md %}) (Active Learning Sequence Exploration via Bayesian Optimization), which couples a generative latent sequence landscape with coevolution-informed Bayesian optimization to design proteins from very few measurements, with avGFP as a model system ([bioRxiv 2026](https://www.biorxiv.org/content/10.64898/2026.08.06.743295)).
- **Biophysics of extremophilic enzymes.** I use long-timescale molecular dynamics (OpenMM, AmberTools) to study how enzymes from extreme environments adapt to temperature, linking sequence and structure to dynamics and stability.

**Tools I use:** Python, PyTorch, Flask, Streamlit, Bayesian optimization, GaMD enhanced sampling, AMBER/AmberTools, OpenMM, ORCA, and xTB.
