const makeSomeNoise = () => {
  var AudioContext =
    window.AudioContext || // Default
    window.webkitAudioContext || // Safari and old versions of Chrome
    false;

  if (AudioContext) {
    // Do whatever you want using the Web Audio API
    var ctx = new AudioContext();
    // ...
    var osc = ctx.createOscillator();
    osc.frequency.value = 440;
    osc.connect(ctx.destination);
    osc.start(0);
  } else {
    // Web Audio API is not supported
    // Alert the user
    alert(
      'Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox'
    );
  }
};

const soundButton = document.getElementById('sound-btn');

soundButton.addEventListener('click', makeSomeNoise);
