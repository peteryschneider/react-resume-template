import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://www.peteryschneider.com';
const SITE_NAME = 'Peter Schneider';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath} = useRouter();
  // strip any ?query or #hash so the canonical URL is clean
  const pathname = asPath.split(/[?#]/)[0];
  const url = `${SITE_URL}${pathname}`; // home page -> https://www.peteryschneider.com/
  const isHomePage = pathname === '/';

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  };

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Peter Schneider',
    url: `${SITE_URL}/`,
    jobTitle: 'AI and Machine Learning Engineer',
    knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
    worksFor: {
      '@type': 'Organization',
      name: 'Northrop Grumman',
      url: 'https://www.northropgrumman.com',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of California, Los Angeles',
        alternateName: 'UCLA',
        url: 'https://www.ucla.edu',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Georgia Institute of Technology',
        alternateName: 'Georgia Tech',
        url: 'https://www.gatech.edu',
      },
    ],
    homeLocation: {'@type': 'Place', name: 'Manhattan Beach, California'},
    // TODO: replace with your real profile URLs; delete any you don't have
    sameAs: [
      'https://www.linkedin.com/in/peteryschneider/',
      'https://github.com/peteryschneider',
      'https://scholar.google.com/citations?user=GZxt4WMAAAAJ&hl=en',
    ],
  };

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
        <meta content="website" property="og:type" />
        <meta content={SITE_NAME} property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />

        {/* Twitter / X */}
        <meta content="summary" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />

        {/* Structured data (home page only): site name + who the site is about */}
        {isHomePage && (
          <>
            <script
              dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
              key="website-jsonld"
              type="application/ld+json"
            />
            <script
              dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
              key="person-jsonld"
              type="application/ld+json"
            />
          </>
        )}
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
