function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    let errorElement = document.getElementById(id + '-error');
    errorElement.innerHTML = error; 
    errorElement.style.color = "red"; 
}

function validateForm() {
    var returnval = true;
    clearErrors();


    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }


    var email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }


    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
        seterror("pass", "*Password must be at least 6 characters long, contain at least one letter, one number, and one special character!");
        returnval = false;
    }


    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password do not match!");
        returnval = false;
    }

    return returnval;
}
