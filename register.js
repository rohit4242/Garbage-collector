
// Set up register function

function sing_up(){

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;

    alert(email,password,username);
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