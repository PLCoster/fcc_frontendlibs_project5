import Head from 'next/head';

const basePrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
      <link rel="icon" href={basePrefix + '/favicons' + getIconFileName()} />
    </Head>
  );
}

export default HeadUpdater;
