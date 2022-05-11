import styles from '../styles/Home.module.css';

import Head from 'next/head';

import Timer from '../components/Timer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Pomodoro Timer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Timer />
    </>
  );
}
