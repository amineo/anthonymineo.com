import React from 'react';
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews';
import PostPreview from '@/components/PostPreview';
const posts = getAllPostPreviews();

import { tags, slug, matchSlug } from '@/tags';


// Generate static tag slug paths for SSR
const tagPaths = [];
tags.map((tag) => tagPaths.push({ params: { tag: tag.slug }} ) );


export default function Tag({tag}) {
	return (
		<div>
			<Head>
				<title>{slug(tag).name} - AnthonyMineo.com</title>
				<meta name="ROBOTS" content="NOINDEX, FOLLOW" />
			</Head>
	
			<div className="text-lg  mx-auto mb-6 border-b-4 border-gray-200">
     			<p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Tag:</p>
      			<h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">{slug(tag).name}</h1>
    		</div>
			<ul className="divide-y divide-gray-200">
				{posts.map(({ link, module: { default: Component, meta } }) => {
					if (meta.draft === true) {
						return;
					}

					const matchPost = matchSlug(meta.tags, tag);
					if (!matchPost) {
						return;
					}

					return (
						<li key={link} className="py-12">
							<PostPreview link={link} meta={meta}>
								<Component />
							</PostPreview>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


export const getStaticProps = async ({ params }) => {
	return {
	  props: {
		tag: params?.tag
	  }
	};
  }
  


  export const getStaticPaths = async () => {
	return {
	  paths: tagPaths,
	  fallback: false
	};
  }