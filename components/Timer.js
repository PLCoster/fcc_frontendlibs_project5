import { useEffect, useRef, useState } from 'react';

import Head from 'next/head';
import { Container, Button } from 'react-bootstrap';

import styles from './styles/Timer.module.css';

function Timer() {
  const [breakLengthMins, setBreakLengthMins] = useState(5);
  const [sessionLengthMins, setSessionLengthMins] = useState(25);

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState(1500);
  const timerSecondsRemainingRef = useRef(1500); // Ref required to access state inside timeout
  const [currTimeoutID, setCurrTimeoutID] = useState(null);

  const [timerPhase, setTimerPhase] = useState('Session');
  const [swapPhase, setSwapPhase] = useState(false);

  // Handler to reset timer to initial state when Reset button is clicked
  const handleResetClick = () => {
    setBreakLengthMins(5);
    setSessionLengthMins(25);
    setTimerRunning(false);
    setTimerSecondsRemaining(1500);
    timerSecondsRemainingRef.current = 1500;
    setTimerPhase('Session');
    setSwapPhase(false);
  };

  // Handler to control updates to session and break length
  const handleTimerLengthChange = (increment, sessionName) => {
    const timerMins =
      sessionName === 'Session' ? sessionLengthMins : breakLengthMins;
    const setter =
      sessionName === 'Session' ? setSessionLengthMins : setBreakLengthMins;

    const newTimerMins = timerMins + increment;

    if (newTimerMins > 0 && newTimerMins < 61) {
      setter(newTimerMins);

      // Update current phase timer if timer is not running:
      if (!timerRunning && timerPhase === sessionName) {
        const newTimerSeconds = newTimerMins * 60;
        setTimerSecondsRemaining(newTimerSeconds);
        timerSecondsRemainingRef.current = newTimerSeconds;
      }
    }
  };

  const handleTimerStopStart = () => {
    console.log('handleTimerStopStart Trigerred');
    const newTimerRunning = !timerRunning;

    // Start timer when switched on, store timeout cancel function
    if (newTimerRunning) {
      console.log('Starting timer at: ', Date.now());
      handleTimerStart();
    }

    // When timer switched off, cancel current timeout:
    else {
      console.log('Stopping timer at: ', Date.now());
      clearTimeout(currTimeoutID);
    }

    setTimerRunning(newTimerRunning);
  };

  // Handler function to decrement timer seconds every second using setTimeout
  // More accurate timekeeping than setInterval or repeated 1000ms setTimeouts
  const handleTimerStart = () => {
    console.log('Setting up new timer!');
    let nextTickTime = Date.now() + 1000;
    let timeoutID = null;

    const timeoutFunction = () => {
      // Decrement Seconds Remaining Ref, use this to set the Seconds Remaining State
      timerSecondsRemainingRef.current -= 1;

      // Continue countdown on timer until it hits 0:
      if (timerSecondsRemainingRef.current >= 0) {
        setTimerSecondsRemaining(timerSecondsRemainingRef.current);
        nextTickTime += 1000;
        timeoutID = setTimeout(timeoutFunction, nextTickTime - Date.now());
        setCurrTimeoutID(timeoutID);
      } else {
        // When timer reaches 0, swap timer phase e.g. Session -> Break
        setSwapPhase(true);
      }
    };

    timeoutID = setTimeout(timeoutFunction, nextTickTime - Date.now());
    setCurrTimeoutID(timeoutID);
  };

  // Effect to handle swapping phase from e.g. Session -> Break when timer reaches 0
  useEffect(() => {
    if (swapPhase) {
      // Cancel current timeout
      clearTimeout(currTimeoutID);

      // Swap Timer Phase
      const newPhase = timerPhase === 'Session' ? 'Break' : 'Session';
      setTimerPhase(newPhase);

      // Start new timer
      timerSecondsRemainingRef.current =
        (newPhase === 'Session' ? sessionLengthMins : breakLengthMins) * 60;
      setTimerSecondsRemaining(timerSecondsRemainingRef.current);
      handleTimerStart();
      setSwapPhase(false);
    }
  }, [swapPhase]);

  // Format timer seconds to 'MM:SS' string for timer display
  const secondsFormatter = (seconds) => {
    return `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <Container
      className={`${styles.appContainer} ${
        timerPhase === 'Session' ? styles.onSession : styles.onBreak
      }`}
      fluid
    >
      <Head>
        <title>{`${secondsFormatter(
          timerSecondsRemaining
        )} ${timerPhase}  - Pomo-do-it`}</title>
      </Head>

      <h1>Pomo-do-it</h1>
      {/* BREAK LENGTH CONTROLS */}
      <h4 id="break-label">
        Break Length:
        <Button
          id="break-decrement"
          onClick={() => {
            console.log('decrementing break ');
            handleTimerLengthChange(-1, 'Break');
          }}
        >
          <i className="bi bi-arrow-down-circle-fill" />
        </Button>
        <span id="break-length">{breakLengthMins}</span>
        <Button
          id="break-increment"
          onClick={() => {
            console.log('incrementing break ');
            handleTimerLengthChange(1, 'Break');
          }}
        >
          <i className="bi bi-arrow-up-circle-fill" />
        </Button>
      </h4>

      {/* SESSION LENGTH CONTROLS */}
      <h4 id="session-label">
        Session Length:
        <Button
          id="session-decrement"
          onClick={() => handleTimerLengthChange(-1, 'Session')}
        >
          <i className="bi bi-arrow-down-circle-fill" />
        </Button>
        <span id="session-length">{sessionLengthMins}</span>
        <Button
          id="session-increment"
          onClick={() => handleTimerLengthChange(1, 'Session')}
        >
          <i className="bi bi-arrow-up-circle-fill" />
        </Button>
      </h4>

      {/* TIMER */}
      <div className="timer-clock">
        <h4 id="timer-label">{timerPhase}</h4>
        <h2 id="time-left">{secondsFormatter(timerSecondsRemaining)}</h2>
        <Button id="start_stop" onClick={handleTimerStopStart}>
          {timerRunning ? 'Stop' : 'Start'}
        </Button>
        <Button id="reset" onClick={handleResetClick}>
          Reset
        </Button>
      </div>
    </Container>
  );
}

export default Timer;
