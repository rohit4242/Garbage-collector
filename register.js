import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOQdgJmP3fwrjPZsdzyM6QmN0o56yHMVY",
    authDomain: "localhost",
    databaseURL: "https://garbage-collector-13142-default-rtdb.firebaseio.com",
    projectId: "garbage-collector-13142",
    storageBucket: "garbage-collector-13142.appspot.com",
    messagingSenderId: "214211705907",
    appId: "1:214211705907:web:f22e3dcb4b62964e93f746",
    measurementId: "G-CGMTVM3TQK"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let sing_up = document.getElementById('sign-up-btn');
let sing_in = document.getElementById('sign-in-btn');

sing_up.addEventListener('click',function (e){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    if(validate_password(password) == false){
        alert('email or password is invalid');
        return
    }

    if(validate_field(username) == false){
        alert('one more extra fields is empty');
        return
    }
    createUserWithEmailAndPassword(email, username, password).then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        var database_ref = database.ref();
        var user_data = {
                email: email,
                username: username,
                last_login: Date.now()
            };

        database_ref.child('users/'+ user.uid).set(user_data);
        alert('user created');

    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    // ..
    });

})

// function sing_up(){

    // auth.createUserWithEmailAndPassword(email, password)
    // .then(function() {
    //     var user = auth.currentUser;
    //     var database_ref = database.ref();

    //     var user_data = {
    //         email: email,
    //         username: username,
    //         last_login: Date.now()
    //     };
    //     database_ref.child('users/'+ user.uid).set(user_data);

    //     alert('user created');

    // })
    // .catch(function(error){
    //     var error_code = error.code;
    //     var error_message = error.message;
    //     alert(error_message);
    // });
// }

// Set up our login function

sing_in.addEventListener('click',function (e){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }

    signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
        console.log('ok');
        const user = userCredential.user;
        var database_ref = database.ref();
        var user_data = {
                last_login : Date.now()
            }
        database_ref.child('users/' + user.uid).update(user_data)
                // DOne
        alert('User Logged In!!')
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
  
});
// function login() {
    // Get all our input fields
 
    // auth.signInWithEmailAndPassword(email, password)
    // .then(function() {
    //   // Declare user variable
    //   var user = auth.currentUser
    //   // Add this user to Firebase Database
    //   var database_ref = database.ref()
    //   // Create User data
    //   var user_data = {
    //     last_login : Date.now()
    //   }
    //   // Push to Firebase Database
    //   database_ref.child('users/' + user.uid).update(user_data)
    //   // DOne
    //   alert('User Logged In!!')
    // })
    // .catch(function(error) {
    //   // Firebase will use this to alert of its errors
    //   var error_code = error.code
    //   var error_message = error.message
    //   alert(error_message)
    // })
// }

// function validate_email(email){
//     expression = /^[^@]+@\w+(\.\w+)+\w$/

//     if(expression.test(email) == true){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function validate_password(password){
    if(password < 6){
        return false;
    }
    else{
        return true;
    }
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