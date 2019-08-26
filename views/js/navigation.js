let pacmanLoadEvent = new Event("pacmanLoad");
let tetrisLoadEvent = new Event('tetrisLoad');

const changeActivePage = (url, chatRoom, gameName) => {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
}

// fires appropriate events on iframe location change
const iframeChange = (url) => {
  const path = url.pathname;
  if (path === '/games/pacman' || path === '/games/pacman/') {
    document.dispatchEvent(pacmanLoadEvent);
    // makes sures chat room changes when coming from nexus
    changeChatRoom('pacman', 'Pac-Man');
  }
  if (url === '/games/tetris') document.dispatchEvent(tetrisLoadEvent);
}