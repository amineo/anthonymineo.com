import React from 'react';
import Link from 'next/link';
import tinytime from 'tinytime';

import Authors from '@/components/Authors';
import Tags from '@/components/Tags';

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}');

const PostPreview = ({ link, meta, children }) => {
	return (
		<article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
			<dl>
				<dt className="sr-only">Published on</dt>
				<dd className="inline-block align-text-bottom items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-500">
					<time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
				</dd>
			</dl>
			<div className="space-y-5 xl:col-span-3">
				<div>
					<h2 className="text-2xl leading-8 font-bold tracking-tight">
						<Link href={link}>
							<a className="text-gray-900 hover:text-indigo-600">{meta.title}</a>
						</Link>
					</h2>

					<div className="pt-2">
						<small className=" text-gray-500">
							<Authors authors={meta.authors} />
							{' on '}
							<Tags tags={meta.tags} className="hover:text-indigo-600" />
						</small>
					</div>

					<div className="mt-5 prose max-w-none text-gray-500">{children}</div>
				</div>
				<div className="text-base leading-6 font-medium">
					<Link href={link}>
						<a className="text-indigo-500 hover:text-indigo-600" aria-label={`Read "${meta.title}"`}>
							Read more &rarr;
						</a>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default PostPreview;
