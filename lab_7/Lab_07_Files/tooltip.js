/* write functions that define the action for each event */
function showTip () {
	var sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	
	sidTip.style.display = "inline";  										//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip () { 
	var sidTip = document.getElementById("sidTip");

	sidTip.style.display = "none";
	  														//this function hides the tool tip
	
																							//first, get access to the tool tip HTML element
													
																							//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}
function init () {																	/* the init function links functions to appropriate events of corresponding HTML elements */
	var sid = document.getElementById("sid")
	var pwd1 = document.getElementById("pwd1")
	var pwd2 = document.getElementById("pwd2")

	sid.onmouseover = showTip;
	sid.onmouseout = hideTip;		
	sid.onfocus = showTip;
	sid.onblur = hideTip;

																					/* create a variable named sid */
																							/* get access to the HTML element by its id "sid" and link it to sid */
	
																							/* link function showTip to the onmouseover event of sid */
																							/* link function hideTip to the onmouseout event of sid  */
}
window.onload = init;
console.log("lmao")
																							/* link function init to the onload event of the window so that function init will be called when the page is loaded */