const circle = document.getElementById("circle");
const audio = document.getElementById("ambient");
const chime = document.getElementById("chime");
const timerDisplay = document.getElementById("timer");
const sessionCountDisplay = document.getElementById("sessionCount");

let intervalId, timerId;
let seconds = 0;
let sessions = 0;

document.getElementById("start").onclick = () => {
  clearInterval(intervalId);
  clearInterval(timerId);
  seconds = 0;
  timerDisplay.textContent = "00:00";

  let grow = true;
  intervalId = setInterval(() => {
    circle.style.transform = grow ? "scale(1.5)" : "scale(1)";
    grow = !grow;
  }, 4000);

  timerId = setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timerDisplay.textContent = `${mins}:${secs}`;

    if (seconds % 60 === 0 && seconds > 0) {
      sessions++;
      sessionCountDisplay.textContent = sessions;
      chime.play();
    }
  }, 1000);
};

document.getElementById("soundToggle").onclick = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
