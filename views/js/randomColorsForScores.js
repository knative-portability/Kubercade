window.onload = function () {
  document.querySelectorAll("#high_scores_container .individual_score").forEach(function (element) {
    element.style.color = Math.floor(Math.random() * 16777215).toString(16);
  });
}