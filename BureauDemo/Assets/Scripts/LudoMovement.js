#pragma strict

internal var stepCount: float = 1;
var newDirectionInterval: int = 15;


function Start () {

}

function Update () {
	// self-righting mechanism
	if (transform.eulerAngles.x > 85 ) {
		transform.eulerAngles.x = 0;
	}
	// Moves the ludocrat forward 0.1m every frame
	transform.Translate(0.1,0,0);
	// Tracking step count, stabilized for frame rate
	stepCount += (1*Time.deltaTime);
	// Change direction after certain number of steps - randomly left or right
	if (Mathf.Floor(stepCount)%newDirectionInterval == 0) {
		//Reset stepCount to avoid unwanted multiple calls of function
		stepCount = 1;
		var randInt: int = Random.Range(0,2);
		if (randInt == 0) {
			transform.Rotate(0, 90, 0);
		}
		if (randInt == 1){
			transform.Rotate(0, -90, 0);
		}
		//print ('Random Int: ' + randInt);
	}
	//print (stepCount);		DEBUG
	
}

function OnCollisionEnter (collision: Collision) {
	
	// Every time ludocrat collides with non-floor object, reverses direction
	if (collision.transform.tag != "IgnoreCollision") {
		//print (transform.name + ' collided with ' + collision.gameObject.tag);	DEBUG
		transform.Rotate(0, 180, 0);
	}
}

function OnCollisionStay (collision: Collision) {
	if (collision.transform.tag == "IgnoreCollision") {
		//print (collision.transform.tag);		DEBUG
		transform.eulerAngles.x = 0;
	}
}

function OnCollisionExit (collision: Collision) {
	//print ('');

}