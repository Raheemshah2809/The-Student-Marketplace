function upload(e) {
    e.preventDefault();
    var image = document.getElementById('image').files[0];
    var post = document.getElementById('post').value;
    var imageName = image.name;
    var storageRef = firebase.storage().ref('images/' + imageName);
    var uploadTask = storageRef.put(image);
    uploadTask.on('state_changed', function (snapshot) {
        move(snapshot)
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            const typeDeath = document.querySelector('#typeDeath').value;
            const timestamp = document.querySelector('#timestamp').innerText;
            const price = document.querySelector('#price').value;
            const userEmail = document.querySelector('#userEmail').innerText;
            const contact = document.querySelector('#contact').value;
            
            firebase.database().ref('thepost/').push().set({
                text: post,
                imageURL: downloadURL,
                userEmail: userEmail,
                timestamp: timestamp,
                typeDeath: typeDeath,
                userEmail: userEmail,
                contact: contact,
                price: price,
                isAlive: document.querySelector('#livingStatus').value,
            }, function (error) {
                if (error) {
                    alert("Error while uploading");
                } else {
                    alert.setMessage("Successfully uploaded");
                    document.getElementById('post-form').reset();
                    location.href='/feed.html';
                }
            });
        });
    });
    
    var i = 0;
    
    function move(snapshot) {
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            var width = 1;
            var id = setInterval(upload, 10);
            
            function upload() {
                if (width >= progress) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + '%';
                    elem.innerHTML = width * 1 + '%';
                }
            }
            
        }
    }
}

const db = firebase.database();

function postChat(e) {
    e.preventDefault();

    const { target } = e;
    const chatText = target.querySelector('.chat-txt');
    const usernameElement = document.getElementById('userEmail');
    if(chatText && usernameElement) {
        const timestamp = Date.now();
        const message = chatText.value.trim();
        const username = usernameElement.textContent;
        const postId = target.dataset.postId;
        chatText.value = ""; // clearing the chat input
        
        db.ref(`messages/${timestamp}`).set({
            username: username,
            message: message,
            timestamp: timestamp,
            postId: postId
        });
    }
}

function convertTimestampToDate(timestamp) {
    if(timestamp) {
        return new Date(+timestamp).toUTCString();
    }
    return "";
}

function getMessages() {
    const messages = db.ref("messages");
    messages.on("child_added", function(snapshot) {
        const data = snapshot.val();
        if(data) {
            const parent = document.querySelector(`.card[data-post-id="${data.postId}"]`);
            if(parent) {
                const messageContainer = parent.querySelector('.messages');
                if(messageContainer) {
                    const chatMessage = document.createElement('li');

                    const date = document.createElement('p');
                    date.textContent = convertTimestampToDate(data.timestamp);

                    const username = document.createElement('p');
                    username.textContent = data.username;

                    const message = document.createElement('p');
                    message.textContent = data.message;

                    chatMessage.append(date, username, message);

                    messageContainer.appendChild(chatMessage);
                }   
            }
        }
    })
}

function getdata() {
    const loader = document.querySelector('.loader__wrapper');
    const posts_div = document.getElementById('posts');
    const errorMessage = document.getElementById('errorMessage');
    const post = db.ref("thepost");
    const currentlySignedInEmail = document.getElementById('userEmail');
    const checkHasPosts = () => {
        if(!!posts_div.querySelector('.card') == false) {
            if(errorMessage && errorMessage.classList.contains('hidden')) {
                errorMessage.classList.remove('hidden');
            }
        }
    }

    const showDeleteButtonIfOwner = (userEmail, key) => {
        if(currentlySignedInEmail) {
            const emailAddress = currentlySignedInEmail.textContent.toLowerCase();
            if(userEmail.toLowerCase() == emailAddress) {
                return `<button class="btn btn-danger" id="${key}" onclick="delete_post(this.id)">Delete Post</button>`;
            };
        }
        return "";
    }
    post.on("child_removed", function (snapshot) {
        const key = snapshot.key;
        if(key) {
            const card = document.querySelector(`.card[data-post-id="${key}"]`);
            if(card) {
                card.parentElement.remove();
                checkHasPosts();
            }
        }
    });
    
    post.on("child_added", function (snapshot) {
        const value = snapshot.val();
        const key = snapshot.key;
        if(posts_div) {
            const card = document.createElement('div');
            card.classList.add('col-sm-3', 'mt-2', 'mb-1');
            card.innerHTML = `
                <div class="card" data-post-id="${key}">
                    <h4>Seller: ${value.userEmail}</h4>
                    <h4>Type: ${value.isAlive}</h4>
                    <h4>Price: £${value.price}</h4>
                    <h4>Upload Date: <br> ${value.timestamp} </h4>
                    <h4>Condition: ${value.typeDeath} </h4>
                    <img class="img-fluid" src="${value.imageURL}"/>
                    <h4>Description: <br> ${value.text} </p>
                    <h4>Contact Details: <br> ${value.contact}</h4>
                    <br>
                    <div class="chat">
                    <h4>Comment Section</h4>
                    <ul class="messages">
                    </ul>
                    <form data-post-id="${key}" onsubmit="postChat(event)">
                    <input class="chat-txt" maxlength="100" placeholder="Add Comment" type="text" required />
                    <button class="chat-btn" type="submit">Submit Comment</button>
                    </form>
                    </div>
                    ${showDeleteButtonIfOwner(value.userEmail, key)}
                    </div>`;

            if(!errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }

            posts_div.prepend(card);
        }   
    });

    post.once('value').then(function (snapshot) {

        checkHasPosts();

        if(loader && !loader.classList.contains('hide')) loader.classList.add('hide');

    });
}

window.onload = function() {
    getdata();
    getMessages();
}

function delete_post(key) {
    firebase.database().ref('thepost/' + key).remove();
}


const Update = document.getElementById('Update');

if (navigator.onLine) {
    Update.textContent = 'You are online';
    Update.style.color = 'green';
}

window.addEventListener('online', function () {
    Update.textContent = 'You are online';
    Update.style.color = 'green';
})

window.addEventListener('offline', function () {
    Update.textContent = 'You are offline';
    Update.style.color = 'red';
})