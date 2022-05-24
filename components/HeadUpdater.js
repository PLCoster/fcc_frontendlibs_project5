import Head from 'next/head';

function HeadUpdater({ timerSeconds, timerPhase, timerRunning }) {
  const getIconFileName = () => {
    if (timerPhase === 'Session') {
      return timerRunning ? '/session-running.ico' : '/session-paused.ico';
    } else {
      return timerRunning ? '/break-running.ico' : '/break-paused.ico';
    }
  };

  return (
    <Head>
      <title>{`${timerSeconds} ${timerPhase}  - Pomo-do-it`}</title>
      <link rel="icon" href={'/favicons' + getIconFileName()} />
    </Head>
  );
}

export default HeadUpdater;
