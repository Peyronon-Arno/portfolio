export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",

  // Could be fr or en
  defaultLang: "fr",

  // Header options
  headerTitle: "Arno Peyronon",
  hideSkills: false,
  hideExperience: false,
  hideProjects: false,

  // Footer content
  email: "arno.peyronon@gmail.com",
  phone: "+33 7 87 23 06 11",
  footerMedias: [
    {
      icon: "fa-github",
      tooltip: "Github",
      link: "https://github.com/Peyronon-Arno",
    },
    {
      icon: "fa-linkedin",
      tooltip: "Linkedin",
      link: "",
    },
    {
      icon: "fa-twitter",
      tooltip: "Twitter",
      link: "",
    },
    {
      icon: "fa-facebook",
      tooltip: "Facebook",
      link: "",
    },
  ],

  // Home
  homeContent: `
  <p>Je m'appelle Arno Peyronon. Je suis étudiant en Master 1 Expert en Développement Web à Lyon.</p>
  <p>Durant mes études, j'ai concrétisé des projets allant de la création d'une Intelligence Artificielle à la réalisation de site web.</p>
  <p>Étant curieux et investi de nature, je suis un étudiant souhaitant explorer de nombreux domaines dans l'informatique en général.</p>
  <p>En dehors de mes études, je développe une application mobile qui devra être disponible sur Android et IOS pour un chorégraphe professionnel.</p>
  <p>Je développe également un site vitrine pour une photographe professionnelle en utilisant les technologies simples du web.</p>
`,

  // Projects
  projects: [
    {
      name: "Dealabs",
      description:
        "Conception et création d'un site reprenant le concept de Dealabs afin de découvrir le framework Symfony",
      link: "https://github.com/Peyronon-Arno/Dealabs",
      imgUrl: "../../assets/images/dealabs.PNG",
      icons: [
        { name: "fa-symfony", tooltip: "Symfony" },
        { name: "fa-docker", tooltip: "Docker" },
      ],
      longDescription:
        "Le project a été réalisé en binôme. L'objectif est de prendre en mai le framework Symfony en réalisant avec une grille de critères, le site Dealabs au mieux possible. Le site doit être fonctionnel et doit respecter les critères de qualité et de performance.",
    },
    {
      name: "Détection Object IA",
      description:
        "Création d'une Intelligence Artificielle réalisée en équipe de 5 étudiants permettant de classer les objets visibles sur une image en les séparant en trois catégories : Humains / Voiture / Autres",
      link: "https://project2.com",
      imgUrl: "../../assets/images/detection.png",
      icons: [{ name: "fa-python", tooltip: "Python" }],
      longDescription:
        "Le projet à été réalisé en équipe de 4. L'bojectif était de faire des recherches afin de comprendre le fonctionnement d'un IA, des réseaux de neuronnes, l'entrainement d'une IA. Pour cela nous avons décider de faire de la détection d'object (voiture / vélo / camion). Ce fût une expérience très enrechissante, nous initiant au language Python",
    },
    {
      name: "AnimaApp",
      description:
        "Réalisation d'une application utilisant du React Native. Cette application a pour objectif d'être utilisée pour un parc animalier afin de répertorier l'ensemble des animaux du zoo.",
      link: "https://github.com/Peyronon-Arno/AnimApp",
      imgUrl: "../../assets/images/animapp.jpg",
      icons: [
        { name: "fa-java", tooltip: "Java" },
        { name: "fa-react", tooltip: "React" },
      ],
      longDescription:
        "Le projet a été réalisé en binôme. L'objectif est de prendre en main le framework React Native en réalisant une application mobile. De plus, un server en Quarkus devait être réalisé pour gérer les données de l'application en lien avec une base de données en NOSQL avec mongoDB.",
    },
    {
      name: "Minecraft 2D Android",
      description:
        "Conception et réalisation d'une application mobile reprenant les bases du jeu Minecraft",
      link: "https://github.com/Peyronon-Arno/Minecraft-2D-Android",
      imgUrl: "../../assets/images/minecraft.jpg",
      icons: [
        { name: "fa-java", tooltip: "Java" },
        { name: "fa-android", tooltip: "Android" },
      ],
      longDescription:
        "Le projet a été réalisé en binôme. L'objectif est de prendre en main le framework Android Studio en réalisant une application mobile. L'application devait reprendre les bases du jeu Minecraft en 2D. Le but était de créer un jeu fonctionnel et de qualité.",
    },
  ],

  // Experiences
  experiences: [
    {
      title: "Assistant danseur",
      company: "IDC (Instudio Dance Community)",
      date: "2016 - 2020",
      description: "Assistant danseur dans une école de danse",
      location: "France, Monistrol-sur-Loire",
    },
    {
      title: "Danseur bénévole",
      company: "Val Grangeant",
      date: "2018 - 2020",
      description:
        "Danseur bénévole dans une association réalisant des spectacles de noël",
      location: "France, Saint-Étienne",
    },
    {
      title: "Animateur sportif et initiateur au hip-hop",
      company: "VSD (Vacances Sports et Découvertes)",
      date: "Juillet 2018",
      description: "Animateur sportif et initiateur au hip-hop",
      location: "France, Monistrol-sur-Loire",
    },
    {
      title: "Conducteur de ligne de plasturgie",
      company: "Barbier",
      date: "Juillet-Août 2022",
      description:
        "Conduite de ligne de production dans une usine de plasturgie en intérimaire",
      location: "France, Grazac",
    },
    {
      title: "Développeur Fullstack (Stage)",
      company: "Astree Software",
      date: "04 Avril 2022 - 04 Juin 2022",
      description:
        "Ajoute de fonctionnalités, correction de bugs d'un logiciel MES (Manufacturing Execution System)",
      location: "France, Saint-Jean-Bonnefonds",
    },
    {
      title: "Développeur Fullstack (Alternance)",
      company: "Astree Software",
      date: "04 Juillet 2022 - Maintenant",
      description:
        "Ajoute de fonctionnalités, correction de bugs d'un logiciel MES (Manufacturing Execution System)",
      location: "France, Saint-Jean-Bonnefonds",
    },
  ],

  // skills
  softSkills: [
    {
      name: "Ponctuel",
      level: 50,
      description:
        "Ponctuel - L'importance de la ponctualité ne peut être surestimée. Pour moi, être à l'heure est une marque de respect envers les autres et une démonstration de professionnalisme.",
    },
    {
      name: "Curieux",
      level: 50,
      description:
        "Curieux - J'ai une soif inextinguible de connaissances et j'aime constamment me plonger dans de nouveaux sujets. Je suis toujours à la recherche de nouvelles technologies et de nouvelles approches pour améliorer mes compétences et ma compréhension.",
    },
    {
      name: "Rigoureux",
      level: 50,
      description:
        "Rigoureux - Pour moi, la rigueur est synonyme de qualité. Je m'efforce toujours de produire un code propre et bien organisé, en m'assurant que chaque détail est pris en compte. Je ne fais pas les choses à moitié et je m'efforce toujours de donner le meilleur de moi-même.",
    },
  ],

  technicalSkills: [
    {
      name: "Angular",
      icon: "angular",
      level: 50,
      description:
        "Angular - Utilisé à la fois pour mes projets personnels et dans l'environnement professionnel. Maîtrise des concepts de composants, de services, de routage, et plus encore.",
    },
    {
      name: "Java",
      icon: "java",
      level: 50,
      description:
        "Java - Acquis une solide compréhension de Java pendant mes études, avec une expérience pratique dans le développement d'applications utilisant des frameworks tels que Spring Boot et Play Framework en environnement professionnel.",
    },
    {
      name: "React",
      icon: "react",
      level: 50,
      description:
        "React - Expérience dans l'utilisation de React acquise pendant mes cours. Familiarisé avec la création de composants, la gestion d'état, le routage, et la manipulation des événements.",
    },
    {
      name: "ReactJS",
      icon: "react",
      level: 50,
      description:
        "ReactJS - Expérience approfondie avec ReactJS à travers divers projets réalisés pendant mes cours, couvrant des applications web complexes et interactives.",
    },
    {
      name: "HTML/CSS",
      icon: "html5",
      level: 50,
      description:
        "HTML/CSS - Utilisation quotidienne de HTML et CSS pour la création et la conception de sites web et d'applications. Maîtrise des principes de la conception web responsive et de l'accessibilité.",
    },
    {
      name: "JavaScript",
      icon: "js",
      level: 50,
      description:
        "JavaScript - Expertise dans l'utilisation de JavaScript, que ce soit pour le développement natif ou avec l'intégration de frameworks et bibliothèques comme React, Angular, et Vue.js.",
    },
    {
      name: "Git",
      icon: "git-alt",
      level: 50,
      description:
        "Git - Utilisation quotidienne de Git pour la gestion de version, le suivi des modifications, et la collaboration sur des projets personnels et professionnels. Expérience dans la résolution des conflits et la gestion des branches.",
    },
  ],
};
