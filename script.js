//your JS code here. If required.
function updateClock() {
  const now = new Date(); // current date & time
  const p = document.querySelector("#timer");
  p.textContent =now.toLocaleDateString() +", " + now.toLocaleTimeString("en-US", { hour12: true }); // display system time
}

updateClock(); // run once at start
setInterval(updateClock, 1000);