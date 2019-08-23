let pacmanLoadEvent = new Event("pacmanLoad");

const changeActivePage = (url, chatRoom, gameName) => {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
}

// fires appropriate events on iframe location change
const iframeChange = (url) => {
  if (String(url).endsWith('/games/pacman') || String(url).endsWith('/games/pacman/')) {
    document.dispatchEvent(pacmanLoadEvent);
    // makes sures chat room changes when coming from nexus
    changeChatRoom('pacman', 'Pac-Man');
  }
}
