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

const verifyPassword = (email) => {
    const signIn = () => window.location.replace("signin.html");
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert.setMessage(`Password Reset Email Has Been Sent To ${email} Please Check Your Email, please click close to redirect.`);
            alert.onClose(signIn);
        })
        .catch(function (error) {
            alert.setMessage("invalid email or bad network connection");
            alert.onClose(signIn);
        });
};  

const register = () => {
    const email = document.querySelector("#registration-email").value;
    const reemail = document.querySelector("#registration-reemail").value;
    // const password = document.querySelector("#registration-password").value;
    const isValidEmail = email.match(/^[\w!#$%&'*+\/=?^`{|}~-]+(?:\.[\w!#$%&'*+\/=?`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:ac\.uk)$/);
    
    if (email.trim() == "") {
        alert.setMessage("Enter an Email");
    } else if (!isValidEmail) {
        alert.setMessage("Enter A Valid Ac.Uk Email");
    } else if (email != reemail) {  
        alert.setMessage("Emails Do Not Match");
    } else {
        auth
            .createUserWithEmailAndPassword(email, "oiawsdioAJSDOQWIORJQWOIAWSFIOJ"). 
            then(function (user) {
                verifyPassword(email);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert.setMessage(errorMessage);
                // ...
            });
    }
}

const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value.trim();

    if (email.trim() == "") {
        alert.setMessage("Enter an email");
    } else if (password == "" || password.length < 7) {
        // alert("Enter Password");
        alert.setMessage("Enter a password");
    } else {
        authenticate(email, password);
    }
};


const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert.setMessage("email sent");
        })
        .catch(function (error) {
            alert.setMessage("invalid email or bad network connection");
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


document.querySelector("#login").addEventListener("click", () => {
    login();
});

document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
});

document.querySelector("#login-password").addEventListener("keyup", (e) => {
    if (Event.key == 13) {
        e.preventDefault();
        login();
    }
});

document.querySelector("#forgot-password").addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
        alert.setMessage("Enter Email");
    } else {
        forgotPassword(email);
    }
});

window.addEventListener('load', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let action = urlParams.get('action')
    if(action) {
        action = action.toLowerCase();    
        if(action === 'signup') {
            showRegistration();
        }
    }
})