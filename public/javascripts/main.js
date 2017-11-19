// TODO: currently only able to load one video
function loadVideos(videos) {
  const player = videojs('my-video');
  const sources = JSON.parse(videos.result[0].sources).map(item => item.source);
  player.src(sources);
}

$(
  $.ajax({
    url: '/api/videos',
    success: loadVideos,
  })
);
