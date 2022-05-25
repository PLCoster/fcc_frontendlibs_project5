import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../pages/index';
import '@testing-library/jest-dom';

describe('App', () => {
  // Use Fake Timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders the Apps heading', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: /pomo-do-it/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('meets requirements of User Story 1: renders a break-length label', () => {
    render(<App />);

    const breakLengthLabel = screen.getByRole('heading', {
      name: /break length:/i,
    });

    expect(breakLengthLabel).toBeInTheDocument();
  });

  it('meets requirements of User Story 2: renders a session-length label', () => {
    render(<App />);

    const breakLengthLabel = screen.getByRole('heading', {
      name: /session length:/i,
    });

    expect(breakLengthLabel).toBeInTheDocument();
  });

  it('meets requirements of User Story 3: renders controls to decrement session and break lengths', () => {
    render(<App />);

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    const breakDecrementButton = screen.getByTitle(/decrement break length/i);

    expect(sessionDecrementButton).toBeInTheDocument();
    expect(breakDecrementButton).toBeInTheDocument();
  });

  it('meets requirements of User Story 4: renders controls to increment session and break lengths', () => {
    render(<App />);

    const sessionIncrementButton = screen.getByTitle(
      /increment session length/i
    );

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    expect(sessionIncrementButton).toBeInTheDocument();
    expect(breakIncrementButton).toBeInTheDocument();
  });

  it('meets requirements of User Story 5: renders an element displaying the break length with initial value of 5', () => {
    render(<App />);

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(breakLengthElement.innerHTML).toBe('5');
  });

  it('meets requirements of User Story 6: renders an element displaying the session length with initial value of 25', () => {
    render(<App />);

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('25');
  });

  it('meets requirements of User Story 7: renders an element that displays the current timer phase, starting with "Session"', () => {
    render(<App />);

    const currentPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    expect(currentPhaseLabel).toBeInTheDocument();
  });

  it('meets requirements of User Story 8: renders an element that displays the remaining time in the current phase, initialised to 25:00', () => {
    render(<App />);

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');
  });

  it('meets requirements of User Story 9: renders a button to start/stop the timer', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    expect(startButton).toBeInTheDocument();
  });

  it('meets requirements of User Story 10: renders a button to reset the timer', () => {
    render(<App />);

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    expect(resetButton).toBeInTheDocument();
  });

  it('meets requirements of User Story 11: clicking the reset button resets the timer to initial conditions', () => {
    // TODO
    render(<App />);

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    expect(resetButton).toBeInTheDocument();
  });

  it('TEST OF FAKE TIMERS', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    // See https://reactjs.org/link/wrap-tests-with-act
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(1000);
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });
    expect(timerDisplay.innerHTML).toBe('24:59');
  });
});
