export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'literatura-lgbt-guinea-ecuatorial',
    title: 'El auge de la literatura LGTB+ en Guinea Ecuatorial',
    excerpt: 'Un análisis del floreciente movimiento literario que está transformando la narrativa sobre identidad y diversidad en el único país hispanohablante de África.',
    content: '# El auge de la literatura LGTB+ en Guinea Ecuatorial\n\nEn los últimos años, Guinea Ecuatorial ha visto emerger un movimiento literario sin precedentes: escritoras y escritores que abordan abiertamente temas de identidad de género, orientación sexual y diversidad desde una perspectiva profundamente africana y ecuatoguineana.\n\n## Un contexto complejo\n\nLa realidad social de Guinea Ecuatorial, como la de muchos países africanos, presenta desafíos significativos para la visibilidad LGTB+. Sin embargo, es precisamente en este contexto donde la literatura se convierte en un espacio de resistencia y esperanza.\n\n## Voces que se alzan\n\nAutoras como Amina Nse Obiang y colectivos como Arcoíris GE están abriendo conversaciones que antes eran impensables. A través de novelas, cuentos y poesía, están construyendo un archivo de experiencias vividas que trasciende el silencio histórico.\n\n## El papel de Editorial Lenoy\n\nDesde Editorial Lenoy, creemos firmemente que la literatura es una herramienta de transformación social. Publicar estas voces no es solo un acto editorial, es un acto político y de amor hacia nuestra comunidad.',
    date: '2024-03-15',
    author: 'Equipo Editorial Lenoy',
    category: 'Literatura',
    tags: ['LGTB+', 'Guinea Ecuatorial', 'Literatura africana'],
    coverImage: '/images/blog/literatura-lgbt.jpg',
  },
  {
    id: '2',
    slug: 'feminismo-africano-perspectivas',
    title: 'Feminismo africano: perspectivas desde Guinea Ecuatorial',
    excerpt: 'Exploramos las corrientes del feminismo africano y cómo nuestras autoras las reinterpretan desde su experiencia ecuatoguineana única.',
    content: '# Feminismo africano: perspectivas desde Guinea Ecuatorial\n\nEl feminismo no es un concepto monolítico. En Africa, y específicamente en Guinea Ecuatorial, las perspectivas feministas se entrelazan con la herencia cultural, la experiencia colonial y las realidades contemporáneas del continente.\n\n## Más allá del feminismo occidental\n\nLas autoras de nuestra editorial no simplemente importan el feminismo occidental; lo reinterpretan, lo cuestionan y construyen algo nuevo. Un feminismo que honra a la abuela y a la activista, que habla español y fang, que vive entre Malabo y Madrid.\n\n## La literatura como acto político\n\nCuando Beatriz Ela Nguema escribe sobre sus "Hijas de la mujer", no está solo contando historias. Está preservando una memoria colectiva que el patriarcado y el colonialismo han intentado borrar.\n\n## Mirando hacia el futuro\n\nNuestro compromiso es seguir publicando estas voces, amplificándolas y asegurando que lleguen a lectores de todo el mundo hispanohablante y más allá.',
    date: '2024-02-28',
    author: 'Beatriz Ela Nguema',
    category: 'Feminismo',
    tags: ['Feminismo africano', 'Guinea Ecuatorial', 'Literatura'],
    coverImage: '/images/blog/feminismo-africano.jpg',
  },
  {
    id: '3',
    slug: 'presentacion-lo-rarito-que-eres',
    title: 'Presentación: "Lo rarito que eres" de Amina Nse Obiang',
    excerpt: 'Crónica del evento de presentación de la debut novelística de Amina Nse Obiang en Madrid, un momento histórico para la literatura ecuatoguineana.',
    content: '# Presentación: "Lo rarito que eres" de Amina Nse Obiang\n\nEl pasado mes de octubre, la Librería Mujeres de Madrid acogió un evento que quedará en la memoria de quienes estuvieron presentes: la presentación de "Lo rarito que eres", primera novela de Amina Nse Obiang.\n\n## Una sala llena de emoción\n\nMás de cien personas se congregaron para escuchar a Amina hablar sobre su libro, sobre Guinea Ecuatorial, sobre el amor que se niega a ocultarse. Hubo risas, hubo lágrimas, hubo un largo aplauso al final.\n\n## Las palabras de Amina\n\n"Escribí este libro para la Yara de mi infancia, que no tenía palabras para nombrarse. Y para todas las Yaras que existen hoy, para que sepan que no están solas."\n\n## Un hito editorial\n\n"Lo rarito que eres" supone un hito: es la primera novela publicada en España que aborda la experiencia LGTB+ en Guinea Ecuatorial desde una perspectiva insider, escrita por una mujer ecuatoguineana.',
    date: '2024-01-10',
    author: 'Equipo Editorial Lenoy',
    category: 'Eventos',
    tags: ['Presentación', 'Amina Nse Obiang', 'Lo rarito que eres'],
    coverImage: '/images/blog/presentacion-lo-rarito.jpg',
  },
];
