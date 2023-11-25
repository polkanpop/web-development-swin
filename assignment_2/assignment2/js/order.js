// JavaScript Document
function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditNumber = document.getElementById("creditnumber").value;
	var delivery = document.getElementById("delivery").checked;
	var pickUp = document.getElementById("pickUp").checked;
	var payPickup = document.getElementById("paypickup").checked;
	var payOnline = document.getElementById("payonline").checked;
    var visa = document.getElementById("visa").checked;
    var master = document.getElementById("master").checked;
    var american = document.getElementById("american").checked;

	if ((delivery == "") && (pickUp == "")) {
		alert("An order type must be selected.");
        return false;
	}
	if (contact == "") {
		alert("Contact number cannot be empty.");
        return false;
	}
	if (email == "") {
		alert("Email cannot be empty.");
        return false;
	}
	if ((payPickup == "") && (payOnline == "")) {
		alert("A payment method must be selected.");
        return false;
	}
    if (payPickup == ""){
        if ((visa =="") && (master == "") && (american == "")){
            alert("Please select type of card")
            return false;
        }
	    if ((document.getElementById("visa").checked) && (creditNumber.length != 16)) {
	    	alert("Visa card number has to be 16-digit.\n");
            return false;
	    }
	    if ((document.getElementById("master").checked) && (creditNumber.length != 16)) {
	    	alert("Mastercard number has to be 16-digit.");
            return false;
        }
	    if ((document.getElementById("american").checked) && (creditNumber.length != 15)) {
	    	alert("American Express card number has to be 15-digit.");
            return false;
	    }
	    return true;
    }
}

function init() {
	var orderForm = document.getElementById("orderForm");
	orderForm.onsubmit = validate;
}
window.onload = init;

function addressFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billadd").value = document.getElementById("deliadd").value;
	}
	else {
		document.getElementById("billadd").value = "";
	}
}
window.onchange = addressFunction;

function yesnoCheck() {
	if (document.getElementById('delivery').checked) {
		document.getElementById('deliveryYes').style.visibility = 'visible';
	}
	else document.getElementById('deliveryYes').style.visibility = 'hidden';
}

function yesCheck() {
	if (document.getElementById('payonline').checked) {
		document.getElementById('cardYes').style.visibility = 'visible';
	}
	else document.getElementById('cardYes').style.visibility = 'hidden';
}

function copy(event) {
	var deliadd = document.getElementById("deliadd");
	var billadd = document.getElementById("billadd");
	var checked = document.getElementById("same").checked;
	if (checked) {
		if (deliadd.value) {
			billadd.value = deliadd.value;
		}
		else {
			alert('Please enter your delivery address first.');
			event.preventDefault();
		}

	}
}

window.onchange = yesnoCheck();
window.onchange = yesCheck();
window.onchange = copy();