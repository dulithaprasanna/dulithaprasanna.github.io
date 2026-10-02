---
layout: page
title: Thermal Adaptation of Extremophilic Enzymes
description: Molecular dynamics, network analysis, and machine learning reveal how enzymes from extreme environments adapt to temperature.
img: assets/img/projects/extremophilic_enzymes.jpg
importance: 4
category: work
related_publications: false
---

Enzymes from organisms that live in extreme cold or heat keep working at temperatures where their ordinary counterparts fail. This Ph.D. project with [Prof. Davit Potoyan](https://www.chem.iastate.edu/people/davit-potoyan) at Iowa State University used **multi-temperature, all-atom molecular dynamics simulations** together with **bioinformatics, contact-network analysis, and unsupervised machine learning** to explain how sequence, structure, and dynamics are tuned for thermal adaptation.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/extremophilic_enzymes.jpg" title="Thermal adaptation of extremophilic enzymes" alt="Left: structural alignment and phylogeny of thermophilic, mesophilic, extreme thermophilic, and psychrophilic subtilisin-like serine proteases. Right: temperature- and ligand-induced contact networks and key residues in a cold-adapted beta-glucosidase." class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  <b>Left:</b> subtilisin-like serine proteases from psychrophilic (1SH7, 15 °C), mesophilic (1IC6, 37 °C), thermophilic (1THM, 50 °C), and extreme thermophilic (4DZT, 70 °C) organisms. <b>Right:</b> temperature-induced and ligand-induced contact networks in a cold-adapted β-glucosidase, highlighting network hubs, high-betweenness residues, and flexible, temperature-responsive regions.
</div>

#### Subtilisin-like serine proteases

- Compared co-evolved serine proteases adapted to temperatures from 15 °C to 70 °C to connect **sequence, structure, and dynamics** across the thermal range.
- Developed **temperature-sensitive contact analysis** to identify the interactions that strengthen or weaken with temperature and that distinguish cold- and heat-adapted enzymes.
- Published in [Biophysical Journal (2025)](https://doi.org/10.1016/j.bpj.2025.06.001).

#### Cold-adapted β-glucosidases

- Simulated a cold-adapted β-glucosidase (BglU) and a thermophilic counterpart (GlyTn) across multiple temperatures, analyzing flexibility (RMSF), compactness, solvent exposure, and non-covalent interactions.
- Used **unsupervised clustering** of contact frequencies and **network analysis** (weighted degree, betweenness centrality) to find thermo-sensing residues and contacts.
- Ran **protein–ligand simulations** to study ligand-induced low-temperature function and allosteric regulation.
- Presented at the Biophysical Society Annual Meeting ([2025 abstract](https://doi.org/10.1016/j.bpj.2024.11.1772)). See the posters on my [talks page]({{ '/talks/' | relative_url }}).

#### Tech stack

OpenMM · AmberTools · GROMACS · MDAnalysis · MDTraj · ProLIF · network analysis · unsupervised machine learning · PyMOL · Chimera
