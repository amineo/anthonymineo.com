// Tag List
export const tags = [
	{
		name: 'AdonisJS',
		slug: 'adonisjs'
	},
	{
		name: 'AWS',
		slug: 'aws'
	},
	{
		name: 'ColdFusion',
		slug: 'coldfusion'
	},
	{
		name: 'Design',
		slug: 'design'
	},
	{
		name: 'Docker',
		slug: 'docker'
	},
	{
		name: 'DevOps',
		slug: 'devops'
	},
	{
		name: 'Gulp',
		slug: 'gulp'
	},
	{
		name: 'Node.js',
		slug: 'node-js'
	},
	{
		name: 'PubSubJS',
		slug: 'pubsubjs'
	},
	{
		name: 'Photoshop',
		slug: 'photoshop'
	},
	{
		name: 'IIS',
		slug: 'iis'
	},
	{
		name: 'JavaScript',
		slug: 'javascript'
	},
	{
		name: 'Linux',
		slug: 'linux'
	},
	{
		name: 'React',
		slug: 'react'
	},
	{
		name: 'Redactor',
		slug: 'redactor'
	},
	{
		name: 'Elixir',
		slug: 'Elixir'
	},	
	{
		name: 'Test',
		slug: 'test'
	}
];

// Slug utils  ---

// object by tag name
export function tag(n) {
	let match = tags.find(({ name }) => name === n);
	if (!match) {
		console.error(`Couldnt find tag: ${n} ! Make sure it exists in the taglist !`);
	}
	return match;
}

// object by tag slug
export function slug(s) {
	let match = tags.find(({ slug }) => slug === s);
	if (!match) {
		console.error(`Couldnt find tag: ${s} ! Make sure it exists in the taglist !`);
	}
	return match;
}

// match a slug to tag's name
export function matchSlug(slugs, tag) {
	let match = slugs.find(({ slug }) => slug === tag);
	if (!match) {
		return false;
	}
	return true;
}

// Generate arrays from a (,) list of tags or slugs
export function tagList(n) {
	const tagArr = n.replace(/\s/g, '').split(',');
	const availableTags = [];
	for (const key in tags) {
		availableTags.push(tags[key].name);
	}
	let match = availableTags.filter((element) => tagArr.includes(element));
	return match;
}
export function slugList(n) {
	const tagArr = n.replace(/\s/g, '').split(',');
	const availableTags = [];
	for (const key in tags) {
		availableTags.push(tags[key].slug);
	}

	return availableTags.filter((element) => tagArr.includes(element));
}
