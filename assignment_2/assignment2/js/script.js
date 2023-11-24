
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pws").value;
    var passwordConfirm = document.getElementById("psw-repeat").value;

    var genm = document.getElementById("male").checked;
	var genf = document.getElementById("female").checked;

    var errMsg = " ";
    var result = true;

    if (password.length < 9) {
        errMsg += ('Password must be at least 9 characters long.\n')
    }

    if (password != passwordConfirm) {
		errMsg += "Passwords do not match.\n";
	}
    if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init() {
    var registerForm = document.getElementById("registerForm");
    registerForm.onsubmit = validate;
}

window.onload = init;