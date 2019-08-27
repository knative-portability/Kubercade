let pacmanLoadEvent = new Event("pacmanLoad");
let arkanoidLoadEvent = new Event('arkanoidLoad');

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
  if (path === '/games/arkanoid' || path === '/games/arkanoid/') {
    document.dispatchEvent(arkanoidLoadEvent);
    // makes sures chat room changes when coming from nexus
    changeChatRoom('arkanoid', 'Arkanoid');
  }
}