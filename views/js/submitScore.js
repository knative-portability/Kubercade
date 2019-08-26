document.addEventListener('pacmanLoad', () => {
  const iframe = document.getElementById("kubercade_iframe");
  iframe.addEventListener("load", () => {
    const iframeWindow = iframe.contentWindow;
    const origGameover = iframeWindow.gameover;
    iframeWindow.gameover = () => {
      score = getPacmanScore(iframe)
      origGameover();
      scorePopUp(score, "/scores/pacman");
    }
  }, {
    once: true
  });
});

document.addEventListener('tetrisLoad', () => {
  const iframe = document.getElementById('kubercade_iframe');
  setTimeout(() => {
    document.getElementById('kubercade_iframe').contentWindow.document.onclick = () => {
      // Fix iframe not being focused, blocking keyboard input
      iframe.focus();
    };
  }, 200);

  iframe.addEventListener("load", () => {
    const iframeWindow = iframe.contentWindow;
    const origGameOverSignal = iframeWindow.gameOverSignal;
    iframeWindow.gameOverSignal = () => {
      origGameOverSignal();
      const score = iframeWindow.points;
      // Wait for game over screen 
      setTimeout(() => {
        scorePopUp(score, '/scores/tetris');
      }, 1250);
    }
  }, {
    once: true
  });
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
    changeIframePage(scoreUrl + `?user_score=${score}`)
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