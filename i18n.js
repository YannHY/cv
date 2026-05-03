"use strict";

// =====================================================
// SYSTÈME DE TRADUCTION (i18n)
// =====================================================

const translations = {
  fr: {
    // Navigation
    navProfile: "Profil",
    navExperience: "Parcours",
    navSkills: "Compétences",
    navPublications: "Publications",
    navContact: "Contact",

    // Hero
    heroGreeting: "Bonjour, je suis",
    heroTitle: "Yann Houry",
    heroSubtitle: "Responsable de l'Innovation Pédagogique",
    heroLocation: "Institut Florimont, Genève",
    heroCtaContact: "Me contacter",
    heroCtaMore: "En savoir plus",

    // Expertise
    expertiseTech: "Technologie",
    expertiseTechDesc: "IA & EdTech",
    expertiseTeaching: "Enseignement",
    expertiseTeachingDesc: "+20 ans d'expérience",
    expertisePedagogy: "Pédagogie",
    expertisePedagogyDesc: "Learning Design",
    expertiseInnovation: "Innovation",
    expertiseInnovationDesc: "Transformation numérique",
    expertisePublishing: "Publication",
    expertisePublishingDesc: "Manuels & essais",
    expertisePodcast: "Podcasts",
    expertisePodcastDesc: "Réflexions sur la lecture",

    // Modales Expertise
    modalTechTitle: "Technologie",
    modalTechText: "La technologie est, comme le disait Steve Jobs, un vélo pour l'esprit. Elle bouleverse le système éducatif. C'est encore plus vrai de l'intelligence artificielle.",
    modalTechLink: "Lire mon essai <em>Un Centaure à l'école</em>",

    modalTeachingTitle: "Enseignement",
    modalTeachingText: "J'enseigne depuis plus de vingt ans à tout type de public en tout lieu (France, Nouvelle-Calédonie, Royaume-Uni, Hong Kong, Suisse...).",
    modalTeachingLink: "Voyez tous les cours que j'ai mis en ligne",

    modalPedagogyTitle: "Pédagogie",
    modalPedagogyText: "L'enseignement ne consiste pas uniquement à penser au contenu, mais aussi à la manière dont l'élève va se l'approprier.",
    modalPedagogyLink: "Comprendre comment le « learning design » change l'enseignement",

    modalInnovationTitle: "Innovation",
    modalInnovationText: "Le monde change et l'enseignement avec lui. C'est pourquoi il est crucial de lire ce que dit la recherche, de lire et apprendre le plus possible.",
    modalInnovationLink: "Voir une présentation sur ce que signifie enseigner aujourd'hui",

    modalPublishingTitle: "Publication",
    modalPublishingText: "Les technologies web permettent aux enseignants de communiquer avec leurs homologues de par le monde dans cette salle des professeurs mondiale qu'est le web, et de partager ses productions.",
    modalPublishingLink: "Voir tous les manuels et livres que j'ai publiés",

    modalPodcastTitle: "Podcasts",
    modalPodcastText: "Des conversations et réflexions sur la lecture quand elle se pratique sur un écran. Quels changements\u00A0? Quels avantages\u00A0?",
    modalPodcastLink: "Écouter les podcasts",

    // About
    aboutTag: "À propos",
    aboutTitle: "Profil",
    aboutLead: "Enseignant passionné par les questions liées à l'éducation, à la pédagogie et au développement du numérique.",
    aboutText1: "Actuellement responsable de l'innovation à l'institut Florimont de Genève, je suis également auteur du site web <a href=\"https://www.ralentirtravaux.com\" class=\"link\">Ralentir travaux</a>, de manuels numériques et d'un essai intitulé <em>Un Centaure à l'école</em>.",
    aboutText2: "Mon parcours m'a amené à enseigner et former dans de nombreux pays : France, Nouvelle-Calédonie, Royaume-Uni, Hong Kong et Suisse.",
    statYears: "Années d'enseignement",
    statTrainings: "Formations dispensées",
    statBooks: "Livres publiés",
    statCountries: "Pays",

    // Experience
    experienceTag: "Parcours",
    experienceTitle: "Expérience Professionnelle",
    exp1Date: "2024 - Présent",
    exp1Title: "Responsable de l'Innovation Pédagogique Numérique",
    exp1Company: "Institut Florimont",
    exp1Location: "Genève",
    exp2Date: "2022 - 2024",
    exp2Title: "Directeur de l'Innovation Pédagogique & Technologique",
    exp2Company: "Lycée Français International",
    exp2Location: "Hong Kong",
    exp3Date: "2020 - 2022",
    exp3Title: "Directeur de l'Innovation et de la Recherche Académique",
    exp3Company: "Lycée Winston-Churchill",
    exp3Location: "Londres",
    exp4Date: "2017 - 2022",
    exp4Title: "Professeur de Lettres",
    exp4Company: "Lycée Winston-Churchill, Londres",
    exp5Date: "2015 - 2017",
    exp5Title: "Professeur et Référent Numérique",
    exp5Company: "Collège de Labrit, France",
    exp6Date: "2006 - 2015",
    exp6Title: "Professeur de Lettres Modernes",
    exp6Company: "Collège Gaston Bachelard, Bar-sur-Aube",

    // Skills
    skillsTag: "Compétences",
    skillsTitle: "Certifications & Formation",
    skillCatAcademic: "Formation Académique",
    skillMaitrise: "Maîtrise de Lettres Modernes",
    skillMaitriseYear: "1995",
    skillCapes: "CAPES de Lettres Modernes",
    skillCapesYear: "1998",
    skillCatApple: "Certifications Apple",
    skillAppleTrainer: "Apple Education Trainers",
    skillAppleTrainerYear: "2013",
    skillAppleTeacher: "Apple Teacher",
    skillAppleTeacherYear: "2021",
    skillCatGoogle: "Certifications Google",
    skillGoogle1: "Google Certified Educator Level 1",
    skillGoogle1Year: "2023",
    skillGoogle2: "Google Certified Educator Level 2",
    skillGoogle2Year: "2023",
    skillGoogleTrainer: "Google for Education Certified Trainer",
    skillGoogleTrainerYear: "2023",
    skillCatOther: "Autres Certifications",
    skillCommonSense: "Common Sense Educator",
    skillCommonSenseYear: "2022",
    skillHtmlCss: "HTML and CSS (Udemy)",
    skillHtmlCssYear: "2021",

    // Conferences
    conferencesTag: "Interventions",
    conferencesTitle: "Conférences & Médias",
    confMoreBtn: "Voir toutes les interventions",
    confLessBtn: "Masquer",

    // Publications
    publicationsTag: "Écrits",
    publicationsTitle: "Publications récentes",
    pubCentaure: "Un Centaure à l'école",
    pubCentaureYear: "2016",
    pubCentaureDesc: "Essai sur l'intégration du numérique dans l'éducation",
    pubItineraire: "Itinéraire d'un lecteur gâté",
    pubItineraireYear: "2024",
    pubItineraireDesc: "On dit que le papier présente un avantage irréfragable par rapport aux écrans, qu'avec le papier, la concentration est meilleure, qu'on retient mieux. Mon expérience de lecteur va à l'encontre de tout cela.",
    pubGrammaire: "Manuel de grammaire",
    pubGrammaireYear: "2015",
    pubGrammaireDesc: "Leçons détaillées suivies d'exercices et évaluations.",
    pubLitterature: "Manuel de littérature",
    pubLitteratureYear: "2015",
    pubLitteratureDesc: "Les fables, la Bible, L'Iliade et L'Odyssée...",
    pubDictees: "24 dictées",
    pubDicteesYear: "2018",
    pubDicteesDesc: "Dictées différenciées enregistrées",
    pubNote: "Disponibles sur",

    // Contact
    contactTag: "Contact",
    contactTitle: "Travaillons ensemble",
    contactText: "Vous souhaitez organiser une formation, une conférence, ou simplement échanger sur l'innovation pédagogique\u00A0?",
    contactAddress: "Institut Florimont, Genève, Suisse",
    formName: "Nom",
    formEmail: "Email",
    formSubject: "Objet",
    formMessage: "Message",
    formSend: "Envoyer",

    // Footer
    footerRights: "Tous droits réservés."
  },

  en: {
    // Navigation
    navProfile: "Profile",
    navExperience: "Experience",
    navSkills: "Skills",
    navPublications: "Publications",
    navContact: "Contact",

    // Hero
    heroGreeting: "Hello, I'm",
    heroTitle: "Yann Houry",
    heroSubtitle: "Head of Pedagogical Innovation",
    heroLocation: "Florimont Institute, Geneva",
    heroCtaContact: "Contact me",
    heroCtaMore: "Learn more",

    // Expertise
    expertiseTech: "Technology",
    expertiseTechDesc: "AI & EdTech",
    expertiseTeaching: "Teaching",
    expertiseTeachingDesc: "20+ years experience",
    expertisePedagogy: "Pedagogy",
    expertisePedagogyDesc: "Learning Design",
    expertiseInnovation: "Innovation",
    expertiseInnovationDesc: "Digital transformation",
    expertisePublishing: "Publishing",
    expertisePublishingDesc: "Textbooks & essays",
    expertisePodcast: "Podcasts",
    expertisePodcastDesc: "Reflections on reading",

    // Expertise Modals
    modalTechTitle: "Technology",
    modalTechText: "Technology, as Steve Jobs said, is a bicycle for the mind. It is transforming the educational system. This is even more true of artificial intelligence.",
    modalTechLink: "Read my essay <em>A Centaur at School</em>",

    modalTeachingTitle: "Teaching",
    modalTeachingText: "I have been teaching for over twenty years to all types of audiences in various locations (France, New Caledonia, United Kingdom, Hong Kong, Switzerland...).",
    modalTeachingLink: "See all the courses I have published online",

    modalPedagogyTitle: "Pedagogy",
    modalPedagogyText: "Teaching is not only about thinking about the content, but also about how the student will appropriate it.",
    modalPedagogyLink: "Understand how learning design is changing teaching",

    modalInnovationTitle: "Innovation",
    modalInnovationText: "The world is changing and teaching with it. That is why it is crucial to read what research says, to read and learn as much as possible.",
    modalInnovationLink: "See a presentation on what it means to teach today",

    modalPublishingTitle: "Publishing",
    modalPublishingText: "Web technologies allow teachers to communicate with their counterparts from around the world in this global staff room that is the web, and to share their productions.",
    modalPublishingLink: "See all the textbooks and books I have published",

    modalPodcastTitle: "Podcasts",
    modalPodcastText: "Conversations and reflections on reading when it takes place on a screen. What changes? What advantages?",
    modalPodcastLink: "Listen to podcasts",

    // About
    aboutTag: "About",
    aboutTitle: "Profile",
    aboutLead: "Teacher passionate about education, pedagogy and digital development.",
    aboutText1: "Currently Head of Innovation at the Florimont Institute in Geneva, I am also the author of the website <a href=\"https://www.ralentirtravaux.com\" class=\"link\">Ralentir travaux</a>, digital textbooks and an essay entitled <em>A Centaur at School</em>.",
    aboutText2: "My career has taken me to teach and train in many countries: France, New Caledonia, United Kingdom, Hong Kong and Switzerland.",
    statYears: "Years of teaching",
    statTrainings: "Training sessions",
    statBooks: "Books published",
    statCountries: "Countries",

    // Experience
    experienceTag: "Career",
    experienceTitle: "Professional Experience",
    exp1Date: "2024 - Present",
    exp1Title: "Head of Digital Pedagogical Innovation",
    exp1Company: "Florimont Institute",
    exp1Location: "Geneva",
    exp2Date: "2022 - 2024",
    exp2Title: "Director of Educational Technology and Innovation",
    exp2Company: "French International School",
    exp2Location: "Hong Kong",
    exp3Date: "2020 - 2022",
    exp3Title: "Director of Innovation and Academic Research",
    exp3Company: "Winston-Churchill School",
    exp3Location: "London",
    exp4Date: "2017 - 2022",
    exp4Title: "French Teacher",
    exp4Company: "Winston-Churchill School, London",
    exp5Date: "2015 - 2017",
    exp5Title: "Teacher and ICT Coordinator",
    exp5Company: "Collège de Labrit, France",
    exp6Date: "2006 - 2015",
    exp6Title: "French Teacher",
    exp6Company: "Collège Gaston Bachelard, Bar-sur-Aube",

    // Skills
    skillsTag: "Skills",
    skillsTitle: "Certifications & Education",
    skillCatAcademic: "Academic Education",
    skillMaitrise: "Master's in Modern Literature",
    skillMaitriseYear: "1995",
    skillCapes: "CAPES in Modern Literature",
    skillCapesYear: "1998",
    skillCatApple: "Apple Certifications",
    skillAppleTrainer: "Apple Education Trainers",
    skillAppleTrainerYear: "2013",
    skillAppleTeacher: "Apple Teacher",
    skillAppleTeacherYear: "2021",
    skillCatGoogle: "Google Certifications",
    skillGoogle1: "Google Certified Educator Level 1",
    skillGoogle1Year: "2023",
    skillGoogle2: "Google Certified Educator Level 2",
    skillGoogle2Year: "2023",
    skillGoogleTrainer: "Google for Education Certified Trainer",
    skillGoogleTrainerYear: "2023",
    skillCatOther: "Other Certifications",
    skillCommonSense: "Common Sense Educator",
    skillCommonSenseYear: "2022",
    skillHtmlCss: "HTML and CSS (Udemy)",
    skillHtmlCssYear: "2021",

    // Conferences
    conferencesTag: "Speaking",
    conferencesTitle: "Conferences & Media",
    confMoreBtn: "View all presentations",
    confLessBtn: "Show less",

    // Publications
    publicationsTag: "Writings",
    publicationsTitle: "Recent Publications",
    pubCentaure: "A Centaur at School",
    pubCentaureYear: "2016",
    pubCentaureDesc: "Essay on integrating digital technology in education",
    pubItineraire: "Journey of a Spoiled Reader",
    pubItineraireYear: "2024",
    pubItineraireDesc: "It is said that paper has an undeniable advantage over screens, that with paper, concentration is better, that we remember better. My experience as a reader goes against all of this.",
    pubGrammaire: "Grammar Textbook",
    pubGrammaireYear: "2015",
    pubGrammaireDesc: "Detailed lessons followed by exercises and assessments.",
    pubLitterature: "Literature Textbook",
    pubLitteratureYear: "2015",
    pubLitteratureDesc: "Fables, the Bible, The Iliad and The Odyssey...",
    pubDictees: "24 Dictations",
    pubDicteesYear: "2018",
    pubDicteesDesc: "Recorded differentiated dictations",
    pubNote: "Available on",

    // Contact
    contactTag: "Contact",
    contactTitle: "Let's work together",
    contactText: "Would you like to organize a training session, a conference, or simply discuss pedagogical innovation?",
    contactAddress: "Florimont Institute, Geneva, Switzerland",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send",

    // Footer
    footerRights: "All rights reserved."
  }
};

// Langue actuelle
let currentLang = localStorage.getItem("cv-lang-v2") || "fr";

// Variables pour les éléments du sélecteur de langue
let langToggle, langDropdown, langOptions;

// Fonction de mise à jour de la langue
function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("cv-lang-v2", lang);

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;

  // Mettre à jour les options de langue (classe active)
  if (langOptions) {
    langOptions.forEach((option) => {
      if (option.dataset.lang === lang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  }

  // Mettre à jour tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Mettre à jour les placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Fermer le dropdown
function closeLangDropdown() {
  if (langDropdown && langToggle) {
    langDropdown.classList.remove("open");
    langToggle.setAttribute("aria-expanded", "false");
  }
}

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner les éléments du sélecteur de langue
  langToggle = document.querySelector(".btn-lang-toggle");
  langDropdown = document.querySelector(".lang-dropdown");
  langOptions = document.querySelectorAll(".lang-option");

  // Toggle du dropdown
  if (langToggle && langDropdown) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle("open");
      langToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Gestionnaires pour les options de langue
  if (langOptions) {
    langOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const lang = option.dataset.lang;
        updateLanguage(lang);
        closeLangDropdown();
      });
    });
  }

  // Fermer le dropdown en cliquant ailleurs
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-switcher")) {
      closeLangDropdown();
    }
  });

  // Fermer avec Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLangDropdown();
    }
  });

  // Appliquer la langue sauvegardée
  updateLanguage(currentLang);
});
