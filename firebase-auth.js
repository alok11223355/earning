import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Firebase config and initialization
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // Show user info after successful login
            document.getElementById("user-info").style.display = "block";
            document.getElementById("user-name").textContent = user.displayName;
        })
        .catch((error) => {
            console.error("Error signing in:", error);
        });
}

// Google Logout
function logout() {
    signOut(auth)
        .then(() => {
            // Hide user info after logout
            document.getElementById("user-info").style.display = "none";
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
}

// Expose functions to be used in main script
window.signInWithGoogle = signInWithGoogle;
window.logout = logout;
