var scorePopUp = function () {
  var iframeLoc = document.getElementById(
    "kubercade_iframe").contentWindow.location.href;
  if (! iframeLoc.endsWith("games/pacman/")) {
    alert("You can't submit a score if you aren't playing a game!");
    return;
  }
  var name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (name == null || name == "") {
    return;
  }
  var score = getScore();
  fetch("/scores/pacman/", {
    method: 'POST',
    body: JSON.stringify({name, score}),
    headers:{
      'Content-Type': 'application/json',
  }});
}

var getScore = function () {
  var iframe = document.getElementById("kubercade_iframe");
  var scoreDiv = iframe.contentDocument.getElementById("score");
  var score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}
