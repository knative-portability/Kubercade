var chatActiveRoom = "general";
var chatRefreshTimeMs = 30000;

var refreshChat = function () {
  fetch('./chat/' + chatActiveRoom)
    .then(function (response) {
      return response.json();
    })
    .then(function (chatList) {
      var chatMessages = document.getElementById("chat_messages");
      chatMessages.innerHTML = "";
      chatList.forEach(function (element) {
        var individualMessageDiv = document.createElement('div');
        individualMessageDiv.className = 'individual_chat_message';
        individualMessageDiv.innerHTML = `<p><span class="author">${element.name}</span>${element.message}</p>`;
        chatMessages.appendChild(individualMessageDiv);
      });
      setChatScrollToBottom();
    });
}

var postMessageToChat = function () {
  var name = document.getElementById("name_input").value;
  var message = document.getElementById("message_input").value;
  document.getElementById("message_input").value = "";
  fetch('/chat/' + chatActiveRoom, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name,
        "message": message
      })
    })
    .then(setTimeout(refreshChat, 200))
    .catch((error) => {
      console.error(error);
    });
}

var periodicallyRefreshChat = function () {
  refreshChat();
  setInterval(refreshChat, chatRefreshTimeMs);
}

var setChatScrollToBottom = function () {
  var element = document.getElementById("chat_messages");
  element.scrollTop = element.scrollHeight;
}

var chatMessageKeyHandler = function () {
  var charCounter = document.getElementById("chat_char_counter");
  var messageInput = document.getElementById("message_input");
  messageInput.addEventListener("keyup", function (event) {
    if (event.ctrlKey && event.keyCode === 13) { // Ctrl+Enter
      postMessageToChat();
    } else {
      charCounter.innerHTML = messageInput.value.length + "/400";
    }
  });
}

var changeChatRoom = function (newRoomGame, newRoomName) {
  chatActiveRoom = newRoomGame;
  document.getElementById("chat_room_label").innerHTML = `
          Chat - ${newRoomName} &#x25BE `;
  refreshChat();
}

if (window.addEventListener) {
  window.addEventListener('load', periodicallyRefreshChat);
  window.addEventListener('load', chatMessageKeyHandler);
} else {
  window.attachEvent('onload', periodicallyRefreshChat);
  window.attachEvent('onload', chatMessageKeyHandler);
}