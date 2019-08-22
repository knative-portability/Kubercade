window.onload = () => {
  document.querySelectorAll("#high_scores_container .individual_score").forEach((element) => {
    const hue = Math.floor(Math.random() * 360);
    element.style.color = `hsl(${hue}, 100%, 65%)`;
  });
}