const attachScoreFilterListener = () => {
  const scoreFilterInput = document.getElementById('score_filter_input');
  const scoresList = document.getElementById('scores_list');
  scoreFilterInput.onkeyup = () => {
    const query = scoreFilterInput.value;
    for (let i = 0; i < scoresList.children.length; i++) {
      const child = scoresList.children[i];
      if (child.textContent.includes(query)) {
        child.style.display = 'grid';
      } else {
        child.style.display = 'none';
      }
    }
  }
}

if (window.addEventListener) {
  window.addEventListener('load', attachScoreFilterListener);
} else {
  window.attachEvent('onload', attachScoreFilterListener);
}