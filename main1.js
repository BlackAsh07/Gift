document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
});


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  