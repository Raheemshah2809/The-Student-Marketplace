// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgF9KUjPINzEvI2M3_s9wmahVD88J52Z4",
    authDomain: "studentmarketplaceindex.firebaseapp.com",
    databaseURL: "https://studentmarketplaceindex-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "studentmarketplaceindex",
    storageBucket: "studentmarketplaceindex.appspot.com",
    messagingSenderId: "1083392969591",
    appId: "1:1083392969591:web:03b9f5b1926a4a49f76f72"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
    console.log("signout");
};

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).
    then(() => {
            window.location.replace("Dashboard.html");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
};

const signOutButton = document.querySelector("#signout");

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        signOut();
    });
}