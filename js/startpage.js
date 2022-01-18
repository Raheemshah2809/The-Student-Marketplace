const userEmail = document.querySelector('#userEmail');

auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        if(userEmail) {
            userEmail.innerHTML = auth.currentUser.email;
        }
    } else {
        window.location.replace("index.html");
    }  
});

