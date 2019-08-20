var chatActiveRoom = "general";
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

var countMessageCharLength = function () {
  var charCounter = document.getElementById("chat_char_counter");
  var messageInput = document.getElementById("message_input");
  messageInput.onkeyup = function () {
    charCounter.innerHTML = messageInput.value.length + "/400";
  }
}

if (window.addEventListener) {
  window.addEventListener('load', periodicallyRefreshChat);
  window.addEventListener('load', countMessageCharLength);
} else {
  window.attachEvent('onload', periodicallyRefreshChat);
  window.attachEvent('onload', countMessageCharLength);
}