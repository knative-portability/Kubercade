window.onload = function () {
  document.querySelectorAll("#high_scores_container .individual_score").forEach(function (element) {
    var minLightnessRatio = 0.25;
    var red = getRandomArbitrary(minLightnessRatio, 1);
    var green = getRandomArbitrary(minLightnessRatio, 1);
    var blue = getRandomArbitrary(minLightnessRatio, 1);
    // scale colors to max of 255
    var maxColor = Math.max(red, green, blue);
    red = Math.floor(red / maxColor * 255);
    green = Math.floor(green / maxColor * 255);
    blue = Math.floor(blue / maxColor * 255);
    element.style.color = `rgb(${red}, ${green}, ${blue})`;
  });
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}