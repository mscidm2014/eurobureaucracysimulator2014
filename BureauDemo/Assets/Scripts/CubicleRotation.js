#pragma strict

// Script rotates cubicle once per rotationInt period, if the player is not looking at it. Must be attached to child mesh of cubicle.

internal var time: int;
// interval between rotations
var rotationInt: int = 5;
// control boolean to ensure that rotation occurs only once per call
internal var hasRotated: boolean = false;
function Start () {

}

function Update () {
	 time = Mathf.Floor(Time.time);
	// print ('Modulo:' +time%rotationInt + 'Rotation' + hasRotated);	DEBUG		
	if (time > 0 && time%rotationInt == 0 && hasRotated == false) {
		//print ('Function triggered'); DEBUG
		if (renderer.isVisible == false) {
			transform.parent.Rotate(0,90,0);
			//print ('Rotation!');		DEBUG
			hasRotated = true;
		}
	}
	// reset hasRotated 1 second after rotation
	if (time%rotationInt == 1 && hasRotated == true) {
		hasRotated = false;
	}
}