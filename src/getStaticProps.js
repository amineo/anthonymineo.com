import getAllPostPreviews from '@/getAllPostPreviews';

export async function getStaticProps() {
	return {
		props: {
			posts: getAllPostPreviews().map((post) => ({
				title: post.module.meta.title,
				tags: post.module.meta.tags,
				link: post.link
			}))
		}
	};
}
