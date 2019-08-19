var scorePopUp = function () {
  var name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (name == null || name == "") {
    return None;
  }
  var score = getScore();
  console.log(score);
  const xhr = new XMLHttpRequest();
  const data = `name=${name}&score=${score}`
  xhr.open("POST", "/scores/pacman/")
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

var getScore = function () {
  // TODO: retrieve score from pacman game instead of returning fake value
  // var iframe = document.getElementById("kubercade_iframe");
  // var iframeContent = iframe.contentWindow;
  // return iframeContent.getElementById("score");
  return 15;
}
