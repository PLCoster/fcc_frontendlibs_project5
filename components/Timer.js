import { useEffect, useRef, useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import HeadUpdater from './HeadUpdater';
import HistoryDisplay from './HistoryDisplay';

import styles from './styles/Timer.module.css';
import buttonStyles from './styles/TimerButtons.module.css';

function Timer() {
  const [breakLengthMins, setBreakLengthMins] = useState(5);
  const [sessionLengthMins, setSessionLengthMins] = useState(25);

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState(1500);
  const timerSecondsRemainingRef = useRef(1500); // Ref required to access state inside timeout
  const [currTimeoutID, setCurrTimeoutID] = useState(null);

  const [timerPhase, setTimerPhase] = useState('Session');
  const [swapPhase, setSwapPhase] = useState(false);

  // Refs for audio elements
  const buttonAudioRef = useRef();
  const alarmAudioRef = useRef();

  // History-Related State
  const currTimeElapsedRef = useRef(0);
  const currPhaseStartRef = useRef(null);
  const [phaseHistory, setphaseHistory] = useState([]);

  // Handler to reset timer to initial state when Reset button is clicked
  const handleResetClick = () => {
    setBreakLengthMins(5);
    setSessionLengthMins(25);
    setTimerSecondsRemaining(1500);
    timerSecondsRemainingRef.current = 1500;
    currTimeElapsedRef.current = 0;
    currPhaseStartRef.current = null;

    clearTimeout(currTimeoutID);
    setTimerRunning(false);

    setTimerPhase('Session');
    setSwapPhase(false);

    alarmAudioRef.current.pause();
    alarmAudioRef.current.currentTime = 0;
  };

  // Handler to clear all history data held
  const handleClearHistoryClick = () => {
    setphaseHistory([]);
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
    // If no start time for the current timer, create one:
    if (!currPhaseStartRef.current) {
      currPhaseStartRef.current = Date.now();
    }

    let nextTickTime = Date.now() + 1000;
    let timeoutID = null;

    const timeoutFunction = () => {
      // Decrement Seconds Remaining Ref, use this to set the Seconds Remaining State
      timerSecondsRemainingRef.current -= 1;
      currTimeElapsedRef.current += 1;

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
      // Play Alarm Audio Clip
      playAudio(alarmAudioRef);

      // Cancel current timeout
      clearTimeout(currTimeoutID);

      // Update Session History
      // Note: currTimeElapsed overcounts by 1 second
      setphaseHistory([
        ...phaseHistory,
        [
          timerPhase,
          currTimeElapsedRef.current - 1,
          currPhaseStartRef.current,
          Date.now(),
        ],
      ]);

      // Swap Timer Phase
      const newPhase = timerPhase === 'Session' ? 'Break' : 'Session';
      setTimerPhase(newPhase);

      // Start new timer
      timerSecondsRemainingRef.current =
        (newPhase === 'Session' ? sessionLengthMins : breakLengthMins) * 60;
      currTimeElapsedRef.current = 0;
      currPhaseStartRef.current = null;
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

  // Function to play the given audio element from the start
  const playAudio = (audioRef) => {
    // Reset the Audio Clip if playing then play it:
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <Container
      className={`${styles.appContainer} ${
        timerPhase === 'Session' ? styles.onSession : styles.onBreak
      }`}
      fluid
    >
      <HeadUpdater
        timerSeconds={secondsFormatter(timerSecondsRemaining)}
        timerPhase={timerPhase}
        timerRunning={timerRunning}
      />

      <Row className="justify-content-center">
        <Col xs="auto">
          <Container className={styles.timerContainer}>
            <h1 className={'display-3'}>Pomo-do-it</h1>

            <hr />

            {/* PHASE LENGTH CONTROLS */}
            <Row className="justify-content-center">
              <Col xs="auto">
                {/* SESSION LENGTH CONTROLS */}
                <h5 id="session-label" className={styles.phaseLengthContainer}>
                  Session Length:{'  '}
                  <Button
                    id="session-decrement"
                    title={'Decrement Session Length'}
                    onClick={() => handleTimerLengthChange(-1, 'Session')}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                    className={styles.phaseLengthButton}
                  >
                    <i className="bi bi-arrow-down-circle-fill" />
                  </Button>
                  <span id="session-length">{sessionLengthMins}</span>
                  <Button
                    id="session-increment"
                    title={'Increment Session Length'}
                    onClick={() => handleTimerLengthChange(1, 'Session')}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                    className={styles.phaseLengthButton}
                  >
                    <i className="bi bi-arrow-up-circle-fill" />
                  </Button>
                </h5>
              </Col>

              <Col xs="auto">
                {/* BREAK LENGTH CONTROLS */}
                <h5 id="break-label" className={styles.phaseLengthContainer}>
                  Break Length:{'  '}
                  <Button
                    id="break-decrement"
                    className={styles.phaseLengthButton}
                    title={'Decrement Break Length'}
                    onClick={(e) => {
                      console.log('decrementing break ');
                      handleTimerLengthChange(-1, 'Break');
                    }}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                  >
                    <i className="bi bi-arrow-down-circle-fill" />
                  </Button>
                  <span id="break-length">{breakLengthMins}</span>
                  <Button
                    id="break-increment"
                    className={styles.phaseLengthButton}
                    title={'Increment Break Length'}
                    onClick={() => {
                      console.log('incrementing break ');
                      handleTimerLengthChange(1, 'Break');
                    }}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                  >
                    <i className="bi bi-arrow-up-circle-fill" />
                  </Button>
                </h5>
              </Col>
            </Row>

            <hr />
            {/* TIMER */}
            <div className={styles.timerClockContainer}>
              <h3 id="timer-label">
                {`${timerPhase} : ${timerRunning ? 'Running' : 'Paused'}`}
              </h3>
              <h5>
                {` ${
                  timerPhase === 'Session' ? 'Time to focus!' : 'Time to relax!'
                }`}
              </h5>
              <h2 id="time-left" className={'display-1'}>
                {secondsFormatter(timerSecondsRemaining)}
              </h2>

              {/* TIMER CONTROLS */}
              <Row className={'justify-content-center'}>
                <Col xs="auto">
                  <Button
                    id="start_stop"
                    className={`${buttonStyles.timerButton} ${
                      timerPhase === 'Session'
                        ? buttonStyles.onSessionFont
                        : buttonStyles.onBreakFont
                    }`}
                    title={timerRunning ? 'Pause Current Timer' : 'Start Timer'}
                    onClick={() => {
                      handleTimerStopStart();
                      playAudio(buttonAudioRef);
                    }}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                  >
                    {timerRunning ? 'Pause' : 'Start'}
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    id="reset"
                    className={`${buttonStyles.timerButton} ${
                      timerPhase === 'Session'
                        ? buttonStyles.onSessionFont
                        : buttonStyles.onBreakFont
                    }`}
                    title={'Reset Timer to Initial Settings'}
                    onClick={handleResetClick}
                    onMouseLeave={(e) => {
                      e.target.blur();
                    }}
                  >
                    Reset
                  </Button>
                </Col>
              </Row>
            </div>

            <hr />

            <HistoryDisplay
              timerPhase={timerPhase}
              history={phaseHistory}
              handleClearHistoryClick={handleClearHistoryClick}
            />
          </Container>
        </Col>
      </Row>

      {/* SOUND EFFECTS */}
      <audio
        id="click"
        ref={buttonAudioRef}
        src={'/audio/fingersnap.mp3'}
      ></audio>
      <audio
        id="beep"
        ref={alarmAudioRef}
        src={'/audio/watch_alarm.mp3'}
      ></audio>
    </Container>
  );
}

export default Timer;
