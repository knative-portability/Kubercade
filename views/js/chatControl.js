let chatActiveRoom = "general";
const chatRefreshTimeMs = 30000;

const hideChat = () => {
  document.getElementById("wrapper_grid").style.gridTemplateColumns = "100% 0";
  document.getElementById("chat_window").style.display = "none";
  document.getElementById("hide_chat_button").style.display = "none";
  document.getElementById("show_chat_button").style.display = "block";
}

const showChat = () => {
  document.getElementById("wrapper_grid").style.gridTemplateColumns = "80% auto";
  document.getElementById("chat_window").style.display = "grid";
  document.getElementById("hide_chat_button").style.display = "block";
  document.getElementById("show_chat_button").style.display = "none";
}

const refreshChat = () => {
  document.getElementById("chat_messages").innerHTML = fetchChatHTML();
  setChatScrollToBottom();
}

const periodicallyRefreshChat = () => {
  refreshChat();
  setInterval(refreshChat, chatRefreshTimeMs);
}

const setChatScrollToBottom = () => {
  const element = document.getElementById("chat_messages");
  element.scrollTop = element.scrollHeight;
}

const fetchChatHTML = () => {
  const chatList = Array(30).fill({
    "author": "Bill Gates",
    "text": "This is an example of what a chat message will look like."
  });
  let html = "";
  chatList.forEach((element) => {
    html += `<div class="
    individual_chat_message"><p><span class="
    author">${element.author}</span>${element.text}</p></div>`;
  })
  return html;
}

const countMessageCharLength = () => {
  const charCounter = document.getElementById("chat_char_counter");
  const messageInput = document.getElementById("message_input");
  messageInput.onkeyup = () => {
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