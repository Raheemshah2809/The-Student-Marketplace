    // Your web app's Firebase configuration
    var firebaseConfig = {

        apiKey: "AIzaSyAgF9KUjPINzEvI2M3_s9wmahVD88J52Z4",
        authDomain: "studentmarketplaceindex.firebaseapp.com",
        projectId: "studentmarketplaceindex",
        storageBucket: "studentmarketplaceindex.appspot.com",
        messagingSenderId: "1083392969591",
        appId: "1:1083392969591:web:03b9f5b1926a4a49f76f72"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    //invokes firebase authentication.
    const auth = firebase.auth();

    document.querySelector("#show-register").addEventListener("click", () => {
        showRegistration();
    });

    const showRegistration = () => {
        document.querySelector("#registration-page").classList.remove("hide");
        document.querySelector("#login-page").classList.add("hide");
        document.querySelector("#homepage").classList.add("hide");
    };

    document.querySelector("#show-login").addEventListener("click", () => {
        showLogin();
    });

    const showLogin = () => {
        document.querySelector("#registration-page").classList.add("hide");
        document.querySelector("#login-page").classList.remove("hide");
        document.querySelector("#homepage").classList.add("hide");
    };

    document.querySelector("#signout").addEventListener("click", () => {
        signOut();
    });

    const register = () => {
        const email = document.querySelector("#registration-email").value;
        const reemail = document.querySelector("#registration-reemail").value;
        const password = document.querySelector("#registration-password").value;

        if (email.trim() == "") {
            alert("Enter Email");
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

    document.querySelector("#register").addEventListener("click", () => {
        register();
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

    document.querySelector("#login").addEventListener("click", () => {
        login();
        
    });

    //sign in when you hit enter
    document
        .querySelector("#login-password")
        .addEventListener("keyup", (e) => {
            if (Event.keyCode === 13) {
                e.preventDefault();

                login();
                
                
            }
        });

    const authenticate = (email, password) => {
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    };

    const showHomepage = () => {
        document.querySelector("#registration-page").classList.add("hide");
        document.querySelector("#login-page").classList.add("hide");
        document.querySelector("#homepage").classList.remove("hide");
    };

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                window.location.replace("index.html");
            })
            .catch(function (error) {
                alert("error signing out, check network connection");
            });
            console.log("signout");
    };

    auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            showHomepage();
            window.location.replace("startpage.html");
        }
    });

    document
        .querySelector("#forgot-password")
        .addEventListener("click", () => {
            const email = document.querySelector("#login-email").value;
            if (email.trim() == "") {
                alert("Enter Email");
            } else {
                forgotPassword(email);
            }
        });

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