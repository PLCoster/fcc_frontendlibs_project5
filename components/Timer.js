import Button from 'react-bootstrap/Button';

function Timer() {
  return (
    <>
      <h1>25 + 5 Clock</h1>
      {/* BREAK LENGTH CONTROLS */}
      <h4 id="break-label">
        Break Length:
        <Button id="break-decrement">
          <i class="bi bi-arrow-down-circle-fill"></i>
        </Button>
        <input type="number"></input>
        <Button id="break-increment">
          <i class="bi bi-arrow-up-circle-fill"></i>
        </Button>
      </h4>

      {/* SESSION LENGTH CONTROLS */}
      <h4 id="session-label">
        Session Length:
        <Button id="session-decrement">
          <i class="bi bi-arrow-down-circle-fill"></i>
        </Button>
        <input type="number"></input>
        <Button id="session-increment">
          <i class="bi bi-arrow-up-circle-fill"></i>
        </Button>
      </h4>
    </>
  );
}

export default Timer;
