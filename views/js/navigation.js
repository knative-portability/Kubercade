var changeActivePage = function (url, chatRoom, gameName) {
  changeIframePage(url);
  changeChatRoom(chatRoom, gameName);
}

var changeIframePage = function (url) {
  document.getElementById('kubercade_iframe').src = url;
}