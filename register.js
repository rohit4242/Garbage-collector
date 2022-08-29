import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getDatabase, ref, set,update} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCLSyC1oKaACIZvHYApKU7WS1xNF05O2Ig",
    authDomain: "new-app-10ea7.firebaseapp.com",
    projectId: "new-app-10ea7",
    storageBucket: "new-app-10ea7.appspot.com",
    messagingSenderId: "78696784146",
    appId: "1:78696784146:web:103ee52d047c25d56a13cb",
    databaseURL: "https://new-app-10ea7-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

let sing_up = document.getElementById('sign_up');
let sing_in = document.getElementById('login');
document.getElementById('sign-up-form');


sing_up.addEventListener('click',function (e){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    writeUserData(user.uid, username, email);
    alert('sign up successfully');
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
    });
})


sing_in.addEventListener('click',function (e){
    let email = document.getElementById('signin_email').value
    let password = document.getElementById('signin_password').value
  
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert('sign-in successfully');
        const reference = ref(db, 'users/' + user.uid);
        update(reference, {
          last_login: Date.now()
        });
        location.replace('new.html');

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

function validate_email(email){
    let expression = /^[^@]+@\w+(\.\w+)+\w$/

    if(expression.test(email) == true){
        return true;
    }
    else{
        return false;
    }
}

function writeUserData(userId, name, email) {
    const reference = ref(db, 'users/' + userId);
    set(reference, {
      username: name,
      email: email,
      last_login: Date.now()
    });
}

function validate_field(field){
    if(field == null){
        return false;
    }

    if(field.length <= 0)
    {
        return false;
    }
    else{
        return true;
    }
}