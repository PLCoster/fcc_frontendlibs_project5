import styles from '../styles/Home.module.css';

import Head from 'next/head';

import Timer from '../components/Timer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Pomodoro Timer App" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Timer />
    </>
  );
}
