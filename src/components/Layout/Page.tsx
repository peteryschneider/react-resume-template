import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

// 👇 Change these two
const SITE_URL = 'https://www.peteryschneider.com/'; // no trailing slash
const SITE_NAME = 'Peter Schneider';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath} = useRouter();
  // strip any ?query or #hash so the canonical URL is clean
  const pathname = asPath.split(/[?#]/)[0];
  const url = `${SITE_URL}${pathname}`;
  const isHomePage = pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        <link href={url} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={SITE_NAME} property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />

        {/* Tells Google what site name to show in search results (home page only) */}
        {isHomePage && (
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: SITE_NAME,
                alternateName: ['Peter Schneider AI', 'Peter Schneider UCLA', 'peteryschneider.com'],
                url: `${SITE_URL}/`,
              }),
            }}
            key="website-jsonld"
            type="application/ld+json"
          />
        )}
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;