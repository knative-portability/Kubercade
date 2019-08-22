let pacmanLoadEvent = new Event("pacmanLoad");

const changeActivePage = (url) => {
  changeIframePage(url);
  changeChatRoom(url);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
  if (url == '/games/pacman') {
    document.dispatchEvent(pacmanLoadEvent);
  }
}

const changeChatRoom = (url) => {
  // TODO simultaneously change the active chat room once chat is implemented
  const chatWindow = document.getElementById('chat_window');
}