"use strict";

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let year = now.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const options = {day: "numeric", month: "long", year: "numeric"};
  const formattedDate = now.toLocaleDateString("en-GB", options);

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.querySelector(".clock").textContent = timeString;
  document.querySelector("h2").textContent = formattedDate;
  document.querySelector("footer").textContent = `©: ${year}`;
}
updateClock();
setInterval(updateClock, 1000);
