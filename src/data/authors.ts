export interface Author {
  id: string;
  name: string;
  bio: string;
  photo: string;
  origin: string;
  bookIds: string[];
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    web?: string;
  };
}

export const authors: Author[] = [
  {
    id: 'amina-nse-obiang',
    name: 'Amina Nse Obiang',
    bio: 'Nacida en Malabo en 1987, Amina Nse Obiang es una de las voces más importantes de la nueva narrativa ecuatoguineana. Licenciada en Literatura Hispánica por la Universidad de Madrid, regresó a su país para convertirse en una activa defensora de los derechos de la comunidad LGTB+. Su debut novelístico, "Lo rarito que eres", fue galardonado con el Premio de Literatura Africana en Español 2023.',
    photo: '/images/authors/amina-nse-obiang.jpg',
    origin: 'Malabo, Guinea Ecuatorial',
    bookIds: ['lo-rarito-que-eres'],
    socialLinks: {
      instagram: 'https://instagram.com/aminanse_escribe',
    },
  },
  {
    id: 'beatriz-ela-nguema',
    name: 'Beatriz Ela Nguema',
    bio: 'Escritora y activista feminista originaria de Bata, Beatriz Ela Nguema ha dedicado su vida a rescatar y difundir las historias de las mujeres ecuatoguineanas. Su obra "Hijas de la mujer" ha sido traducida al francés y al inglés, y se ha convertido en texto de referencia en estudios de literatura africana en España y Francia.',
    photo: '/images/authors/beatriz-ela-nguema.jpg',
    origin: 'Bata, Guinea Ecuatorial',
    bookIds: ['hijas-de-la-mujer'],
    socialLinks: {
      twitter: 'https://twitter.com/beatrizelanguema',
    },
  },
  {
    id: 'celestina-abeso-mba',
    name: 'Celestina Abeso Mba',
    bio: 'Poeta y profesora de lengua española en Malabo, Celestina Abeso Mba explora en su obra la intersección entre feminismo, espiritualidad africana y ecología. "Voces del mango" es su primera colección de poesía publicada, aunque su obra ha aparecido en numerosas revistas literarias de África y España.',
    photo: '/images/authors/celestina-abeso-mba.jpg',
    origin: 'Malabo, Guinea Ecuatorial',
    bookIds: ['voces-del-mango'],
    socialLinks: {
      web: 'https://celestinaabeso.wixsite.com/poetisa',
    },
  },
];
