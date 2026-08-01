import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const oznamy = (await getCollection('oznamy', ({ data }) => data.zverejnene)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Oznamy — Urbár Pongrácovce',
    description:
      'Oznamy a aktuality Urbárskej spoločnosti pozemkového spoločenstva Pongrácovce.',
    site: context.site,
    items: oznamy.map((oznam) => ({
      title: oznam.data.title,
      pubDate: oznam.data.date,
      description: oznam.data.popis,
      link: `/oznamy/${oznam.id}/`,
    })),
    customData: '<language>sk</language>',
  });
}
