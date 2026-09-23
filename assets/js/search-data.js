// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications, preprints, and software in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source software and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source software for active learning, reaction optimization, and protein design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download the PDF version using the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-alsebo",
          title: 'ALSEBO',
          description: "Active Learning Sequence Exploration via Bayesian Optimization. Coevolution-informed, sample-efficient generative protein design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alsebo/";
            },},{id: "projects-amlro",
          title: 'AMLRO',
          description: "Active Machine Learning Reaction Optimizer for single- and multi-objective, closed- and open-loop reaction optimization with explainable AI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amlro/";
            },},{id: "projects-cyrxnopt",
          title: 'CyRxnOpt',
          description: "A single Python interface to install, use, and benchmark many reaction optimization algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cyrxnopt/";
            },},{id: "projects-rna-targeted-drug-discovery",
          title: 'RNA-Targeted Drug Discovery',
          description: "GaMD enhanced sampling and AI-driven models for RNA drug discovery and virtual screening (current, Miao Lab).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rna_drug_discovery/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%75%6C%69%74%68%61%70%72%61%73%61%6E%6E%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dulithaprasanna", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=k65eEsEAAAAJ", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/rendercv/rendercv_output/Dulitha_Prasanna_Kulathunga_CV.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
