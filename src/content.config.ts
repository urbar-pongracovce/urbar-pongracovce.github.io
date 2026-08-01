import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const oznamy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/oznamy' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kategoria: z.enum(['oznam', 'pozvanka', 'zapisnica']).default('oznam'),
    popis: z.string().optional(),
    priloha: z.string().optional(),
    zverejnene: z.boolean().default(true),
  }),
});

export const collections = { oznamy };
