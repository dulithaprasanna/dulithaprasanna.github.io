---
layout: page
title: CyRxnOpt
description: A generalized reaction optimization interface for autonomous laboratories and benchmarking (Digital Discovery, 2026).
img: assets/img/projects/cyrxnopt.svg # placeholder: replace with a figure
importance: 5
category: work
github: https://github.com/RxnRover/CyRxnOpt
related_publications: false
---

**CyRxnOpt** gives chemists and developers one Python interface to many reaction optimization algorithms. Many state-of-the-art optimizers are open source, but each has its own installation steps and interface, which makes them hard to compare or plug into automated platforms. CyRxnOpt standardizes that process.

Paper: [CyRxnOpt: generalized reaction optimization interface for autonomous laboratories and benchmarking](https://doi.org/10.1039/D6DD00180G), _Digital Discovery_ (2026), open access, co-first author · Code: [RxnRover/CyRxnOpt](https://github.com/RxnRover/CyRxnOpt) · [Documentation](https://rxnrover.github.io/CyRxnOpt/)

#### Key features

- **Four standard phases:** every optimizer runs through the same steps: installation, configuration, training, and prediction.
- **Easy switching and benchmarking:** swap algorithms without rewriting your workflow, and compare them on equal terms, on both analytical test functions and experimental datasets.
- **Built for automation:** use it from a standalone command-line interface or integrate it into self-optimizing software. It is integrated into the Rxn Rover automation ecosystem.
- **Recognition:** CY2025 Ames National Laboratory Innovation Incentive Award for CyRxnOpt development.

#### Tech stack

Python · object-oriented design · optimization algorithms · CLI · reaction automation
