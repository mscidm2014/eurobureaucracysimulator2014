#pragma strict

var guiOn = false;
var inputCounter : int = 0;

function Update () {

	OnKeyDown();
	//OnKeyUp();

	if (Input.GetKeyDown("e")) {
			inputCounter += 1; // This counter keeps track of the number of e keypresses. We need to ensure that the disable GUI event is triggered only after the enable GUI event. 
	}
}
 
function OnKeyDown() {

	if (Input.GetKeyDown("e") && (inputCounter % 2 == 1)) {
		guiOn = true;
	}
	
	if (Input.GetKeyDown("e")) {	
			if (inputCounter % 2 == 0) {
				yield WaitForSeconds(5);
				guiOn = false;
			}
	}
}
 
// function OnKeyUp() {

// 	if (Input.GetKeyUp("e")) {
// 		guiOn = false;
// 	}
// }