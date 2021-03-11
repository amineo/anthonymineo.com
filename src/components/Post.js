import Head from 'next/head'
import tinytime from 'tinytime'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { useAmp } from 'next/amp'

import PageTitle from '@/components/PageTitle'
import Tags from '@/components/Tags'

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
}

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

function makeJSONSchema(meta, pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    publisher: {
      '@type': 'Organization',
      name: 'Anthony Mineo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anthonymineo.com/favicon.ico',
        width: 48,
        height: 48,
      },
    },
    author: {
      '@type': 'Person',
      name: 'Anthony Mineo',
      image: {
        '@type': 'ImageObject',
        url: 'https://anthonymineo.com/content/images/2018/08/me.jpg',
        width: 240,
        height: 240,
      },
      url: 'https://anthonymineo.com',
      sameAs: ['https://twitter.com/mineo27'],
    },
    headline: meta.title,
    url: `https://anthonymineo.com${pathname}/`,
    datePublished: meta.date,
    dateModified: meta.updated,
    image: {
      '@type': 'ImageObject',
      url: `https://anthonymineo.com${meta.image}`,
      width: 1200,
      height: 600,
    },
    keywords: meta.tags.map((tag) => tag.name).join(', '),
    description: meta.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://anthonymineo.com/',
    },
  }
}

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  const postIndex = posts.findIndex((post) => post.link === router.pathname)
  const previous = posts[postIndex + 1]
  const next = posts[postIndex - 1]
  const isAmp = useAmp()

  return (
    <article className="xl:divide-y xl:divide-gray-200">
      <Head>
        <title>{meta.title} – AnthonyMineo.com</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://anthonymineo.com${router.pathname}/`} />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />

        <meta property="article:published_time" content={meta.date} />
        <meta property="article:modified_time" content={meta.updated} />

        {meta.tags.map((tag, i) => (
          <meta key={`tag-${i}`} property="article:tag" content={tag.name} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mineo27" />
        <meta name="twitter:creator" content="@mineo27" />
        <meta name="twitter:title" content={`${meta.title} – AnthonyMineo.com`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:url" content={`https://anthonymineo.com${router.pathname}/`} />
        <meta name="twitter:image" content={`https://anthonymineo.com${meta.image}`} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Anthony Mineo" />
        <meta name="twitter:label2" content="Filed under" />
        <meta name="twitter:data2" content={meta.tags.map((tag) => tag.name).join(', ')} />

        <meta property="og:site_name" content="Anthony Mineo" />
        <meta property="og:url" content={`https://anthonymineo.com${router.pathname}/`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – AnthonyMineo.com`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://anthonymineo.com${meta.image}`} />
        <script
          key={`jsonld-${meta.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(makeJSONSchema(meta, router.pathname)),
          }}
        />
        {/* {isAmp && (
					<style jsx global>
						{globalStyles}
					</style>
				)} */}
      </Head>
      <header className="pt-6 xl:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
              </dd>
            </div>
          </dl>
          <div className="mx-auto max-w-3xl xl:px-5">
            <PageTitle>{meta.title}</PageTitle>

            <div className="pt-10">
              <dl>
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-12 space-y-8">
                    {meta.authors.map((author) => (
                      <li key={author.twitter} className="flex items-center space-x-2">
                        {isAmp ? (
                          <amp-img
                            src={author.avatar}
                            alt={author.name}
                            width="80"
                            height="80"
                            layout="fixed"
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <img
                            src={author.avatar}
                            alt={author.name}
                            className="w-10 h-10 rounded-full"
                          />
                        )}
                        <dl className="text-left pl-1 text-sm font-medium leading-5 whitespace-no-wrap">
                          <dt className="sr-only">Name</dt>
                          <dd className="text-gray-900">{author.name}</dd>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            <a
                              href={`https://twitter.com/${author.twitter}`}
                              className="text-indigo-500 hover:text-indigo-600"
                            >
                              {author.twitter}
                            </a>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </header>
      <div
        className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        {/* <div className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
					<h2 className="text-xs tracking-wide uppercase text-gray-500 mb-2">Article Tags</h2>
					<Tags
						tags={meta.tags}
						className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600"
					/>
				</div> */}

        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
          {meta.repo && (
            <div className="bg-white shadow sm:rounded-lg border-l-4">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Source Code Available
                </h3>
                <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                  <p>Want to check out the code repo for this post?</p>
                </div>
                <div className="mt-3 text-sm leading-5">
                  <a
                    href={meta.repo}
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                  >
                    Find it on GitHub &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          <div className="pt-6 pb-10 xl:pt-11">
            <h2 className="text-xs tracking-wide uppercase text-gray-500 mb-2">Article Tags</h2>
            <Tags
              tags={meta.tags}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800 hover:text-indigo-600"
            />
          </div>

          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500 mb-2">
                    Next Article
                  </h2>
                  <div className="text-indigo-500 hover:text-indigo-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500 mb-2">
                    Previous Article
                  </h2>
                  <div className="text-indigo-500 hover:text-indigo-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/">
              <a className="text-indigo-500 hover:text-indigo-600">&larr; Home</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
