import { useState } from 'react';

// Import Boostrap, Bootstrap Icons and custom global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  // Hold timer phase in parent component to allow dynamic NavBar styling
  const [timerPhase, setTimerPhase] = useState('Session');
  return (
    <>
      <NavBar timerPhase={timerPhase} />
      <Component
        {...pageProps}
        timerPhase={timerPhase}
        setTimerPhase={setTimerPhase}
      />
      {/* FCC TEST SCRIPT */}
      <script
        src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        defer
      />
    </>
  );
}

export default MyApp;
