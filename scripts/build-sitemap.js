import fs from 'fs';
import tinytime from 'tinytime';
import getAllPostPreviews from '../src/getAllPostPreviews';
const postDateTemplate = tinytime('{YYYY}-{Mo}-{DD}T{H}:{mm}:{ss}.0Z', { padMonth: true });

let sitemapItems = '';

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
	sitemapItems += `<url><loc>${`https://anthonymineo.com${link}/`}</loc><lastmod>${meta.updated}</lastmod></url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://anthonymineo.com/</loc><lastmod>${postDateTemplate.render(
	new Date()
)}</lastmod></url>${sitemapItems}</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log(`✅ sitemap.xml generated!`);
