const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("[data-action=start]"),
  stopBtn: document.querySelector("[data-action=stop]"),
};

// const startBtn = document.createElement("button");
// const stopBtn = document.createElement("button");

// startBtn.setAttribute("type", "button");
// stopBtn.setAttribute("type", "button");

// startBtn.dataset.action = "start";
// stopBtn.dataset.action = "stop";

// startBtn.textContent = "START";
// stopBtn.textContent = "STOP";

// refs.body.insertAdjacentElement("beforeend", startBtn);
// refs.body.insertAdjacentElement("beforeend", stopBtn);

refs.stopBtn.setAttribute("disabled", true);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function handleStart(e) {}

refs.startBtn.addEventListener("click", handleStart);
