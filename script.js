const audioElem = document.querySelector(".js-song");
const progress = document.querySelector(".js-progress");
const ctrlIcon = document.querySelector(".js-ctrl-icon");

// Event listener to control progress
audioElem.addEventListener("loadedmetadata", () => {
  progress.max = audioElem.duration;
  progress.value = audioElem.currentTime;
});

// function to control play and pause
const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    audioElem.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    audioElem.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};

// Play and Pause logic
ctrlIcon.addEventListener("click", playPause);

// Update the progress when the song plays
if (audioElem.play()) {
  setInterval(() => {
    progress.value = audioElem.currentTime;
  }, 500);
}

// Update song when you change the progress
progress.addEventListener("change", () => {
  audioElem.play();
  audioElem.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
});

audioElem.pause();
