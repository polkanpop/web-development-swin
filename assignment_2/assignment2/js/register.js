function validateRegistrationForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('psw').value;
    var confirmPassword = document.getElementById('psw-repeat').value;
	  var genm = document.getElementById("male").checked;
	  var genf = document.getElementById("female").checked;
  
    // Check if any of the required fields are blank
    if (username === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all the required fields.');
      return false;
    }
  
    // Check if the password is at least 9 characters long
    if (password.length < 9) {
      alert('Password must be at least 9 characters long.');
      return false;
    }
  
    // Check if the passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    //Check if gender is checked
    if ((genm == "") && (genf == "")){
        alert("Please select your gender")
        return false;
    }
  
    // All validations passed, allow the form to be submitted
    return true;
  }


  var regForm = document.getElementById("registerForm")
  regForm.onsubmit = validateRegistrationForm