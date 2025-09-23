import { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Tubiluck',
    year: '2020',
    url: 'https://tabiluck.herokuapp.com/',
    slideUrl: 'https://drive.google.com/file/d/1PzUZyTUhgwTpvlhgwE5YPT5GXPA_NoSy/view?usp=sharing',
    repo: 'https://github.com/Last-Vega/Tabiluck',
    projectImage: '/assets/img/projects/tabiluck.png',
    tags: ['Vue', 'Vuex', 'Vuetify', 'Python', 'Flask', 'Axios', 'Postgresql', 'Docker'],
    description: 'Products created at Rakuten internship'
  },
  {
    name: 'Goodbuy',
    year: '2020',
    url: 'https://bloodcurdling-cemetery-16965.herokuapp.com/',
    slideUrl: 'https://docs.google.com/presentation/d/1QCJ1WCg9zngbLG4tI_DoR6qx911PPcrEr7-CrfvoV88/edit#slide=id.p',
    repo: 'https://github.com/Last-Vega/Goodbuy',
    projectImage: '/assets/img/projects/goodbuy.png',
    tags: ['Vue', 'Vuex', 'Vuetify', 'Python', 'Flask', 'Axios', 'Postgresql', 'Docker', 'ChromeExtensions'],
    description: 'Products created at <a href="https://enpit.coins.tsukuba.ac.jp/">enpit2020</a>'
  },
];
