import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Need IoT ?',
    icon: 'nb-lightbulb',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Skills & Tools',
    icon: 'nb-star',
    link: '/pages/skills',
  },
  {
    title: 'Projects',
    icon: 'nb-list',
    link: '/pages/projects',
  },
  {
    title: `My Path`,
    icon: 'nb-location',
    link: '/pages/cv',
  },
  {
    title: 'Out of work',
    icon: 'nb-coffee-maker',
    link: '/pages/leisure',
  },
  {
    title: 'Contacts',
    icon: 'nb-email',
    link: '/pages/contacts',
  },
];
