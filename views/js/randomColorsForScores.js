window.onload = function () {
  document.querySelectorAll("#high_scores_container .individual_score").forEach(function (element) {
    var hue = Math.floor(Math.random() * 360);
    element.style.color = `hsl(${hue}, 100%, 65%)`;
  });
}