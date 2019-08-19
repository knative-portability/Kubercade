window.onload = function () {
  document.querySelectorAll("#high_scores_container .individual_score").forEach(function (element) {
    var minLightnessRatio = 0.6;
    var maxColorValue = 16777215; // 0xFFFFFFF
    var color = getRandomIntInclusive(
      maxColorValue * minLightnessRatio, maxColorValue);
    element.style.color = Math.floor(color).toString(16);
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}