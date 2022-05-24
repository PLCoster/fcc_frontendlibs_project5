import { useState, useMemo } from 'react';

// import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from './styles/Timer.module.css';
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

  // Memoised creation of detailed Session History
  const phaseHistory = useMemo(() => {
    return history.map(([phaseName, phaseSecs, phaseStart, phaseEnd]) => {
      return (
        <li>
          {phaseName}: StartTime:{' '}
          {new Date(phaseStart).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </li>
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
        <Row className="mt-3">
          <Col>
            <ul>{phaseHistory.length ? phaseHistory : 'No History Yet!'}</ul>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default HistoryDisplay;
