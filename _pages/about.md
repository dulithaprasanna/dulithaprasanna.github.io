---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Research Associate · <a href='https://www.med.unc.edu/pharm/' target='_blank'>Department of Pharmacology</a>, University of North Carolina at Chapel Hill

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

I am a Postdoctoral Research Associate in the [**Miao Lab**](https://www.med.unc.edu/pharm/miaolab/), Department of Pharmacology at the **University of North Carolina at Chapel Hill**. I earned my Ph.D. in Physical Chemistry from **Iowa State University** and **Ames National Laboratory** in April 2026, advised by Prof. Theresa L. Windus and Prof. Davit Potoyan.

My research centers on **data-efficient discovery**: finding high-performing molecules, reaction conditions, and protein sequences while running as few costly experiments or simulations as possible. To do this, I pair exploration of chemical and sequence space with **active machine learning** and **biophysics**. Surrogate models pick the next most informative experiment, and physics-based simulation explains why the best candidates work.

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
