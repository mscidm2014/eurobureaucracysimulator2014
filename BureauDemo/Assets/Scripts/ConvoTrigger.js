#pragma strict

var hit : RaycastHit; //passed into raycast function - contains properties of object hit by raycast

function Start () {

}

function Update () {
	if (Physics.Raycast(transform.position, transform.forward, hit, 2)) {
	
			//print ("There is a " + hit.collider.tag + " in front of you");
	}
	else {
			//print ("");
	}
}