// const db = firebase.database();

// const username = document.getElementById('userEmail');

// if(username) {
//     const getUserEmail = setInterval(() => {
//         if(username.textContent !== "") {
//             setupChat();
//             clearInterval(getUserEmail);
//         }
//     }, 200);

//     function postChat(e) {
//         e.preventDefault();
//         const timestamp = Date.now();
//         const chatTxt = document.getElementById("chat-txt");
//         const message = chatTxt.value;
//         chatTxt.value = "";
//         db.ref("messages/" + timestamp).set({
//             username: username.textContent,
//             message: message,
//         });
//     }

//     const fetchChat = db.ref("messages/");
    
//     fetchChat.on("child_added", function (snapshot) {
//         const messages = snapshot.val();
//         const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
//         document.getElementById("messages").innerHTML += msg;
//     });

//     const setupChat = () => {
//         document.getElementById("send-message").addEventListener("submit", postChat);
//     }
    
// }