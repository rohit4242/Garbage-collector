
const firebaseConfig = {
    apiKey: "AIzaSyAv2eXz01yFnv3SYrr0Srah6rcZs5YrvKA",
    authDomain: "first-project-ce849.firebaseapp.com",
    databaseURL: "https://first-project-ce849-default-rtdb.firebaseio.com",
    projectId: "first-project-ce849",
    storageBucket: "first-project-ce849.appspot.com",
    messagingSenderId: "192688794206",
    appId: "1:192688794206:web:708be28fc3c82bd587a2cf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

function sing_up(){

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;

    if(validate_email(email) == false || validate_password(password) == false){
        alert('email or password is invalid');
        return
    }

    if(validate_field(username) == false){
        alert('one more extra fields is empty');
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        var user = auth.currentUser;
        var database_ref = database.ref();

        var user_data = {
            email: email,
            username: username,
            last_login: Date.now()
        };
        database_ref.child('users/'+ user.uid).set(user_data);

        alert('user created');

    })
    .catch(function(error){
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    });
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
      // Add this user to Firebase Database
      var database_ref = database.ref()
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
      // DOne
      alert('User Logged In!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
}

function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/

    if(expression.test(email) == true){
        return true;
    }
    else{
        return false;
    }
}

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