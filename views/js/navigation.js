let pacmanLoadEvent = new Event("pacmanLoad");
let twenty48LoadEvent = new Event("2048Load");

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
  } else if (path === '/games/2048' || path === '/games/2048/') {
    document.dispatchEvent(twenty48LoadEvent);
    // makes sures chat room changes when coming from nexus
    changeChatRoom('2048', '2048');
  }
}