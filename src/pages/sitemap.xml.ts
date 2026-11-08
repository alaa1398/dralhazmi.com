import type { APIRoute } from 'astro';
import { langs, nav, site, treatments } from '../data/site';

// Every page that exists in both languages, without the language prefix.
const paths = [
  ...nav.map((n) => n.path),
  'links',
  'privacy',
  'resources',
  ...treatments.map((t) => `treatments/${t.slug}`),
];

const url = (lang: string, p: string) => `${site.url}/${lang}/${p ? p + '/' : ''}`;

export const GET: APIRoute = () => {
  const entries = paths.flatMap((p) =>
    langs.map((lang) => {
      const alternates = langs
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${url(l, p)}"/>`)
        .join('');
      return `<url><loc>${url(lang, p)}</loc>${alternates}</url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
