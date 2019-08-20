let chatActiveRoom = "general";
const chatRefreshTimeMs = 30000;

const refreshChat = function () {
  document.getElementById("chat_messages").innerHTML = fetchChatHTML();
  setChatScrollToBottom();
}

const periodicallyRefreshChat = function () {
  refreshChat();
  setInterval(refreshChat, chatRefreshTimeMs);
}

const setChatScrollToBottom = function () {
  const element = document.getElementById("chat_messages");
  element.scrollTop = element.scrollHeight;
}

const fetchChatHTML = function () {
  const chatList = Array(30).fill({
    "author": "Bill Gates",
    "text": "This is an example of what a chat message will look like."
  });
  let html = "";
  chatList.forEach(function (element) {
    html += `<div class="
    individual_chat_message"><p><span class="
    author">${element.author}</span>${element.text}</p></div>`;
  })
  return html;
}

const countMessageCharLength = function () {
  const charCounter = document.getElementById("chat_char_counter");
  const messageInput = document.getElementById("message_input");
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