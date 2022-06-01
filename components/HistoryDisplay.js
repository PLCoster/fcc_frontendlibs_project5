import { useState, useMemo } from 'react';

// import Head from 'next/head';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

import styles from './styles/HistoryDisplay.module.css';
import buttonStyles from './styles/TimerButtons.module.css';

function HistoryDisplay({ timerPhase, history, handleClearHistoryClick }) {
  const [displayDetailedHistory, setDisplayDetailedHistory] = useState(false);

  // Memoised summation of total seconds in Sessions and Breaks
  const [totalSessionSecs, totalBreakSecs] = useMemo(() => {
    return history.reduce(
      ([sessSecs, breakSecs], [phaseName, phaseSecs]) => {
        if (phaseName === 'Session') {
          sessSecs += phaseSecs;
        } else {
          breakSecs += phaseSecs;
        }
        return [sessSecs, breakSecs];
      },
      [0, 0]
    );
  }, [history]);

  const millisecondsToMinutes = (ms) => {
    return Math.floor(ms / (1000 * 60));
  };

  // Memoised creation of detailed Session History
  const phaseHistory = useMemo(() => {
    // Order history items from newest to oldest
    const newHistory = history.slice().reverse();
    return newHistory.map(([phaseName, phaseSecs, phaseStart, phaseEnd], i) => {
      return (
        <Row
          key={i}
          className={`${styles.historyItem} ${
            phaseName === 'Session'
              ? buttonStyles.onSessionFont
              : buttonStyles.onBreakFont
          } m-1 text-start`}
        >
          <Col xs={2}>
            <div
              className={`${styles.historyItemTitle} d-flex flex-column justify-content-center`}
            >
              {' '}
              <h6>{phaseName}</h6>
            </div>
          </Col>

          <Col xs={4}>
            <div className="d-flex flex-column align-items-start">
              <p className="m-1 small">
                Start:{' '}
                {new Date(phaseStart).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className="m-1 small">
                End:{' '}
                {new Date(phaseEnd).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </Col>

          <Col xs={6}>
            <div className="d-flex align items-center flex-column">
              <p className="m-1 small">
                Actual Duration: {millisecondsToMinutes(phaseEnd - phaseStart)}{' '}
                min(s)
              </p>
              <p className="m-1 small">
                Timed Duration: {Math.floor(phaseSecs / 60)} min(s)
              </p>
            </div>
          </Col>
        </Row>
      );
    });
  }, [history]);

  return (
    <>
      <h4>Session History:</h4>

      {/* OVERALL SESSION HISTORY DISPLAY */}
      <Row>
        <Col>
          <h6>Session Time: {Math.floor(totalSessionSecs / 60)} min(s)</h6>
        </Col>
        <Col>
          <h6>Break Time: {Math.floor(totalBreakSecs / 60)} min(s)</h6>
        </Col>
      </Row>

      <Row className={'justify-content-center mt-2'}>
        <Col xs="auto">
          <Button
            id="display_detailed_history"
            className={`${buttonStyles.timerButton} ${
              timerPhase === 'Session'
                ? buttonStyles.onSessionFont
                : buttonStyles.onBreakFont
            } btn-sm`}
            title={`${
              !displayDetailedHistory ? 'Display ' : 'Hide '
            } Detailed History`}
            onClick={() => setDisplayDetailedHistory(!displayDetailedHistory)}
            onMouseLeave={(e) => {
              e.target.blur();
            }}
          >
            {!displayDetailedHistory ? 'Show ' : 'Hide '} Details
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            id="clear_history"
            className={`${buttonStyles.timerButton} ${
              timerPhase === 'Session'
                ? buttonStyles.onSessionFont
                : buttonStyles.onBreakFont
            } btn-sm`}
            title="Clear Session History"
            onClick={() => handleClearHistoryClick()}
            onMouseLeave={(e) => {
              e.target.blur();
            }}
          >
            Clear History
          </Button>
        </Col>
      </Row>

      {displayDetailedHistory ? (
        <div
          className={`${styles.detailedHistoryContainer} d-flex flex-column align-items-center mt-3 mb-3`}
        >
          {phaseHistory.length ? phaseHistory : 'No History Yet!'}
        </div>
      ) : null}
    </>
  );
}

export default HistoryDisplay;
