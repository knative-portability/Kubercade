const changeActivePage = function (url) {
  changeIframePage(url);
  changeChatRoom(url);
}

const changeIframePage = function (url) {
  document.getElementById('kubercade_iframe').src = url;
}

const changeChatRoom = function (url) {
  // TODO simultaneously change the active chat room once chat is implemented
  const chatWindow = document.getElementById('chat_window');
}