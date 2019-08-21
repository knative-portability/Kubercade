let pacmanLoadEvent = new Event("pacmanLoad");

var changeActivePage = function (url) {
  changeIframePage(url);
  changeChatRoom(url);
}

var changeIframePage = function (url) {
  document.getElementById('kubercade_iframe').src = url;
  if (url == '/games/pacman') {
    document.dispatchEvent(pacmanLoadEvent);
  }
}

var changeChatRoom = function (url) {
  // TODO simultaneously change the active chat room once chat is implemented
  var chatWindow = document.getElementById('chat_window');
}
