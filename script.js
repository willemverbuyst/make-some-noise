const AudioContext =
  window.AudioContext || // Default
  window.webkitAudioContext || // Safari and old versions of Chrome
  false;

const ctx = new AudioContext();
let osc;

const soundButton = document.getElementById('sound-btn');
soundButton.addEventListener('click', () => {
  osc = ctx.createOscillator();
  osc.frequency.value = 440;
  osc.start(0);
  osc.connect(ctx.destination);
});

const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', () => {
  osc.stop();
  osc.disconnect(ctx.destination);
  osc = null;
});
