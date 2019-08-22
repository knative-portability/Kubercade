let pacmanLoadEvent = new Event("pacmanLoad");

const changeActivePage = (url, chatRoom, gameName) => {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
  if (url === '/games/pacman') {
    document.dispatchEvent(pacmanLoadEvent);
  }
}
