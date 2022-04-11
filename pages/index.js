import styles from '../styles/Home.module.css';

import Head from 'next/head';

import NavBar from '../components/NavBar';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <>
      <div className="app-container" />
      <Head>
        <title>25 + 5 Clock</title>
        <meta name="description" content="Pomodoro Timer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Timer />
    </>
  );
}
