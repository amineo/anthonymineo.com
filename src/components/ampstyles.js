// import css from 'styled-jsx/css';

export const AmpStyles = () => (
	<style jsx global>{`
		html {
			font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
				Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
			line-height: 1.5;
		}
		*,
		:after,
		:before {
			box-sizing: border-box;
			border: 0 solid #d2d6dc;
		}
		hr {
			border-top-width: 1px;
		}
		img {
			border-style: solid;
		}
		textarea {
			resize: vertical;
		}
		input::-moz-placeholder,
		textarea::-moz-placeholder {
			color: #a0aec0;
		}
		input:-ms-input-placeholder,
		textarea:-ms-input-placeholder {
			color: #a0aec0;
		}
		input::-ms-input-placeholder,
		textarea::-ms-input-placeholder {
			color: #a0aec0;
		}
		input::placeholder,
		textarea::placeholder {
			color: #a0aec0;
		}
		[role=button],
		button {
			cursor: pointer;
		}
		table {
			border-collapse: collapse;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: inherit;
			font-weight: inherit;
		}
		a {
			color: inherit;
			text-decoration: inherit;
		}
		button,
		input,
		optgroup,
		select,
		textarea {
			padding: 0;
			line-height: inherit;
			color: inherit;
		}
		code,
		kbd,
		pre,
		samp {
			font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
		}
		audio,
		canvas,
		embed,
		iframe,
		img,
		object,
		svg,
		video {
			display: block;
			vertical-align: middle;
		}
		img,
		video {
			max-width: 100%;
			height: auto;
		}
		@font-face {
			font-family: Inter var;
			font-weight: 100 900;
			font-style: normal;
			font-named-instance: Regular;
			font-display: swap;
			src: url(/fonts/Inter-roman.var-latin.woff2?3.13) format("woff2");
		}
		@font-face {
			font-family: Inter var;
			font-weight: 100 900;
			font-style: italic;
			font-named-instance: Italic;
			font-display: swap;
			src: url(/fonts/Inter-italic.var-latin.woff2?3.13) format("woff2");
		}
		.container {
			width: 100%;
		}
		@media (min-width: 640px) {
			.container {
				max-width: 640px;
			}
		}
		@media (min-width: 768px) {
			.container {
				max-width: 768px;
			}
		}
		@media (min-width: 1024px) {
			.container {
				max-width: 1024px;
			}
		}
		@media (min-width: 1280px) {
			.container {
				max-width: 1280px;
			}
		}
		.prose {
			color: #374151;
			max-width: 65ch;
		}
		.prose [class~=lead] {
			color: #4a5568;
			font-size: 1.25em;
			line-height: 1.6;
			margin-top: 1.2em;
			margin-bottom: 1.2em;
		}
		.prose a {
			color: #1a56db;
			text-decoration: underline;
			font-weight: 400;
		}
		.prose strong {
			color: #1a202c;
			font-weight: 600;
		}
		.prose ol {
			counter-reset: list-counter;
			margin-top: 1.25em;
			margin-bottom: 1.25em;
		}
		.prose ol > li {
			position: relative;
			counter-increment: list-counter;
			padding-left: 1.75em;
		}
		.prose ol > li:before {
			content: counter(list-counter) ".";
			position: absolute;
			font-weight: 400;
			color: #718096;
		}
		.prose ul > li {
			position: relative;
			padding-left: 1.75em;
		}
		.prose ul > li:before {
			content: "";
			position: absolute;
			background-color: #cbd5e0;
			border-radius: 50%;
			width: .375em;
			height: .375em;
			top: .6875em;
			left: .25em;
		}
		.prose hr {
			border-color: #e2e8f0;
			border-top-width: 1px;
			margin-top: 3em;
			margin-bottom: 3em;
		}
		.prose blockquote {
			font-weight: 500;
			font-style: italic;
			color: #161e2e;
			border-left-width: .25rem;
			border-left-color: #e5e7eb;
			margin-top: 1.6em;
			margin-bottom: 1.6em;
			padding-left: 1em;
		}
		.prose blockquote p:first-of-type:before {
			content: open-quote;
		}
		.prose blockquote p:last-of-type:after {
			content: close-quote;
		}
		.prose h1 {
			color: #1a202c;
			font-weight: 800;
			font-size: 2.25em;
			margin-top: 0;
			margin-bottom: .8888889em;
			line-height: 1.1111111;
		}
		.prose h2 {
			color: #161e2e;
			font-weight: 700;
			font-size: 1.5em;
			margin-top: 2em;
			margin-bottom: 1em;
			line-height: 1.3333333;
			letter-spacing: -.025em;
		}
		.prose h3 {
			color: #161e2e;
			font-weight: 600;
			font-size: 1.25em;
			margin-top: 1.6em;
			margin-bottom: .6em;
			line-height: 1.6;
		}
		.prose h4 {
			color: #1a202c;
			font-weight: 600;
			margin-top: 1.5em;
			margin-bottom: .5em;
			line-height: 1.5;
		}
		.prose code {
			color: #d61f69;
			font-weight: 600;
			font-size: .875em;
			background-color: #f8fafc;
		}
		.prose code:after,
		.prose code:before {
			content: "\`";
		}
		.prose pre {
			color: #e5e7eb;
			background-color: #252f3f;
			overflow-x: auto;
			font-size: .875em;
			line-height: 1.7142857;
			margin-top: 1.7142857em;
			margin-bottom: 1.7142857em;
			border-radius: .375rem;
			padding: .8571429em 1.1428571em;
		}
		.prose pre code {
			background-color: transparent;
			border-width: 0;
			border-radius: 0;
			padding: 0;
			font-weight: 400;
			color: inherit;
			font-size: inherit;
			font-family: inherit;
			line-height: inherit;
		}
		.prose pre code:after,
		.prose pre code:before {
			content: "";
		}
		.prose table {
			width: 100%;
			table-layout: auto;
			text-align: left;
			margin-top: 2em;
			margin-bottom: 2em;
			font-size: .875em;
			line-height: 1.7142857;
		}
		.prose thead {
			color: #1a202c;
			font-weight: 600;
			border-bottom-width: 1px;
			border-bottom-color: #cbd5e0;
		}
		.prose thead th {
			vertical-align: bottom;
			padding-right: .5714286em;
			padding-bottom: .5714286em;
			padding-left: .5714286em;
		}
		.prose tbody tr {
			border-bottom-width: 1px;
			border-bottom-color: #e2e8f0;
		}
		.prose tbody tr:last-child {
			border-bottom-width: 0;
		}
		.prose tbody td {
			vertical-align: top;
			padding: .5714286em;
		}
		.prose {
			font-size: 1rem;
			line-height: 1.75;
		}
		.prose p {
			margin-top: 1.25em;
			margin-bottom: 1.25em;
		}
		.prose img,
		.prose video {
			margin-top: 2em;
			margin-bottom: 2em;
		}
		.prose h2 code {
			font-size: .875em;
		}
		.prose h3 code {
			font-size: .9em;
		}
		.prose ul {
			margin-top: 1.25em;
			margin-bottom: 1.25em;
		}
		.prose li {
			margin-top: .5em;
			margin-bottom: .5em;
		}
		.prose ol > li:before {
			left: 0;
		}
		.prose > ul > li p {
			margin-top: .75em;
			margin-bottom: .75em;
		}
		.prose > ul > li > :first-child {
			margin-top: 1.25em;
		}
		.prose > ul > li > :last-child {
			margin-bottom: 1.25em;
		}
		.prose > ol > li > :first-child {
			margin-top: 1.25em;
		}
		.prose > ol > li > :last-child {
			margin-bottom: 1.25em;
		}
		.prose ol ol,
		.prose ol ul,
		.prose ul ol,
		.prose ul ul {
			margin-top: .75em;
			margin-bottom: .75em;
		}
		.prose h2 + *,
		.prose h3 + *,
		.prose h4 + *,
		.prose hr + * {
			margin-top: 0;
		}
		.prose thead th:first-child {
			padding-left: 0;
		}
		.prose thead th:last-child {
			padding-right: 0;
		}
		.prose tbody td:first-child {
			padding-left: 0;
		}
		.prose tbody td:last-child {
			padding-right: 0;
		}
		.prose > :first-child {
			margin-top: 0;
		}
		.prose > :last-child {
			margin-bottom: 0;
		}
		.prose ol li:before {
			font-weight: 600;
			color: #6b7280;
		}
		.prose ul li:before {
			background-color: #9fa6b2;
		}
		.space-y-1 > :not(template) ~ :not(template) {
			--space-y-reverse: 0;
			margin-top: calc(0.25rem*(1 - var(--space-y-reverse)));
			margin-bottom: calc(0.25rem*var(--space-y-reverse));
		}
		.space-y-2 > :not(template) ~ :not(template) {
			--space-y-reverse: 0;
			margin-top: calc(0.5rem*(1 - var(--space-y-reverse)));
			margin-bottom: calc(0.5rem*var(--space-y-reverse));
		}
		.space-x-2 > :not(template) ~ :not(template) {
			--space-x-reverse: 0;
			margin-right: calc(0.5rem*var(--space-x-reverse));
			margin-left: calc(0.5rem*(1 - var(--space-x-reverse)));
		}
		.space-y-5 > :not(template) ~ :not(template) {
			--space-y-reverse: 0;
			margin-top: calc(1.25rem*(1 - var(--space-y-reverse)));
			margin-bottom: calc(1.25rem*var(--space-y-reverse));
		}
		.space-y-8 > :not(template) ~ :not(template) {
			--space-y-reverse: 0;
			margin-top: calc(2rem*(1 - var(--space-y-reverse)));
			margin-bottom: calc(2rem*var(--space-y-reverse));
		}
		.space-y-10 > :not(template) ~ :not(template) {
			--space-y-reverse: 0;
			margin-top: calc(2.5rem*(1 - var(--space-y-reverse)));
			margin-bottom: calc(2.5rem*var(--space-y-reverse));
		}
		.space-x-12 > :not(template) ~ :not(template) {
			--space-x-reverse: 0;
			margin-right: calc(3rem*var(--space-x-reverse));
			margin-left: calc(3rem*(1 - var(--space-x-reverse)));
		}
		.divide-y > :not(template) ~ :not(template) {
			--divide-y-reverse: 0;
			border-top-width: calc(1px*(1 - var(--divide-y-reverse)));
			border-bottom-width: calc(1px*var(--divide-y-reverse));
		}
		.divide-gray-200 > :not(template) ~ :not(template) {
			--divide-opacity: 1;
			border-color: #e5e7eb;
			border-color: rgba(229, 231, 235, var(--divide-opacity));
		}
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		.bg-white {
			--bg-opacity: 1;
			background-color: #fff;
			background-color: rgba(255, 255, 255, var(--bg-opacity));
		}
		.bg-gray-50 {
			--bg-opacity: 1;
			background-color: #f9fafb;
			background-color: rgba(249, 250, 251, var(--bg-opacity));
		}
		.bg-gray-100 {
			--bg-opacity: 1;
			background-color: #f4f5f7;
			background-color: rgba(244, 245, 247, var(--bg-opacity));
		}
		.bg-gray-800 {
			--bg-opacity: 1;
			background-color: #252f3f;
			background-color: rgba(37, 47, 63, var(--bg-opacity));
		}
		.bg-yellow-100 {
			--bg-opacity: 1;
			background-color: #fdf6b2;
			background-color: rgba(253, 246, 178, var(--bg-opacity));
		}
		.active\:bg-gray-50:active {
			--bg-opacity: 1;
			background-color: #f9fafb;
			background-color: rgba(249, 250, 251, var(--bg-opacity));
		}
		.border-collapse {
			border-collapse: collapse;
		}
		.border-gray-200 {
			--border-opacity: 1;
			border-color: #e5e7eb;
			border-color: rgba(229, 231, 235, var(--border-opacity));
		}
		.border-gray-300 {
			--border-opacity: 1;
			border-color: #d2d6dc;
			border-color: rgba(210, 214, 220, var(--border-opacity));
		}
		.focus\:border-blue-300:focus {
			--border-opacity: 1;
			border-color: #a4cafe;
			border-color: rgba(164, 202, 254, var(--border-opacity));
		}
		.rounded-md {
			border-radius: .375rem;
		}
		.rounded-full {
			border-radius: 9999px;
		}
		.border {
			border-width: 1px;
		}
		.border-b-4 {
			border-bottom-width: 4px;
		}
		.block {
			display: block;
		}
		.inline-block {
			display: inline-block;
		}
		.flex {
			display: flex;
		}
		.inline-flex {
			display: inline-flex;
		}
		.table {
			display: table;
		}
		.grid {
			display: grid;
		}
		.contents {
			display: contents;
		}
		.hidden {
			display: none;
		}
		.items-center {
			align-items: center;
		}
		.justify-center {
			justify-content: center;
		}
		.justify-between {
			justify-content: space-between;
		}
		.flex-shrink {
			flex-shrink: 1;
		}
		.font-medium {
			font-weight: 500;
		}
		.font-semibold {
			font-weight: 600;
		}
		.font-bold {
			font-weight: 700;
		}
		.font-extrabold {
			font-weight: 800;
		}
		.h-5 {
			height: 1.25rem;
		}
		.h-6 {
			height: 1.5rem;
		}
		.h-10 {
			height: 2.5rem;
		}
		.h-12 {
			height: 3rem;
		}
		.text-xs {
			font-size: .75rem;
		}
		.text-sm {
			font-size: .875rem;
		}
		.text-base {
			font-size: 1rem;
		}
		.text-lg {
			font-size: 1.125rem;
		}
		.text-xl {
			font-size: 1.25rem;
		}
		.text-2xl {
			font-size: 1.5rem;
		}
		.text-3xl {
			font-size: 1.875rem;
		}
		.leading-4 {
			line-height: 1rem;
		}
		.leading-5 {
			line-height: 1.25rem;
		}
		.leading-6 {
			line-height: 1.5rem;
		}
		.leading-7 {
			line-height: 1.75rem;
		}
		.leading-8 {
			line-height: 2rem;
		}
		.leading-9 {
			line-height: 2.25rem;
		}
		.my-10 {
			margin-top: 2.5rem;
			margin-bottom: 2.5rem;
		}
		.mx-auto {
			margin-left: auto;
			margin-right: auto;
		}
		.mt-1 {
			margin-top: .25rem;
		}
		.mt-2 {
			margin-top: .5rem;
		}
		.mb-2 {
			margin-bottom: .5rem;
		}
		.mt-4 {
			margin-top: 1rem;
		}
		.mt-5 {
			margin-top: 1.25rem;
		}
		.mb-6 {
			margin-bottom: 1.5rem;
		}
		.ml-6 {
			margin-left: 1.5rem;
		}
		.mt-8 {
			margin-top: 2rem;
		}
		.mb-8 {
			margin-bottom: 2rem;
		}
		.max-w-none {
			max-width: none;
		}
		.max-w-3xl {
			max-width: 48rem;
		}
		.max-w-screen-xl {
			max-width: 1280px;
		}
		.focus\:outline-none:focus {
			outline: 0;
		}
		.overflow-x-auto {
			overflow-x: auto;
		}
		.py-0 {
			padding-top: 0;
			padding-bottom: 0;
		}
		.py-1 {
			padding-top: .25rem;
			padding-bottom: .25rem;
		}
		.py-2 {
			padding-top: .5rem;
			padding-bottom: .5rem;
		}
		.px-2 {
			padding-left: .5rem;
			padding-right: .5rem;
		}
		.py-3 {
			padding-top: .75rem;
			padding-bottom: .75rem;
		}
		.px-4 {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.py-5 {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
		.py-6 {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}
		.px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		.py-8 {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
		.py-12 {
			padding-top: 3rem;
			padding-bottom: 3rem;
		}
		.py-0\.5 {
			padding-top: .125rem;
			padding-bottom: .125rem;
		}
		.px-2\.5 {
			padding-left: .625rem;
			padding-right: .625rem;
		}
		.pt-1 {
			padding-top: .25rem;
		}
		.pl-1 {
			padding-left: .25rem;
		}
		.pt-2 {
			padding-top: .5rem;
		}
		.pt-6 {
			padding-top: 1.5rem;
		}
		.pt-7 {
			padding-top: 1.75rem;
		}
		.pt-8 {
			padding-top: 2rem;
		}
		.pb-8 {
			padding-bottom: 2rem;
		}
		.pt-10 {
			padding-top: 2.5rem;
		}
		.pb-10 {
			padding-bottom: 2.5rem;
		}
		.pb-12 {
			padding-bottom: 3rem;
		}
		.pb-16 {
			padding-bottom: 4rem;
		}
		.static {
			position: static;
		}
		.fixed {
			position: fixed;
		}
		.resize {
			resize: both;
		}
		.shadow-sm {
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
		}
		.shadow {
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
		}
		.focus\:shadow-outline-blue:focus {
			box-shadow: 0 0 0 3px rgba(164, 202, 254, .45);
		}
		.text-left {
			text-align: left;
		}
		.text-center {
			text-align: center;
		}
		.text-gray-200 {
			--text-opacity: 1;
			color: #e5e7eb;
			color: rgba(229, 231, 235, var(--text-opacity));
		}
		.text-gray-400 {
			--text-opacity: 1;
			color: #9fa6b2;
			color: rgba(159, 166, 178, var(--text-opacity));
		}
		.text-gray-500 {
			--text-opacity: 1;
			color: #6b7280;
			color: rgba(107, 114, 128, var(--text-opacity));
		}
		.text-gray-600 {
			--text-opacity: 1;
			color: #4b5563;
			color: rgba(75, 85, 99, var(--text-opacity));
		}
		.text-gray-700 {
			--text-opacity: 1;
			color: #374151;
			color: rgba(55, 65, 81, var(--text-opacity));
		}
		.text-gray-800 {
			--text-opacity: 1;
			color: #252f3f;
			color: rgba(37, 47, 63, var(--text-opacity));
		}
		.text-gray-900 {
			--text-opacity: 1;
			color: #161e2e;
			color: rgba(22, 30, 46, var(--text-opacity));
		}
		.text-teal-600 {
			--text-opacity: 1;
			color: #047481;
			color: rgba(4, 116, 129, var(--text-opacity));
		}
		.text-indigo-500 {
			--text-opacity: 1;
			color: #6875f5;
			color: rgba(104, 117, 245, var(--text-opacity));
		}
		.text-indigo-600 {
			--text-opacity: 1;
			color: #5850ec;
			color: rgba(88, 80, 236, var(--text-opacity));
		}
		.text-purple-600 {
			--text-opacity: 1;
			color: #7e3af2;
			color: rgba(126, 58, 242, var(--text-opacity));
		}
		.text-code-green {
			--text-opacity: 1;
			color: #b5f4a5;
			color: rgba(181, 244, 165, var(--text-opacity));
		}
		.text-code-yellow {
			--text-opacity: 1;
			color: #ffe484;
			color: rgba(255, 228, 132, var(--text-opacity));
		}
		.text-code-purple {
			--text-opacity: 1;
			color: #d9a9ff;
			color: rgba(217, 169, 255, var(--text-opacity));
		}
		.text-code-red {
			--text-opacity: 1;
			color: #ff8383;
			color: rgba(255, 131, 131, var(--text-opacity));
		}
		.text-code-blue {
			--text-opacity: 1;
			color: #93ddfd;
			color: rgba(147, 221, 253, var(--text-opacity));
		}
		.text-code-white {
			--text-opacity: 1;
			color: #fff;
			color: rgba(255, 255, 255, var(--text-opacity));
		}
		.hover\:text-gray-500:hover {
			--text-opacity: 1;
			color: #6b7280;
			color: rgba(107, 114, 128, var(--text-opacity));
		}
		.hover\:text-indigo-600:hover {
			--text-opacity: 1;
			color: #5850ec;
			color: rgba(88, 80, 236, var(--text-opacity));
		}
		.active\:text-gray-800:active {
			--text-opacity: 1;
			color: #252f3f;
			color: rgba(37, 47, 63, var(--text-opacity));
		}
		.italic {
			font-style: italic;
		}
		.uppercase {
			text-transform: uppercase;
		}
		.capitalize {
			text-transform: capitalize;
		}
		.underline {
			text-decoration: underline;
		}
		.antialiased {
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		.tracking-tight {
			letter-spacing: -.025em;
		}
		.tracking-wide {
			letter-spacing: .025em;
		}
		.tracking-wider {
			letter-spacing: .05em;
		}
		.align-text-bottom {
			vertical-align: text-bottom;
		}
		.visible {
			visibility: visible;
		}
		.whitespace-no-wrap {
			white-space: nowrap;
		}
		.w-4 {
			width: 1rem;
		}
		.w-6 {
			width: 1.5rem;
		}
		.w-10 {
			width: 2.5rem;
		}
		.w-15 {
			width: 3.75rem;
		}
		.w-20 {
			width: 5rem;
		}
		.transition {
			transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
		}
		.ease-in-out {
			transition-timing-function: cubic-bezier(.4, 0, .2, 1);
		}
		.duration-150 {
			transition-duration: .15s;
		}

		@media (min-width: 640px) {
			.sm\:rounded-lg {
				border-radius: .5rem;
			}
			.sm\:block {
				display: block;
			}
			.sm\:inline {
				display: inline;
			}
			.sm\:flex {
				display: flex;
			}
			.sm\:hidden {
				display: none;
			}
			.sm\:items-start {
				align-items: flex-start;
			}
			.sm\:items-center {
				align-items: center;
			}
			.sm\:justify-between {
				justify-content: space-between;
			}
			.sm\:flex-shrink-0 {
				flex-shrink: 0;
			}
			.sm\:text-4xl {
				font-size: 2.25rem;
			}
			.sm\:leading-10 {
				line-height: 2.5rem;
			}
			.sm\:mx-2 {
				margin-left: .5rem;
				margin-right: .5rem;
			}
			.sm\:mt-0 {
				margin-top: 0;
			}
			.sm\:ml-4 {
				margin-left: 1rem;
			}
			.sm\:ml-6 {
				margin-left: 1.5rem;
			}
			.sm\:p-6 {
				padding: 1.5rem;
			}
			.sm\:px-6 {
				padding-left: 1.5rem;
				padding-right: 1.5rem;
			}
		}
		@media (min-width: 768px) {
			.md\:space-y-6 > :not(template) ~ :not(template) {
				--space-y-reverse: 0;
				margin-top: calc(1.5rem*(1 - var(--space-y-reverse)));
				margin-bottom: calc(1.5rem*var(--space-y-reverse));
			}
			.md\:flex {
				display: flex;
			}
			.md\:items-center {
				align-items: center;
			}
			.md\:justify-between {
				justify-content: space-between;
			}
			.md\:order-1 {
				order: 1;
			}
			.md\:order-2 {
				order: 2;
			}
			.md\:text-5xl {
				font-size: 3rem;
			}
			.md\:leading-14 {
				line-height: 3.5rem;
			}
			.md\:mt-0 {
				margin-top: 0;
			}
		}
		@media (min-width: 1024px) {
			.lg\:px-8 {
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}
		@media (min-width: 1280px) {
			.xl\:space-y-0 > :not(template) ~ :not(template) {
				--space-y-reverse: 0;
				margin-top: calc(0px*(1 - var(--space-y-reverse)));
				margin-bottom: calc(0px*var(--space-y-reverse));
			}
			.xl\:divide-y-0 > :not(template) ~ :not(template) {
				--divide-y-reverse: 0;
				border-top-width: calc(0px*(1 - var(--divide-y-reverse)));
				border-bottom-width: calc(0px*var(--divide-y-reverse));
			}
			.xl\:divide-y > :not(template) ~ :not(template) {
				--divide-y-reverse: 0;
				border-top-width: calc(1px*(1 - var(--divide-y-reverse)));
				border-bottom-width: calc(1px*var(--divide-y-reverse));
			}
			.xl\:divide-gray-200 > :not(template) ~ :not(template) {
				--divide-opacity: 1;
				border-color: #e5e7eb;
				border-color: rgba(229, 231, 235, var(--divide-opacity));
			}
			.xl\:border-gray-200 {
				--border-opacity: 1;
				border-color: #e5e7eb;
				border-color: rgba(229, 231, 235, var(--border-opacity));
			}
			.xl\:border-b {
				border-bottom-width: 1px;
			}
			.xl\:grid {
				display: grid;
			}
			.xl\:items-baseline {
				align-items: baseline;
			}
			.xl\:max-w-5xl {
				max-width: 64rem;
			}
			.xl\:px-0 {
				padding-left: 0;
				padding-right: 0;
			}
			.xl\:px-5 {
				padding-left: 1.25rem;
				padding-right: 1.25rem;
			}
			.xl\:pb-0 {
				padding-bottom: 0;
			}
			.xl\:pb-10 {
				padding-bottom: 2.5rem;
			}
			.xl\:pt-11 {
				padding-top: 2.75rem;
			}
			.xl\:pb-20 {
				padding-bottom: 5rem;
			}
			.xl\:col-gap-6 {
				grid-column-gap: 1.5rem;
				-moz-column-gap: 1.5rem;
				column-gap: 1.5rem;
			}
			.xl\:grid-cols-4 {
				grid-template-columns: repeat(4, minmax(0, 1fr));
			}
			.xl\:col-span-3 {
				grid-column: span 3/span 3;
			}
			.xl\:col-start-1 {
				grid-column-start: 1;
			}
			.xl\:row-span-2 {
				grid-row: span 2/span 2;
			}
			.xl\:row-start-2 {
				grid-row-start: 2;
			}
		}
	`}</style>
);
