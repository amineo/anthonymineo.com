import Head from 'next/head';
import twitterCard from '@/img/twitter-card.jpg';
import getAllPostPreviews from '@/getAllPostPreviews';
import PostPreview from '@/components/PostPreview';
const posts = getAllPostPreviews();

function makeJSONSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		publisher: {
			'@type': 'Organization',
			name: 'Anthony Mineo',
			logo: {
				'@type': 'ImageObject',
				url: 'https://anthonymineo.com/favicon.ico',
				width: 48,
				height: 48
			}
		},
		url: 'https://anthonymineo.com/',
		image: {
			'@type': 'ImageObject',
			url: 'https://anthonymineo.com/content/images/2018/02/mineo-hero.png',
			width: 2000,
			height: 700
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://anthonymineo.com/'
		},
		description: 'An exploration in design, development and everything in between'
	};
}

export default function Home() {
	return (
		<div className="divide-y divide-gray-200">
			<Head>
				<title>Anthony Mineo</title>
				<meta name="description" content="An exploration in design, development and everything in between" />
				<link rel="canonical" href="https://anthonymineo.com/" />
				<meta name="ROBOTS" content="INDEX, FOLLOW" />

				<meta property="og:site_name" content="Anthony Mineo" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Anthony Mineo" />
				<meta
					property="og:description"
					content="An exploration in design, development and everything in between"
				/>
				<meta property="og:url" content="https://anthonymineo.com/" />
				<meta property="og:image" content={`https://anthonymineo.com${twitterCard}`} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@mineo27" />
				<meta name="twitter:creator" content="@mineo27" />
				<meta name="twitter:title" content="Anthony Mineo" />
				<meta
					name="twitter:description"
					content="An exploration in design, development and everything in between"
				/>
				<meta name="twitter:image" content={`https://anthonymineo.com${twitterCard}`} />

				<script
					key={`jsonld-home`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJSONSchema()) }}
				/>
			</Head>
			<div className="pt-7 pb-12 space-y-2 md:space-y-6 text-center">
				<h1 className="text-3xl leading-9 font-extrabold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
					Anthony Mineo
				</h1>
				<p className="text-lg leading-7 text-gray-500">
					An exploration in design, development and everything in between
				</p>
			</div>
			<ul className="divide-y divide-gray-200">
				{posts.map(({ link, module: { default: Component, meta } }) => {
					if (meta.draft === true) {
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
