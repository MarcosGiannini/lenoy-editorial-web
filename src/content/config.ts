import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    synopsis: z.string(),
    cover: z.string(),
    year: z.number(),
    category: z.enum(['obras-propias', 'colaboracion-ongs']),
    genre: z.array(z.string()),
    price: z.number(),
    stripeButtonId: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    photo: z.string(),
    origin: z.string(),
    bookIds: z.array(z.string()),
    socialLinks: z
      .object({
        twitter: z.string().optional(),
        instagram: z.string().optional(),
        web: z.string().optional(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string(),
  }),
});

export const collections = { books, authors, blog };
