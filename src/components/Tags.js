import React from 'react';
import Link from 'next/link';

const Tags = ({ tags, className }) => {
	return tags.map((tag, i) => (
		<span key={tag.slug}>
			{i > 0 && ', '}
			<Link key={`${tag.slug}-link`} href="/tag/[tag]" as={`/tag/${tag.slug}`}>
				<a className={`tag ${className}`}>{tag.name}</a>
			</Link>
		</span>
	));
};

export default Tags;
