const AudioContext =
  window.AudioContext || // Default
  window.webkitAudioContext || // Safari and old versions of Chrome
  false;

let hz = 440;

const soundButton = document.getElementById('sound-btn');
soundButton.addEventListener('click', () => {
  osc = ctx.createOscillator();
  osc.frequency.value = hz;
  osc.start(0);
  osc.connect(ctx.destination);
});

const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', () => {
  osc.stop();
  osc.disconnect(ctx.destination);
  osc = null;
});

const hertzInput = document.getElementById('hertz');
hertzInput.addEventListener('change', () => {
  console.log(hertzInput.value);
  hz = +hertzInput.value;
});

const ctx = new AudioContext();
osc = ctx.createOscillator();

osc.frequency.value = hz;
