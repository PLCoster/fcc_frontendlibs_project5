import { render, screen, act, fireEvent } from '@testing-library/react';
import App from '../pages/index';
import '@testing-library/jest-dom';

describe('App', () => {
  // JSDOM does not support loading or playback media
  // Stubs for test setup:
  beforeAll(() => {
    window.HTMLMediaElement.prototype.load = () => {
      /* do nothing */
    };
    window.HTMLMediaElement.prototype.play = () => {
      /* do nothing */
    };
    window.HTMLMediaElement.prototype.pause = () => {
      /* do nothing */
    };
    window.HTMLMediaElement.prototype.addTextTrack = () => {
      /* do nothing */
    };
  });

  // Use Fake Timers
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
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

    const initialPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    expect(initialPhaseLabel).toBeInTheDocument();
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

  it('meets requirements of User Story 11-1 : clicking the reset button resets the timer to initial conditions', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    // Advance time by 10 seconds
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(10000);
      breakIncrementButton.click();
    });

    const runningPhaseLabel = screen.getByRole('heading', {
      name: /session : running/i,
    });

    expect(runningPhaseLabel).toBeInTheDocument();

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('24:50');

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(breakLengthElement.innerHTML).toBe('6');

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    // Click Reset Button, everything should reset
    act(() => {
      resetButton.click();
    });

    const initialPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    expect(initialPhaseLabel).toBeInTheDocument();
    expect(timerDisplay.innerHTML).toBe('25:00');
    expect(sessionLengthElement.innerHTML).toBe('25');
    expect(breakLengthElement.innerHTML).toBe('5');
  });

  it('meets requirements of User Story 11-2 : clicking the reset button resets the timer to initial conditions 2', () => {
    render(<App />);

    const skipButton = screen.getByRole('button', {
      name: /skip to break/i,
    });

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    // Skip to break phase of timer (paused)
    act(() => {
      skipButton.click();
      breakIncrementButton.click();
      sessionDecrementButton.click();
    });

    const breakPhaseLabel = screen.getByRole('heading', {
      name: /break : paused/i,
    });

    expect(breakPhaseLabel).toBeInTheDocument();

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('06:00');

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(breakLengthElement.innerHTML).toBe('6');

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('24');

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    // Click Reset Button, everything should reset
    act(() => {
      resetButton.click();
    });

    const initialPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    expect(initialPhaseLabel).toBeInTheDocument();
    expect(timerDisplay.innerHTML).toBe('25:00');
    expect(sessionLengthElement.innerHTML).toBe('25');
    expect(breakLengthElement.innerHTML).toBe('5');
  });

  it('meets requirements of User Story 12 : clicking the decrement break length button decrements the value by 1', () => {
    render(<App />);

    const breakDecrementButton = screen.getByTitle(/decrement break length/i);

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(breakLengthElement.innerHTML).toBe('5');

    act(() => {
      breakDecrementButton.click();
    });

    expect(breakLengthElement.innerHTML).toBe('4');

    act(() => {
      breakDecrementButton.click();
    });

    expect(breakLengthElement.innerHTML).toBe('3');
  });

  it('meets requirements of User Story 13 : clicking the increment break length button increments the value by 1', () => {
    render(<App />);

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(breakLengthElement.innerHTML).toBe('5');

    act(() => {
      breakIncrementButton.click();
    });

    expect(breakLengthElement.innerHTML).toBe('6');

    act(() => {
      breakIncrementButton.click();
    });

    expect(breakLengthElement.innerHTML).toBe('7');
  });

  it('meets requirements of User Story 14 : clicking the decrement session length button decrements the value by 1', () => {
    render(<App />);

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('25');

    act(() => {
      sessionDecrementButton.click();
    });

    expect(sessionLengthElement.innerHTML).toBe('24');

    act(() => {
      sessionDecrementButton.click();
    });

    expect(sessionLengthElement.innerHTML).toBe('23');
  });

  it('meets requirements of User Story 15 : clicking the increment session length button increments the value by 1', () => {
    render(<App />);

    const sessionIncrementButton = screen.getByTitle(
      /increment session length/i
    );

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('25');

    act(() => {
      sessionIncrementButton.click();
    });

    expect(sessionLengthElement.innerHTML).toBe('26');

    act(() => {
      sessionIncrementButton.click();
    });

    expect(sessionLengthElement.innerHTML).toBe('27');
  });

  it('meets requirements of User Story 16 : session or break lengths cannot be <= 0', () => {
    render(<App />);

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    const breakDecrementButton = screen.getByTitle(/decrement break length/i);

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('25');

    expect(breakLengthElement.innerHTML).toBe('5');

    // Click the decrement buttons 100 times
    for (let i = 0; i < 100; i += 1) {
      act(() => sessionDecrementButton.click());
      act(() => breakDecrementButton.click());
    }

    expect(sessionLengthElement.innerHTML).toBe('1');
    expect(breakLengthElement.innerHTML).toBe('1');
  });

  it('meets requirements of User Story 17 : session or break lengths cannot be > 60', () => {
    render(<App />);

    const sessionIncrementButton = screen.getByTitle(
      /increment session length/i
    );

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    const sessionLengthElement = screen.getByTitle(/current session length/i, {
      exact: true,
    });

    const breakLengthElement = screen.getByTitle(/current break length/i, {
      exact: true,
    });

    expect(sessionLengthElement.innerHTML).toBe('25');

    expect(breakLengthElement.innerHTML).toBe('5');

    // Click the increment buttons 100 times
    for (let i = 0; i < 100; i += 1) {
      act(() => sessionIncrementButton.click());
      act(() => breakIncrementButton.click());
    }

    expect(sessionLengthElement.innerHTML).toBe('60');
    expect(breakLengthElement.innerHTML).toBe('60');
  });

  it('meets requirements of User Story 18 : first clicking the start button starts the timer from the given session length time', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    act(() => {
      startButton.click();
      jest.advanceTimersByTime(17000);
    });

    expect(timerDisplay.innerHTML).toBe('24:43');

    act(() => {
      resetButton.click();
    });

    const sessionIncrementButton = screen.getByTitle(
      /increment session length/i
    );

    for (let i = 0; i < 7; i += 1) {
      act(() => sessionIncrementButton.click());
    }

    act(() => {
      startButton.click();
      jest.advanceTimersByTime(17000);
    });

    expect(timerDisplay.innerHTML).toBe('31:43');

    act(() => {
      resetButton.click();
    });

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    for (let i = 0; i < 7; i += 1) {
      act(() => sessionDecrementButton.click());
    }

    act(() => {
      startButton.click();
      jest.advanceTimersByTime(17000);
    });

    expect(timerDisplay.innerHTML).toBe('17:43');
  });

  it('meets requirements of User Story 19 : the value on the timer is displayed in mm:ss format and decrements by a value of 1s every 1000ms', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    let displayedSeconds = 60;

    act(() => {
      startButton.click();
    });

    for (let i = 0; i < 60; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      displayedSeconds -= 1;
      expect(timerDisplay.innerHTML).toBe(
        `24:${displayedSeconds.toString().padStart(2, '0')}`
      );
    }
  });

  it('meets requirements of User Story 20 : if the timer is running and the pause button is clicked, the countdown should pause', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    let displayedSeconds = 60;

    // Start timer, run for 10 seconds
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(10000);
    });

    // Pause the timer
    act(() => {
      startButton.click();
    });

    expect(timerDisplay.innerHTML).toBe('24:50');

    const initialPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    expect(initialPhaseLabel).toBeInTheDocument();

    // Advance clock for 10 seconds, timer display should not change
    for (let i = 0; i < 10; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(timerDisplay.innerHTML).toBe('24:50');
    }
  });

  it('meets requirements of User Story 21 : if the timer is running, then paused, then started again, the countdown should resume from where it was paused', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    // Start timer, run for 10 seconds
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(10000);
    });

    // Pause the timer
    act(() => {
      startButton.click();
    });

    expect(timerDisplay.innerHTML).toBe('24:50');

    const initialPhaseLabel = screen.getByRole('heading', {
      name: /session : paused/i,
    });

    expect(initialPhaseLabel).toBeInTheDocument();

    // Advance clock for 10 seconds, timer display should not change
    for (let i = 0; i < 10; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(timerDisplay.innerHTML).toBe('24:50');
    }

    let secondsRemaining = 50;

    // Restart the timer:
    act(() => {
      startButton.click();
    });

    for (let i = 0; i < 10; i += 1) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      secondsRemaining -= 1;
      expect(timerDisplay.innerHTML).toBe(`24:${secondsRemaining}`);
    }
  });

  it('meets requirements of User Stories 22 and 23 : when a session countdown reaches 0, timer switches to a break phase, and the timer label updates to show this', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    // Start timer, run for 25 minutes
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(25 * 60 * 1000);
    });

    // Timer has reached 00:00, stil in session phase
    expect(timerDisplay.innerHTML).toBe('00:00');

    const runningSessionLabel = screen.getByRole('heading', {
      name: /session : running/i,
    });

    expect(runningSessionLabel).toBeInTheDocument();

    // Run for 1 more second, it should switch to break:
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('05:00');

    const runningBreakLabel = screen.getByRole('heading', {
      name: /break : running/i,
    });

    expect(runningBreakLabel).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('04:59');
  });

  it('meets requirements of User Stories 22 and 23 : when a session countdown reaches 0, timer switches to a break phase (with initial time set by the given Break Length time), and the timer label updates to show a break has started', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const breakIncrementButton = screen.getByTitle(/increment break length/i);

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    // Increment Break to 6 mins, start timer, run for 25 minutes
    act(() => {
      breakIncrementButton.click();
      startButton.click();
      jest.advanceTimersByTime(25 * 60 * 1000);
    });

    // Timer has reached 00:00, stil in session phase
    expect(timerDisplay.innerHTML).toBe('00:00');

    const runningSessionLabel = screen.getByRole('heading', {
      name: /session : running/i,
    });

    expect(runningSessionLabel).toBeInTheDocument();

    // Run for 1 more second, it should switch to break:
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('06:00');

    const runningBreakLabel = screen.getByRole('heading', {
      name: /break : running/i,
    });

    expect(runningBreakLabel).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('05:59');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('05:58');
  });

  it('meets requirements of User Stories 24 and 25 : when a break countdown reaches 0, timer switches to a session phase (with initial time set by the given Session Length time), and the timer label updates to show a session has started', () => {
    render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const skipButton = screen.getByRole('button', { name: /skip to break/i });

    const sessionDecrementButton = screen.getByTitle(
      /decrement session length/i
    );

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    expect(timerDisplay.innerHTML).toBe('25:00');

    // Decrement Session to 24 mins, skip to break phase
    act(() => {
      sessionDecrementButton.click();
      skipButton.click();
    });

    // Start timer running, wait for 5 minutes
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(5 * 60 * 1000);
    });

    // Timer has reached 00:00, still in break phase
    expect(timerDisplay.innerHTML).toBe('00:00');

    const runningSessionLabel = screen.getByRole('heading', {
      name: /break : running/i,
    });

    expect(runningSessionLabel).toBeInTheDocument();

    // Run for 1 more second, it should switch to session:
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('24:00');

    const runningBreakLabel = screen.getByRole('heading', {
      name: /session : running/i,
    });

    expect(runningBreakLabel).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('23:59');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(timerDisplay.innerHTML).toBe('23:58');
  });

  it('meets requirements of User Stories 26, 27 and 28 : when a phase countdown reaches 00:00, an audio element plays an audio clip lasting at least 1 second', () => {
    const { container: app } = render(<App />);

    const startButton = screen.getByRole('button', {
      name: /start/i,
    });

    const timerDisplay = screen.getByTitle(/time left in this phase/i, {
      exact: true,
    });

    const alarmAudio = screen.getByTitle(/timer phase end beep audio/i);

    expect(timerDisplay.innerHTML).toBe('25:00');

    // Start timer running, wait for 25 minutes
    act(() => {
      startButton.click();
      jest.advanceTimersByTime(25 * 60 * 1000);
    });

    // Timer has reached 00:00, still in session phase
    expect(timerDisplay.innerHTML).toBe('00:00');

    const runningSessionLabel = screen.getByRole('heading', {
      name: /session : running/i,
    });

    expect(runningSessionLabel).toBeInTheDocument();

    // Audio clip should not yet be playing:
    expect(alarmAudio).toHaveAttribute('data-playing', 'false');

    // Advance 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Audio clip should start playing:
    expect(alarmAudio).toHaveAttribute('data-playing', 'true');

    // Audio clip lasts at least one second:
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(alarmAudio).toHaveAttribute('data-playing', 'true');

    // Audio clip stops playing after ~ 2 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Ideally we would test that the audio stops playing, however
    // jsdom does not support any loading or playback media operations, so we can't test this
    // const alarmAudio2 = app.querySelector('#beep');

    // expect(alarmAudio2).toHaveAttribute('data-playing', 'false');

    // expect(timerDisplay.innerHTML).toBe('4:53');
  });

  // // Example Test Involving Fake Timers
  // it('TEST OF FAKE TIMERS', () => {
  //   render(<App />);

  //   const startButton = screen.getByRole('button', {
  //     name: /start/i,
  //   });

  //   // See https://reactjs.org/link/wrap-tests-with-act
  //   act(() => {
  //     startButton.click();
  //     jest.advanceTimersByTime(1000);
  //   });

  //   const timerDisplay = screen.getByTitle(/time left in this phase/i, {
  //     exact: true,
  //   });

  //   expect(timerDisplay.innerHTML).toBe('24:59');
  // });
});
