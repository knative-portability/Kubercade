document.addEventListener('pacmanLoad', () => {
  console.log('pacman loaded');
  let iframe = document.getElementById("kubercade_iframe");
  iframe.addEventListener("load", () => {
    console.log('iframe loaded');
    let iframeWindow = iframe.contentWindow;
    let origGameover = iframeWindow.gameover;
    iframeWindow.gameover = () => {
      score = getScore()
      origGameover();
      scorePopUp(score);
      console.log('game over');
    }
  });
});

var scorePopUp = function (score) {
  var name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (name == null || name == "") {
    return;
  }
  sendScore("/scores/pacman/", {name, score});
}

var getScore = function () {
  var iframe = document.getElementById("kubercade_iframe");
  var scoreDiv = iframe.contentDocument.getElementById("score");
  var score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}

var sendScore = function(url, data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
    },
  });
}
