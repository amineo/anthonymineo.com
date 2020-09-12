import '@/css/tailwind.css';
import Head from 'next/head';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';

import SectionContainer from '@/components/SectionContainer';

export default function App({ Component, pageProps }) {
	return (
		<div className="antialiased">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="alternate" type="application/rss+xml" href="/rss.xml" />
			</Head>
			<SectionContainer>
				<Header />
			</SectionContainer>
			<SectionContainer>
				<main>
					<Component {...pageProps} />
				</main>
			</SectionContainer>
			<div className="bg-gray-100">
				<SectionContainer>
					<SiteFooter />
				</SectionContainer>
			</div>
		</div>
	);
}
