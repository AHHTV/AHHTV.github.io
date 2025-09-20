let lastVideo = "";

function playRandomVideo() {
  let nextVideo;
  do {
    nextVideo = videos[Math.floor(Math.random() * videos.length)];
  } while (nextVideo === lastVideo);

  lastVideo = nextVideo;
  videoPlayer.src = nextVideo;
  videoPlayer.play();
}
