import { useState } from 'react';

import Button from 'react-bootstrap/Button';

function Timer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStartTime, setTimerStartTime] = useState(null);
  const [currentTimerSeconds, setCurrentTimer] = useState(300);

  const handleResetClick = () => {
    setBreakLength(5);
    setSessionLength(25);
  };

  // Handler to control updates to session and break length
  const handleTimerLengthChange = (increment, timerValue, timerSetter) => {
    const newTimerValue = timerValue + increment;

    if (newTimerValue > 0 && newTimerValue < 61) {
      timerSetter(newTimerValue);
    }
  };

  const handleTimerStopStart = () => {
    const newTimerRunning = !timerRunning;

    // Start timer when switched on
    if (newTimerRunning) {
      console.log('Starting timer at: ', Date.now());
    }

    setTimerRunning(newTimerRunning);
  };

  return (
    <>
      <h1>25 + 5 Clock</h1>
      {/* BREAK LENGTH CONTROLS */}
      <h4 id="break-label">
        Break Length:
        <Button
          id="break-decrement"
          onClick={() => {
            console.log('decrementing break ');
            handleTimerLengthChange(-1, breakLength, setBreakLength);
          }}
        >
          <i className="bi bi-arrow-down-circle-fill" />
        </Button>
        <span id="break-length">{breakLength}</span>
        <Button
          id="break-increment"
          onClick={() => {
            console.log('incrementing break ');
            handleTimerLengthChange(1, breakLength, setBreakLength);
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
          onClick={() =>
            handleTimerLengthChange(-1, sessionLength, setSessionLength)
          }
        >
          <i className="bi bi-arrow-down-circle-fill" />
        </Button>
        <span id="session-length">{sessionLength}</span>
        <Button
          id="session-increment"
          onClick={() =>
            handleTimerLengthChange(1, sessionLength, setSessionLength)
          }
        >
          <i className="bi bi-arrow-up-circle-fill" />
        </Button>
      </h4>

      {/* TIMER */}
      <div className="timer-clock">
        <h4 id="timer-label">Session</h4>
        <h2 id="time-left">
          {timerRunning
            ? `${Math.floor(currentTimerSeconds / 60)}:${
                currentTimerSeconds - 60 * Math.floor(currentTimerSeconds / 60)
              }`
            : `${sessionLength}:00`}
        </h2>
        <Button id="start_stop" onClick={handleTimerStopStart}>
          Start / Stop
        </Button>
        <Button id="reset" onClick={handleResetClick}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default Timer;
