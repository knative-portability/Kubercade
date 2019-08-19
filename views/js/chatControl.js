chatRefreshTimeMs = 30000;

var refreshChat = function () {
  console.log("Refreshing chat");
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
  var chatList = Array(3).fill({
    "author": "Bill Gates",
    "text": "This is what a chat message will look like."
  });
  var html = "";
  chatList.forEach(function (element) {
    html += `<div class="
    individual_chat_message"><p class="
    author">${element.author}</p><p class="
    text ">${element.text}</p></div>`;
  })
  return html;
}

if (window.addEventListener) {
  window.addEventListener('load', periodicallyRefreshChat);
} else {
  window.attachEvent('onload', periodicallyRefreshChat);
}