let chatActiveRoom = "general";
const chatRefreshTimeMs = 30000;

const refreshChat = () => {
  fetch('./chat/' + chatActiveRoom)
    .then((response) => {
      return response.json();
    })
    .then((chatList) => {
      let messages = chatList.map((element) => {
        return `<div class="individual_chat_message">
          <p><span class="author">${element.name}</span>${element.message}</p>
          </div>`;
      });
      messages = chatList.length ? messages : [
        `<div class="individual_chat_message center">
        <p>No messages yet.</p>
        </div>`
      ];
      document.getElementById("chat_messages").innerHTML = messages.join('\n');
      setChatScrollToBottom();
    });
}

const postMessageToChat = () => {
  const name = document.getElementById("name_input").value;
  const message = document.getElementById("message_input").value;
  document.getElementById("message_input").value = "";
  fetch('/chat/' + chatActiveRoom, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        message
      })
    })
    .then(setTimeout(refreshChat, 200))
    .catch((error) => {
      console.error(error);
    });
}

const periodicallyRefreshChat = () => {
  refreshChat();
  setInterval(refreshChat, chatRefreshTimeMs);
}

const setChatScrollToBottom = () => {
  const element = document.getElementById("chat_messages");
  element.scrollTop = element.scrollHeight;
}

const chatMessageKeyHandler = () => {
  const charCounter = document.getElementById("chat_char_counter");
  const messageInput = document.getElementById("message_input");
  messageInput.addEventListener("keyup", (event) => {
    if (event.ctrlKey && event.keyCode === 13) { // Ctrl+Enter
      postMessageToChat();
    } else {
      charCounter.innerHTML = messageInput.value.length + "/400";
    }
  });
}
const changeChatRoom = (newRoomGame, newRoomName) => {
  chatActiveRoom = newRoomGame;
  document.getElementById("chat_room_label").innerHTML = `
          Chat - ${newRoomName} &#x25BE;`;
  refreshChat();
}

if (window.addEventListener) {
  window.addEventListener('load', periodicallyRefreshChat);
  window.addEventListener('load', chatMessageKeyHandler);
} else {
  window.attachEvent('onload', periodicallyRefreshChat);
  window.attachEvent('onload', chatMessageKeyHandler);
}