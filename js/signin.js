

const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.add("hide");
};

const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#homepage").classList.add("hide");
};

const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    const password = document.querySelector("#registration-password").value;
    const isValidEmail = email.match("/^[\w!#$%&'*+\/=?^`{|}~-]+(?:\.[\w!#$%&'*+\/=?`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:ac\.uk)$/");
    
    if (email.trim() == "") {
        alert("Enter Email");
    } else if (!isValidEmail) {
        alert("Enter A Valid ac.uk Email");
    } else if (password.trim().length < 7) {
        alert("Password must be at least 7 characters");
    } else if (email != reemail) {
        alert("emails do not match");
    } else {
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    }
};

const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email, password);
    }
};

const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert("email sent");
        })
        .catch(function (error) {
            alert("invalid email or bad network connection");
        });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.remove("hide");
};

document.querySelector("#register").addEventListener("click", () => {
    register();
});

document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
});

//register when you hit the enter key
document
    .querySelector("#registration-password")
    .addEventListener("keyup", (e) => {
        if (event.keyCode === 13) {
            e.preventDefault();
            register();
        }
    });

document.querySelector("#login").addEventListener("click", () => {
    login();
});

document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
});

//sign in when you hit enter
document.querySelector("#login-password").addEventListener("keyup", (e) => {
    if (Event.keyCode === 13) {
        e.preventDefault();

        login();
    }
});

document.querySelector("#forgot-password").addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
        alert("Enter Email");
    } else {
        forgotPassword(email);
    }
});

auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
        showHomepage();
        window.location.replace("startpage.html");
    }
});
