#pragma strict

// Tags will only be successfully assigned if the tag already exists in the inspector.
var userTag: String = "Cubicle";


function Start () {

	gameObject.tag = userTag;
	// Tags are applied to children & children of children (i.e. 2 levels down)
	// 1st layer
	for (var child : Transform in transform) {
		child.gameObject.tag = userTag;
		// 2nd layer
		for (var child : Transform in child) {
			child.gameObject.tag = userTag;
		}
	}
}

function Update () {

}