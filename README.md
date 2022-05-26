# Free Code Camp: Front End Libs Project 5 - 25 + 5 Clock

## Pomo-do-it

### Project Aims:

The aim of this project was to build a Pomodoro Timer with functionality similar to: https://codepen.io/freeCodeCamp/full/XpKrrW

This project was built using the following technologies:

- **JavaScript** with **[Node.js](https://nodejs.org/en/) / [NPM](https://www.npmjs.com/)** for package management
- **[React](https://reactjs.org/)** for application view with React Hooks to handle the application state
- **[React-Bootstrap](https://react-bootstrap.github.io/)** for react components with **[Bootstrap](https://getbootstrap.com/)** styles, along with some custom CSS
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** for icons
- **[Next.js](https://nextjs.org/)** as a React Framework to develop and build the project
- **[Jest](https://jestjs.io/)** and **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** for testing
- **[GitHub Actions](https://github.com/features/actions)** for automated CI/CD workflows

Drum Samples were provided by **[SampleSwap](https://sampleswap.org/)**

Styling was inspired by **[Pomofocus](https://pomofocus.io/)**

### Project Requirements:

- User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length").

- User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length").

- User Story #3: I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".

- User Story #4: I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".

- User Story #5: I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.

- User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25.

- User Story #7: I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").

- User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

- User Story #9: I can see a clickable element with a corresponding id="start_stop".

- User Story #10: I can see a clickable element with a corresponding id="reset".

- User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state.

- User Story #12: When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.

- User Story #13: When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.

- User Story #14: When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.

- User Story #15: When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.

- User Story #16: I should not be able to set a session or break length to <= 0.

- User Story #17: I should not be able to set a session or break length to > 60.

- User Story #18: When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.

- User Story #19: If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

- User Story #20: If the timer is running and I click the element with id="start_stop", the countdown should pause.

- User Story #21: If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

- User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

- User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

- User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

- User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

- User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".

- User Story #27: The audio element with id="beep" must be 1 second or longer.

- User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

### Project Writeup:

For the final Free Code Camp: Front End Libraries Project, I decided to build the project using the Next.js framework for React. The final project build is a static (i.e. serverless) website built in React, with application state controlled using React Hooks (`useState`, `useEffect`, `useRef`, `useMemo`).

Going beyond the required user stories above, Pomo-do-it allows users to:

- control whether the next phase of the timer starts automatically after the current one ends
- view the current time left, timer phase and status summary in the browser tab, even when the app is not currently in focus in the browser
- keep track of the total time spent productively and on breaks across all completed sessions in Session History
- view a detailed break down of all completed sessions, their start and end timer as well as real and timer durations in the Detailed History display
- adjust the volume level of the audio alert that plays when a session has ended (and also the volume of button clicks)

In addition, a basic unit test suite in Jest / React Testing Library has been created, covering User Stories #1 - # 26. (Note that User Stories #27 and #28 cannot be covered via these unit tests, as the test library does not support HTMLAudioElements - testing these would likely be possible using Cypress). The created tests are run as part of a Github Actions CI/CD workflow. When changes to the project are pushed to the main branch, the project dependencies are installed and the test suite is run. If the test suite completes successfully, a production build of the project is created, and then deployed onto GitHub pages (on the gh-pages branch).

### Project Files:

- `/public` - this folder contains all public content for the app, such as favicon images, the web manifest, and audio files used by the app.

- `/pages` - in the Next.js framework, pages are associated with routes in the app based on the file name. In this app there is only a single route (`/`), and the React components that build the page are in `index.js`.

  - the `_app.js` page file is a special component that wraps every other page. In this project this just renders the `NavBar` component on every page, and adds in the FCC testing script.
  - `index.js` is the only page in this application, it renders the `Timer` component.
  - `404.js` is a custom error page that is set to redirect users immediately to the app if reached.

- `/__tests__` contains the tests for the application:

  - `index.test.js` contains the React Testing Library unit tests for the application.

- `/styles` contains a global style sheet for the application.

### Components:

- `NavBar.js` is a presentational navbar component, providing links to other projects / sites.

- `Timer.js` is the major stateful component of the application. It contains various state variables for e.g. the length of Sessions, Breaks, the current time remaining on the given timer, whether or not the timer is running or paused, which phase ('Session' or 'Break') the timer is in, etc. It renders various controls in order to set the length of timer phases, start/stop, skip and reset the timer tom initial settings. When timer phases end, an array containing the history of all previous timer phases completed is updated. State variables and handler functions are passed to its child components (`HeadUpdater` and `HistoryDisplay`).

  - `HeadUpdater.js` is a small component that updates the information in the `<head>` element of the application using the Next.js `<Head>` component. This allows the current timer phase, status, and time remaining to be reflected and updated in the browser tab for the application, allowing the timer to remain useful even when no longer in focus in the browser.

  - `HistoryDisplay.js` is the component responsible for displaying the history of timer phases completed so far. It reduces the array of timer history in order to display the total time spent in 'Sessions' and 'Breaks', and will also display a detailed list of all timer phases completed thus far, when 'Show Details' is clicked. The timer history can be cleared using the 'Clear History' button.

### Usage

Requires Node.js / NPM in order to install required packages. After downloading the repo, install required dependencies with:

`npm install`

The next.js development server can then be started with:

`npm run dev`

The development server can then be viewed at `http://localhost:3000/` in the browser.

A static production build can be created in the `out/` folder by running:

`npm run build`

And then viewed using:

`npm run start`

The test suite can be run using:

`npm test`

### Extension Ideas:

- Adding a to-do-list component to track items you wish to complete while using the timer
- Including E2E / Integration tests using Cypress
