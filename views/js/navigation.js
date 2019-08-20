const changeActivePage = (url) => {
  changeIframePage(url);
  changeChatRoom(url);
}

const changeIframePage = (url) => {
  document.getElementById('kubercade_iframe').src = url;
}

const changeChatRoom = (url) => {
  // TODO simultaneously change the active chat room once chat is implemented
  const chatWindow = document.getElementById('chat_window');
}