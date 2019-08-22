document.addEventListener('pacmanLoad', () => {
  const iframe = document.getElementById("kubercade_iframe");
  iframe.addEventListener("load", () => {
    const iframeWindow = iframe.contentWindow;
    const origGameover = iframeWindow.gameover;
    iframeWindow.gameover = () => {
      score = getScore()
      origGameover();
      scorePopUp(score);
    }
  },
  { once: true });
});

const scorePopUp = () => {
  const name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (!name) {
    return;
  }
  sendScore("/scores/pacman/", {
    name,
    score
  }).then(() => 
    {changeIframePage("/scores/pacman") });
}

const getScore = () => {
  const iframe = document.getElementById("kubercade_iframe");
  const scoreDiv = iframe.contentDocument.getElementById("score");
  const score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
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
