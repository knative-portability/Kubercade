var chatRefreshTimeMs = 30000;

var refreshChat = function () {
  document.getElementById("chat_messages").innerHTML = fetchChatHTML();
  setChatScrollToBottom();
}

var periodicallyRefreshChat = function () {
  refreshChat();
  setInterval(refreshChat, chatRefreshTimeMs);
}

var setChatScrollToBottom = function () {
  var element = document.getElementById("chat_messages");
  element.scrollTop = element.scrollHeight;
}

var fetchChatHTML = function () {
  var chatList = Array(30).fill({
    "author": "Bill Gates",
    "text": "This is an example of what a chat message will look like."
  });
  var html = "";
  chatList.forEach(function (element) {
    html += `<div class="
    individual_chat_message"><p><span class="
    author">${element.author}</span>${element.text}</p></div>`;
  })
  return html;
}

if (window.addEventListener) {
  window.addEventListener('load', periodicallyRefreshChat);
} else {
  window.attachEvent('onload', periodicallyRefreshChat);
}