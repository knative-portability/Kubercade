window.onload = function () {
  document.querySelectorAll("#high_scores_container .individual_score").forEach(function (element) {
    var maxColorValue = 16777215; // 0xFFFFFFF
    var baseColor = Math.random() * 16777215;
    var lightnessMultiplier = 4;
    var lightenedColor = (1 / lightnessMultiplier) * (baseColor - maxColorValue) + maxColorValue;
    element.style.color = Math.floor(lightenedColor).toString(16);
  });
}