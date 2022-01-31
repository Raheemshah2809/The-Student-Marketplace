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

function getdata() {

    firebase.database().ref('thepost/').once('value').then(function (snapshot) {
    
        //get your posts div
        var posts_div = document.getElementById('posts');
        //remove all remaining data in that div
        posts_div.innerHTML = "";

        var data = snapshot.val();

        if(posts_div)  {
            const loader = document.querySelector('.loader');
            if(loader) loader.remove();

            if(!data) {
                const errorMessage = document.createElement('h1');
                errorMessage.innerText = "Uh Oh! No Posts Found, Please Wait For Some, Or Upload One";
                errorMessage.classList.add('text-center');
                posts_div.append(errorMessage);
            }
            
            for (let [key, value] of Object.entries(data)) {
                posts_div.innerHTML = "<div class='col-sm-3 mt-2 mb-1'>" +
                "<div class='card'>" +
                "<h4> Seller: " + value.userEmail+ "</h4>" +
                "<h4> Type: " + value.isAlive + "</h4>" +
                "<h4> Price: £" + value.price + "</h4>" +
                "<h4> Upload Date: <br>" + value.timestamp + "</h4>" +
                "<h4> Condition: " + value.typeDeath + "</h4>" +
                "<img class=\"img-fluid\" src='" + value.imageURL + "'/>" +
                "<h4>Description: <br>" + value.text + "</p>" +
                "<h4>Contact Details: <br>" + value.contact + "</h4>" +
                "<button class='btn btn-danger' id='" + key + "' onclick='delete_post(this.id)'>Delete</button>" +
                "</div></div></div>" + posts_div.innerHTML;
            }
        }
    });
}

function delete_post(key) {
    firebase.database().ref('thepost/' + key).remove();
    getdata();

}

window.onload = function () {
    getdata();
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

