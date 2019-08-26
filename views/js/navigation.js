let pacmanLoadEvent = new Event("pacmanLoad");
let arkanoidLoadEvent = new Event('arkanoidLoad');

const changeActivePage = (url, chatRoom, gameName) => {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
  if (url === '/games/pacman') {
    document.dispatchEvent(pacmanLoadEvent);
  }
  if (url === '/games/arkanoid') document.dispatchEvent(arkanoidLoadEvent);
}