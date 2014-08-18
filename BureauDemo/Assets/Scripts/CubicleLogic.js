#pragma strict

internal var time: int;
internal var hasRotated: boolean = false;
internal var period: float = 0;
var rotationInterval: int = 3;
var rotationSpeed: float = 0.25;

var rotationArray: Array = ["Rot0", "Rot90", "Rot180", "Rot270", "Rot360"];
internal var rotationIndexFrom: int = 0;
internal var rotationIndexTo: int = 1;

internal var from: Transform;
// 'as String' addendum explicitly tells Unity that the specified list item should be converted into a string - will still work without it but will log warning to console
from = GameObject.FindWithTag(rotationArray[rotationIndexFrom] as String).transform;

internal var to: Transform;
to = GameObject.FindWithTag(rotationArray[rotationIndexTo] as String).transform;


function Start () {
	
}

function Update () {
	//Debug.Log (from.rotation.y);	DEBUG
	time = Mathf.Floor(Time.time+1);
	//Debug.Log(time); 		DEBUG
	// rotate cubicle one per rotation interval
	if (time % rotationInterval == 0 && hasRotated == true) {
		hasRotated = false;
	}
	if (hasRotated == false) {
		period += Time.deltaTime;
		transform.rotation = Quaternion.Lerp(from.rotation, to.rotation, period*rotationSpeed);
	}
	
	// reset hasRotated flag after cubicle completes rotation
	if (transform.rotation == to.rotation || transform.rotation.y==0) {
		hasRotated = true;
		period = 0;
		print(rotationArray[rotationIndexFrom] + ','+ rotationArray[rotationIndexTo]);
		from = GameObject.FindWithTag(rotationArray[rotationIndexFrom] as String).transform;
		to = GameObject.FindWithTag(rotationArray[rotationIndexTo] as String).transform;
		if (rotationIndexFrom < (rotationArray.length-1)) {
			rotationIndexFrom ++;
		}
		else {
			rotationIndexFrom = 0;
		}
		if (rotationIndexTo < (rotationArray.length-1)) {
			rotationIndexTo ++;
		}
		else {
			rotationIndexTo = 0;
		}
		
	}
}