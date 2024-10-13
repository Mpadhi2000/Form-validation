function validateForm() {
    let name = document.getElementById('fname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('cpass').value;

    document.getElementById('name-error').innerHTML = "";
    document.getElementById('phone-error').innerHTML = "";
    document.getElementById('email-error').innerHTML = "";
    document.getElementById('pass-error').innerHTML = "";
    document.getElementById('cpass-error').innerHTML = "";

    let isValid = true;

    if (name.length > 5) {
        document.getElementById('name-error').innerHTML = "Name must be at least 5 characters long.";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone-error').innerHTML = "Phone number must be 10 digits.";
        isValid = false;
    }

    if (email.length > 20) {
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('pass-error').innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('cpass-error').innerHTML = "Passwords do not match!";
        isValid = false;
    }

    return isValid; 
}

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    if (validateForm()) {
        const formData = {
            name: document.getElementById('fname').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            password: document.getElementById('pass').value,
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('confirmationMessage').style.display = 'block'; 
            } else {
                console.error('Failed to submit the form.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});