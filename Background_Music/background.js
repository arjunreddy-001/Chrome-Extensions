const audioElement = document.querySelector("audio");

chrome.runtime.onMessage.addListener((msg) => {
  // If not a message for offscreen, do nothing
  if (!msg.offscreen) {
    return;
  }

  switch (msg.type) {
    case "play":
      playAudio(msg.data);
      break;

    case "pause":
      pauseAudio();
      break;
  }
});

function playAudio({ source, volume }) {
  source = source || "track1.mp3";

  let currSource = audioElement?.src?.split("/") || [];
  currSource = currSource.pop();

  if (audioElement.paused && currSource === source) {
    audioElement.play();
    return;
  }

  audioElement.src = source;
  audioElement.volume = volume;
  audioElement.play();
}

function pauseAudio() {
  audioElement.pause();
}
