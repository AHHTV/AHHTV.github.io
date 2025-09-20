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
// Play one at start
playRandomVideo();

// When video ends, play another random one
videoPlayer.addEventListener("ended", playRandomVideo);
