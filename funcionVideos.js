const videos = document.querySelectorAll(".miVideo");

videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    previewInicio(video);
  });

  video.addEventListener("mouseleave", () => {
    previewFinal(video);
  });
});

function previewInicio(video) {
  video.muted = true;
  video.playbackRate = 1.5;
  video.loop = true;
  video.play();
}

function previewFinal(video) {
  video.loop = false;
  video.currentTime = 0;
  video.playbackRate = 1;
  video.pause();
}