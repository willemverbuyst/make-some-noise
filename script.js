const AudioContext =
  window.AudioContext || // Default
  window.webkitAudioContext || // Safari and old versions of Chrome
  false;

const hertzInput = document.getElementById('hertz');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const oscillationtype = document.getElementById('oscillation-type');

const ctx = new AudioContext();
let osc = ctx.createOscillator();
osc.connect(ctx.destination);
osc.frequency.value = +hertzInput.value;

const createSound = () => {
  osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.start(0);
};

const stopSound = () => {
  osc.stop();
  osc.disconnect(ctx.destination);
  osc = null;
};

startButton.addEventListener('click', createSound);

stopButton.addEventListener('click', stopSound);

hertzInput.addEventListener('change', () => {
  osc.frequency.setValueAtTime(hertzInput.value, 0);
});

oscillationtype.addEventListener('change', (e) => (osc.type = e.target.value));
