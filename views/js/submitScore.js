// pacmanLoad is fired whenver iframe loads /games/pacman
document.addEventListener('pacmanLoad', () => {
  const iframe = document.getElementById("kubercade_iframe");
  const iframeWindow = iframe.contentWindow;
  const origGameover = iframeWindow.gameover;
  iframeWindow.gameover = () => {
    score = getPacmanScore(iframe)
    origGameover();
    // Wait for 'Game Over' to display in game
    setTimeout(() => {
        scorePopUp(score, "/scores/pacman/");
      }, 500);
  }
});

const getPacmanScore = (iframe) => {
  const scoreDiv = iframe.contentDocument.getElementById("score");
  const score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}

const scorePopUp = (score, scoreUrl) => {
  const name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (!name) {
    return;
  }
  sendScore(scoreUrl, {
    name,
    score
  }).then(() => {
    setTimeout(() => {
      changeIframePage(scoreUrl);
    }, 100);
  });
}

const sendScore = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
