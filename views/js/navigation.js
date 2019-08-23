let pacmanLoadEvent = new Event("pacmanLoad");
let twenty48LoadEvent = new Event("2048Load");

const changeActivePage = (url, chatRoom, gameName) => {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
  if (url === '/games/pacman') document.dispatchEvent(pacmanLoadEvent);
  if (url === '/games/2048') document.dispatchEvent(twenty48LoadEvent);
}