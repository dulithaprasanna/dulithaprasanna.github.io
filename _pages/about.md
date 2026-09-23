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
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

I am a Postdoctoral Research Associate in the **Miao Lab**, Department of Pharmacology at the **University of North Carolina at Chapel Hill**. I earned my Ph.D. in Physical Chemistry from **Iowa State University** and **Ames National Laboratory** in April 2026, advised by Prof. Theresa L. Windus and Prof. Davit Potoyan.

My research centers on **data-efficient discovery**: finding high-performing molecules, reaction conditions, and protein sequences while running as few costly experiments or simulations as possible. To do this, I pair exploration of chemical and sequence space with **active machine learning** and **biophysics**. Surrogate models pick the next most informative experiment, and physics-based simulation explains why the best candidates work.

<div class="concept-figure text-center my-4 p-4">
  <!-- Replace the two <p> lines below with your figure: save it as assets/img/data_efficient_discovery.png
       and use al-folio's figure.liquid include (see _projects/1_project.md for an example). -->
  <p class="mb-1 font-weight-bold">Concept figure: Data-Efficient Discovery</p>
  <p class="mb-0 small">Design space &rarr; surrogate model &rarr; acquisition &rarr; experiment / simulation &rarr; model update</p>
</div>
<style>
  .concept-figure {
    border: 2px dashed var(--global-divider-color);
    border-radius: 0.5rem;
    color: var(--global-text-color-light);
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

#### Research directions

- **Active learning for reaction optimization.** I develop [AMLRO]({% link _projects/amlro.md %}), an Active Machine Learning Reaction Optimizer for closed- and open-loop optimization of reaction conditions. It uses explainable AI (SHAP) to show which variables drive performance, and it has been applied to Wacker oxidation.
- **Generative protein design.** I develop [ALSEBO]({% link _projects/alsebo.md %}), an Active Sequence Exploration Bayesian Optimizer. It combines variational autoencoders with Bayesian optimization to search protein sequence space efficiently, with avGFP as a model system.
- **Biophysics of extremophilic enzymes.** I use long-timescale molecular dynamics (OpenMM, AmberTools) to study how enzymes from extreme environments adapt to temperature, linking sequence and structure to dynamics and stability.

**Tools I use:** Python, Flask, Streamlit, Bayesian optimization, ORCA, xTB, OpenMM, and AmberTools.
