import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Search movies',
    link: '/movies',
  },

  {
    id: nanoid(),
    text: 'Credits',
    link: '/credits',
  },
];
export default items;
