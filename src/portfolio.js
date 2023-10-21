/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Portfolio",
  title: "ISMAIL Hosni",
  subTitle: emoji(
    "Développeur Full Stack ayant évolué vers un rôle de DevOps, avec une expertise antérieure en développement d'applications Web et logiciels utilisant PHP, JS, JAVA, ainsi que diverses bibliothèques et frameworks modernes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JEVlgRZWzA6F4rwe4T8tdGp_4m30rhKE/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
    
const socialMediaLinks = {
  github: "https://github.com/Hosni-Ismail",
  linkedin: "https://www.linkedin.com/in/hosni-ismail-807563195/",
  twitter: "https://twitter.com/hosn__i",
  gmail: "hosni.ismail27@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Téchnologie",
  subTitle: "JE ME FORME SANS CESSE POUR DÉCOUVRIR LES DERNIERS OUTILS ET TECHNOLOGIES QUI ME RENDENT MEILLEUR",
  skills: [
    emoji(
      "⚡ Compétences DevOps."
      ),
    emoji(
      " Automatisation des processus : Maîtrise des outils d'automatisation comme Ansible, Puppet, ou Chef pour optimiser le déploiement et la gestion des infrastructures."
      ),
      emoji(
      " Gestion des conteneurs : Connaissance approfondie de Docker et Kubernetes pour l'orchestration de conteneurs et la gestion de l'évolutivité."
      ),
      emoji(
      " Intégration continue et déploiement continu (CI/CD) : Expérience dans la mise en place de pipelines CI/CD avec des outils tels que Jenkins, Travis CI, ou GitLab CI pour assurer des mises à jour rapides et fiables des applications."
      ),
      emoji(
      " Surveillance et gestion des logs : Compétences pour surveiller les performances des systèmes, détecter les problèmes et gérer les journaux (logs) à l'aide d'outils comme Prometheus, ELK (Elasticsearch, Logstash, Kibana), ou Splunk."
      ),
      emoji(
      " Sécurité et conformité : Compréhension des pratiques de sécurité des applications et des systèmes, et la capacité à mettre en œuvre des mesures de sécurité et à maintenir la conformité avec les réglementations."
      ),
      emoji(
      " Collaboration et communication : Aptitude à travailler en étroite collaboration avec les équipes de développement et d'exploitation, en mettant l'accent sur la communication pour favoriser une culture DevOps collaborative."
      ),
      emoji(
      "⚡ Compétences Developpeur Full Stack "
      ),
      emoji(
      "Développement Front-end : Maîtrise des langages de programmation front-end tels que HTML, CSS, JavaScript, et des frameworks comme React, Angular, ou Vue.js."
      ),
  emoji(
      "Développement Back-end : Compétences en programmation back-end avec des langages comme PHP, Java, Python, ou Node.js, ainsi que la conception de bases de données avec SQL ou NoSQL."
      ),
    emoji(
      "Gestion de bases de données : Capacité à concevoir, maintenir et optimiser des bases de données, qu'elles soient relationnelles ou non, en utilisant des systèmes tels que MySQL, PostgreSQL, MongoDB, ou Cassandra."
      ),
      emoji(
      "Intégration de services tiers : Savoir intégrer des API et des services tiers pour enrichir les fonctionnalités de l'application."
      ),
      emoji(
      "Résolution de problèmes : Capacité à diagnostiquer et résoudre efficacement les problèmes techniques, à déboguer le code, et à améliorer les performances de l'application."
      ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PYTHON",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "POWERSHELL",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "GITHUB",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "FIGMA",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "lARAVEL",
      fontAwesomeClassname: "fab fa-laravel"
    },

    {
      skillName: "REACT NATIVE",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MYQSL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MONGO DB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "JENKINS",
      fontAwesomeClassname: "fab fa-jenkins"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Conservatoire National des  Arts et Métiers",
      logo: require("./assets/images/cnam.png"),
      subHeader: "Diplôme d'ingénieur, Informatique",
      duration: "September 2023 - Juin 2026",
      desc: "293 Rue Saint Martin, 75003 Paris",
    },
    {
      schoolName: "Conservatoire National des  Arts et Métiers",
      logo: require("./assets/images/cnam.png"),
      subHeader: "Licence Informatique Sciences, Technologies, Santé : Informatique",
      duration: "September 2022 - Juin 2023",
      desc: "61 Rue du Landy, 93210 La Plaine Saint-Denis",
    },
    {
      schoolName: "Lycée Lamartine",
      logo: require("./assets/images/lycee_lamartine_logo.jpg"),
      subHeader: "BTS SIO Option B : Solutions Logicielles et Applications Métiers (SLAM)",
      duration: "September 2020 - Juin 2022",
      desc: "136 Rte de Mitry, 93600 Aulnay-sous-Bois",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Gestion de projet",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Ingénieur DevOps - Alternance",
      company: "Société Générale",
      companylogo: require("./assets/images/a9467edc81901cd111a5f83e768a2ce9.jpg"),
      date: "Septembre 2023 – Aujourd'hui",
      desc: "Participation à la prise de décision sur les choix technologiques, gestion des infrastructures d'hébergement et mise en place de stratégies d'automatisation avancées. Engagement dans la garantie de la sécurité des solutions et la conformité aux normes, tout en favorisant une culture agile et collaborative.",
      descBullets: [
        "Migration",
        "Intégration continue et livraison continue (CI/CD)",
        "..."
      ]
    },
    {
      role: "Développeur Full Stack - Alternance",
      company: "IP Twins",
      companylogo: require("./assets/images/replicate-prediction-rvqyi7rb4d3wiqqz4c53xqrjny.png"),
      date: "Septembre 2022 – Septembre 2023",
      desc: "Conception, développement et déploiement d’une infrastructure applicative en langage web PHP avancée sous une architecture MVC.",
      descBullets: [
        "Gestion de noms de domaine",
        "Progression en temps réel",
        "Paiement",
        "..."
      ]
    },
    {
      role: "Développeur Full Stack - Stage",
      company: "Expit Consulting",
      companylogo: require("./assets/images/toedrep.png"),
      date: "Janvier 2022 – Mars 2022",
      desc: "Conception, développement et déploiement d’une infrastructure applicative en langage web Javascript et Laravel sous une architecture MVC.",
      descBullets: [
        "Gestion de Chantier",
        "Progression en temps réel",
        "Paiement",
        "..."
      ]
    },
    {
      role: "Développeur Full Stack - Stage",
      company: "Quovadev",
      companylogo: require("./assets/images/logo.png"),
      date: "Mai 2021 – Juillet 2021",
      desc: "Conception, développement et déploiement d’une infrastructure applicative en langage web Javascript et PHP7.",
      descBullets: [
        "Petites annonces",
        "Mise en relation sécurisée entre les particuliers",
        "Recherches précises",
        "..."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projet professionnel",
  projects: [
    {
      image: require("./assets/images/replicate-prediction-rvqyi7rb4d3wiqqz4c53xqrjny.png"),
      projectName: "IPTWINS",
      projectDesc: "Un site web de gestion de portefeuilles clients et de cybersurveillance pour les noms de domaines.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://iptwins.com/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lecoupdejus.jfif"),
      projectName: "Le Coup de Jus",
      projectDesc: "Un site Web gratuit de petites annonces pour les engins de mobilité électrique.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://lecoupdejusfr.000webhostapp.com/"
        },
        {
          name: "Documentation",
          url: "https://drive.google.com/file/d/1g3G1oExB_IkL9GnuRvL8E7O_picJkMc_/view?usp=share_link"
        },
        {
          name: "Projet sur GitHub",
          url: "https://github.com/Hosniis/STAGE_PROJET_lecoupdejus"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/toed.png"),
      projectName: "Toed Group",
      projectDesc: "Un site Web assurant la gestion de chantier.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://toedgroup.go.yj.fr/"
        },
        {
          name: "Documentation",
          url: "https://drive.google.com/file/d/1A--8WPQl9ELY90TLL3_y5-S2Y3fxhBIu/view?usp=sharing"
        },
        {
          name: "Projet sur GitHub",
          url: "https://github.com/Hosni-Ismail/ToedGroup_Website"
        },
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certification"),
  achievementsCards: [

    {
      title: "Certification Toeic",
      subtitle: "Certification des compétences en anglais",
      image: require("./assets/images/reptoeic.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://www.etsglobal.org/fr/en/digital-score-report/A8ADE934896FB3DDDA20248E15A850C68FADD62E1C421CB47E59B998630079A2ZXN4cUZYdXgyQmlFTUlWTjk2OTNNbkdOTlRhS1NTTWUzazBtaFhmeWVOL1g0dVVW"}
      ]
    },
    {
      title: "Certification SEO Google",
      subtitle: "Certification des principes fondamentaux du marketing numérique",
      image: require("./assets/images/google.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1eeKEB60FMEc3uahCkTKf1wLfVqEB09ai/view?usp=share_link"}
      ]
    },
    {
      title: "Attestation du MOOC SECNUM ACADEMIE",
      subtitle:
        "Certification concernant les principes clés de la cybersurité",
      image: require("./assets/images/anssi-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1WxibEkVcDWq8MZqLDrjAxNBcPz3MdEg4/view?usp=share_link"
        }
      ]
    },
    {
      
      title: "Attestation de L'ATELIER RGPD",
      subtitle:
        "Certification concernant les principes clés de la mise en conformité avec le RGPD",
      image: require("./assets/images/repcnil.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1oxBpgvxJFvrD2A93RNfpJ5t4ZkmwuiQL/view?usp=share_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Veille technologique",
  subtitle:
    "LE SUJET QUE J’AI CHOISI POUR MA VEILLE EST LA CYBERSÉCURITÉ ET NOTAMMENT LES ATTAQUES INFORMATIQUES DE DÉFIGURATION.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Compétence professionnel",
  subtitle: emoji(
    "VOICI LES COMPÉTENCES QUE J'AI SU DÉVELOPPER ET METTRE EN OEUVRE DURANT LA RÉALISATION DE PROJETS PROFESSIONNELS"
  ),

  talks: [
    {
      
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  number: "+33767957594",
  email_address: "hosni.ismail27@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hosn__i", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
