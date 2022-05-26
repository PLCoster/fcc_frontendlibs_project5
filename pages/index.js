import Head from 'next/head';

import Timer from '../components/Timer';

const basePrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Pomodoro Timer App" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={basePrefix + '/favicons/apple-touch-icon.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={basePrefix + '/favicons/favicon-32x32.png'}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={basePrefix + '/favicons/favicon-16x16.png'}
        />
        <link rel="manifest" href={basePrefix + '/site.webmanifest'} />
      </Head>

      <Timer />
    </>
  );
}
