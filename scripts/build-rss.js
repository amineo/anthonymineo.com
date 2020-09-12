import fs from 'fs';
import RSS from 'rss';
import getAllPostPreviews from '../src/getAllPostPreviews';

const rss = new RSS({
	title: 'AnthonyMineo.com - Blog',
	site_url: 'https://anthonymineo.com',
	feed_url: 'https://anthonymineo.com/rss.xml'
});

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
	rss.item({
		title: meta.title,
		guid: link,
		url: `https://anthonymineo.com${link}/`,
		date: meta.date,
		description: meta.description,
		custom_elements: [].concat(meta.authors.map((author) => ({ author: [ { name: author.name } ] })))
	});
});

fs.writeFileSync('./public/rss.xml', rss.xml({ indent: true }));
