import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { useAmp } from 'next/amp';
import * as fs from 'fs';
import * as path from 'path';

import {AmpStyles} from '@/components/ampstyles';

const GA_TRACKING_ID = 'UA-67191622-1';

function AmpWrap({ ampOnly, nonAmp }) {
	const isAmp = useAmp();
	if (ampOnly) return isAmp && ampOnly;
	return !isAmp && nonAmp;
}

class InlineStylesHead extends Head {
	getCssLinks() {
		return this.__getInlineStyles();
	}

	__getInlineStyles() {
		const { assetPrefix, buildManifest } = this.context;

		if (!buildManifest.pages || buildManifest.pages.length === 0) return null;

		const pageKeys = [];
		for (const key of Object.keys(buildManifest.pages)) {
			if (buildManifest.pages[key]) {
				pageKeys.push(buildManifest.pages[key]);
			}
		}
		const mergeDedupeFiles = (arr) => {
			return [ ...new Set([].concat(...arr)) ];
		};

		return mergeDedupeFiles(pageKeys).filter((file) => /\.css$/.test(file)).map((file) => (
			<style
				key={file}
				nonce={this.props.nonce}
				data-href={`${assetPrefix}/_next/${file}`}
				dangerouslySetInnerHTML={{
					__html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8')
				}}
			/>
		));
	}
}

export default class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<InlineStylesHead>
					<link
						rel="preload"
						href="/fonts/Inter-roman.var-latin.woff2?3.13"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/>
					<AmpWrap
						ampOnly={
							<script
								async
								key="amp-analytics"
								custom-element="amp-analytics"
								src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
							/>
						}
					/>
					<AmpStyles />
				</InlineStylesHead>
				<body>
					<Main />
					<NextScript />
					<AmpWrap
						ampOnly={
							<amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
								<script
									type="application/json"
									dangerouslySetInnerHTML={{
										__html: JSON.stringify({
											vars: {
												account: GA_TRACKING_ID,
												gtag_id: GA_TRACKING_ID,
												config: {
													GA_TRACKING_ID: { groups: 'default' }
												}
											},
											triggers: {
												trackPageview: {
													on: 'visible',
													request: 'pageview'
												}
											}
										})
									}}
								/>
							</amp-analytics>
						}
					/>
					<AmpWrap
						nonAmp={
						<>
							<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
							/>
							<script
							dangerouslySetInnerHTML={{
								__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${GA_TRACKING_ID}');
							`
							}}
							/>
						</>
						}
					/>
		
				</body>
			</Html>
		);
	}
}
