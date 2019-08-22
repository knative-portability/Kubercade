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

var scorePopUp = function (score) {
  var name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (!name) {
    return;
  }
  sendScore("/scores/pacman/", {name, score}).then(() => {
    changeIframePage("/scores/pacman");
  });
}

var getScore = function () {
  var iframe = document.getElementById("kubercade_iframe");
  var scoreDiv = iframe.contentDocument.getElementById("score");
  var score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}

var sendScore = function(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
    },
  });
}
