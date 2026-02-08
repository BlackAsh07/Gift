(function () {
  let audio;

  function startMusic() {
    if (!audio) {
      audio = document.createElement("audio");
      audio.src = "audio/Dude-is-back.mp3";
      audio.loop = true;
      audio.volume = 0.7;
      audio.id = "bgMusic";
      document.body.appendChild(audio);
    }

    audio.play().then(() => {
      localStorage.setItem("bgMusicPlaying", "yes");
    }).catch(() => {
      // autoplay blocked until user interaction
    });
  }

  // Resume music if it was already playing
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("bgMusicPlaying") === "yes") {
      startMusic();
    }
  });

  // First user interaction unlocks audio
  document.addEventListener("click", startMusic, { once: true });
})();
