// let hrr = 0;
// let minu = 0;
// let secc = 0;
// let min = 0;

// let timer = false;

// function fun_st() {
//   timer = true;
//   fun_logic();
// }
// function fun_stope() {
//   timer = false;
// }
// function fun_re() {
//   timer = false;
// }
// function fun_logic() {
//   if (timer == true) {
//     setinterval(fun_logic(), 100);
//     min = min + 1;
//     document.getElementById("min").innerHTML = min;
//   }
// }
let timer;
let running = false;
let seconds = 0,
  minutes = 0,
  hours = 0;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStopButton").textContent = "Start";
    running = false;
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStopButton").textContent = "Stop";
    running = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById("startStopButton").textContent = "Start";
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  const displayString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("display").textContent = displayString;
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);
