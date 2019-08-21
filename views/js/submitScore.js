const scorePopUp = () => {
  const iframeLoc = document.getElementById(
    "kubercade_iframe").contentWindow.location.href;
  if (!iframeLoc.endsWith("games/pacman/")) {
    alert("You can't submit a score if you aren't playing a game!");
    return;
  }
  const name = prompt("Please enter your name:", "anonymous");
  // don't post if person cancels prompt or doesn't enter name value
  if (name == null || name == "") {
    return;
  }
  const score = getScore();
  sendScore("/scores/pacman/", {
    name,
    score
  });
}

const getScore = () => {
  const iframe = document.getElementById("kubercade_iframe");
  const scoreDiv = iframe.contentDocument.getElementById("score");
  const score = scoreDiv.getElementsByTagName("span")[0].innerText;
  return parseInt(score);
}

const sendScore = (url, data) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}