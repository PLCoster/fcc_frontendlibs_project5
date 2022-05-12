import { useMemo } from 'react';

// import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styles from './styles/HistoryDisplay.module.css';

function HistoryDisplay({ history }) {
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
  });

  return (
    <Container className={styles.historyDisplayContainer}>
      <h3>Session History:</h3>
      <Row>
        <Col>
          <h5>Session Time: {Math.floor(totalSessionSecs / 60)} minutes</h5>
          <h5>Break Time: {Math.floor(totalBreakSecs / 60)} minutes</h5>
        </Col>
        <Col>
          <ul>{phaseHistory}</ul>
        </Col>
      </Row>
    </Container>
  );
}

export default HistoryDisplay;
