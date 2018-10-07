// refer to question 4 before development starts for scope document

// add event listner
function addEventListener() {
    document.getElementById('submitContact').addEventListener('click', validateFormFields);
  }

// valdidate form fields
function validateFormFields() {

    // check if first name text box is not empty
    function checkFirstName() {
        var firstNameField = document.getElementById('firstName');
        var firstNameError = document.getElementById('firstNameError');
            if (firstNameField.value === '') {
                firstNameError.style.display = "block";
            } else {
                firstNameError.style.display = "none";
        }
    }
    
    // check if last name text box is not empty
    function checkLastName() {
        var lastNameField = document.getElementById('firstName');
        var lastNameError = document.getElementById('lastNameError');
            if (lastNameField.value === '') {
                lastNameError.style.display = "block";
            } else {
                lastNameError.style.display = "none";
        }
    }
   
    // check and display phone  error message
    function checkPhoneNumber() {
        var phoneField = document.getElementById('phone');
        var phoneError = document.getElementById('phoneError');
        // validate phone number
        if (validatePhone(phoneField.value) === false) {
            console.log(phoneField.value)
            phoneError.style.display = "block";
        } else {
            phoneError.style.display = "none";
        }
    }

    // check and display email error message
    function checkEmail() {
        var emailField = document.getElementById('email');
        var emailError = document.getElementById('emailError');
        // validate email
        if (!validateEmail(emailField.value) === true) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    }

        // call functions
        checkFirstName();
        checkLastName();
        checkPhoneNumber();
        checkEmail();
}

// validate email textbox
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // return boolean result
    return emailPattern.test(email);
}

// validate number
function validatePhone(phone) {
    var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/gm;

    // return boolean result
    return phonePattern.test(String(phone));
}


(function(){
    addEventListener();
})();

