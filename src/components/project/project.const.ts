import { Project } from './project.component';

// TODO gérer les traductions des descriptions + ajouter mindcare webpetshop + images + liens
export const PROJECTS: Project[] = [
  {
    name: 'Dealabs',
    description:
      "Conception et création d'un site reprenant le concept de Dealabs afin de découvrir le framework Symfony",
    link: 'https://github.com/Peyronon-Arno/Dealabs',
    imgUrl: 'https://picsum.photos/200/300',
    icons: [
      { name: 'fa-symfony', tooltip: 'Symfony' },
      { name: 'fa-docker', tooltip: 'Docker' },
    ],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Détection Object IA',
    description:
      "Création d'une Intelligence Artificielle réalisée en équipe de 5 étudiants permettant de classer les objets visibles sur une image en les séparant en trois catégories : Humains / Voiture / Autres",
    link: 'https://project2.com',
    imgUrl: 'https://picsum.photos/200/300',
    icons: [{ name: 'fa-python', tooltip: 'Python' }],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'AnimaApp',
    description:
      "Réalisation d'une application utilisant du React Native. Cette application a pour objectif d'être utilisée pour un parc animalier afin de répertorier l'ensemble des animaux du zoo.",
    link: 'https://github.com/Peyronon-Arno/AnimApp',
    imgUrl: 'https://picsum.photos/200/300',
    icons: [
      { name: 'fa-java', tooltip: 'Java' },
      { name: 'fa-react', tooltip: 'React' },
    ],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Minecraft 2D Android',
    description:
      "Conception et réalisation d'une application mobile reprenant les bases du jeu Minecraft",
    link: 'https://github.com/Peyronon-Arno/Minecraft-2D-Android',
    imgUrl: 'https://picsum.photos/200/300',
    icons: [
      { name: 'fa-java', tooltip: 'Java' },
      { name: 'fa-android', tooltip: 'Android' },
    ],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
