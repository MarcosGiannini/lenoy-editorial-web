export interface Book {
  id: string;
  title: string;
  author: string;
  synopsis: string;
  cover: string;
  year: number;
  category: 'obras-propias' | 'colaboracion-ongs';
  genre: string[];
  price: number;
  stripeButtonId?: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: 'lo-rarito-que-eres',
    title: 'Lo rarito que eres',
    author: 'Amina Nse Obiang',
    synopsis: 'Una novela sobre la identidad y la búsqueda de libertad en la Guinea Ecuatorial contemporánea. A través de los ojos de Yara, una joven mujer que descubre su orientación sexual en una sociedad conservadora, la autora teje una historia de amor, resistencia y autodescubrimiento que desafía las normas establecidas.',
    cover: '/images/books/lo-rarito-que-eres.jpg',
    year: 2023,
    category: 'obras-propias',
    genre: ['Ficción', 'LGTB+', 'Novela contemporánea'],
    price: 18.99,
    featured: true,
  },
  {
    id: 'hijas-de-la-mujer',
    title: 'Hijas de la mujer',
    author: 'Beatriz Ela Nguema',
    synopsis: 'Una colección de cuentos cortos que celebra la resiliencia de las mujeres ecuatoguineanas a través de generaciones. Desde la abuela que guardaba secretos en su corazón hasta la nieta que los descubre décadas después, estas historias entrelazadas forman un mosaico poderoso sobre herencia, dolor y esperanza.',
    cover: '/images/books/hijas-de-la-mujer.jpg',
    year: 2022,
    category: 'obras-propias',
    genre: ['Feminismo', 'Cuentos', 'Literatura africana'],
    price: 15.99,
    featured: false,
  },
  {
    id: 'voces-del-mango',
    title: 'Voces del mango',
    author: 'Celestina Abeso Mba',
    synopsis: 'Poesía que celebra la naturaleza, el cuerpo femenino y la conexión con la tierra en Guinea Ecuatorial. Con imágenes vívidas y un lenguaje cargado de sensualidad y espiritualidad, esta obra reivindica el cuerpo de la mujer africana como territorio sagrado y político.',
    cover: '/images/books/voces-del-mango.jpg',
    year: 2023,
    category: 'obras-propias',
    genre: ['Poesía', 'Feminismo', 'Ecocrítica'],
    price: 12.99,
    featured: false,
  },
  {
    id: 'el-silencio-roto',
    title: 'El silencio roto',
    author: 'Diversas autoras',
    synopsis: 'Antología en colaboración con la ONG Mujeres de Guinea Ecuatorial (MGE). Reúne testimonios, relatos y poemas de supervivientes de violencia de género. Una obra colectiva que da voz a quienes han sido silenciadas, como herramienta de denuncia y sanación comunitaria.',
    cover: '/images/books/el-silencio-roto.jpg',
    year: 2021,
    category: 'colaboracion-ongs',
    genre: ['Testimonios', 'Derechos humanos', 'Feminismo'],
    price: 14.99,
    featured: false,
  },
  {
    id: 'amor-sin-fronteras',
    title: 'Amor sin fronteras',
    author: 'Colectivo Arcoíris GE',
    synopsis: 'Publicación conjunta con la organización Colectivo Arcoíris Guinea Ecuatorial. Una colección de historias de amor que exploran la diversidad de orientaciones e identidades sexuales en el contexto africano ecuatoguineano, con un mensaje de esperanza hacia la aceptación y la visibilidad.',
    cover: '/images/books/amor-sin-fronteras.jpg',
    year: 2022,
    category: 'colaboracion-ongs',
    genre: ['LGTB+', 'Romance', 'Narrativa corta'],
    price: 13.99,
    featured: false,
  },
];

export function getFeaturedBook(): Book | undefined {
  return books.find((b) => b.featured);
}

export function getBooksByCategory(category: Book['category']): Book[] {
  return books.filter((b) => b.category === category);
}
