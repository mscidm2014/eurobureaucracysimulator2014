#pragma strict
@script RequireComponent(AudioSource)

// Not yet used in script - intend to make sound play when player is in proximity to ludocrat
internal var playerProx: boolean = true;

//internal var groan: AudioSource;	//Function replaced
//internal var whimper: AudioSource; //Function replaced

// Active clip to be played
internal var activeClip: AudioSource;
// Index of list of all clips
private var audioIndex: int = 0;

function Start () {
	//print (audioSources[0] + ','+ audioSources[1]);	DEBUG
	LoopClips();
}

function Update () {
		
}

// Function loops repeatedly through all audio sources attached to object, playing each in sequence of attachment
function LoopClips() {
	 while (true) {
		// Put all attached audio sources into array
		var audioArray = GetComponents(AudioSource);
		// set active clip to specified clip in array
		 activeClip = audioArray[audioIndex];
		 activeClip.Play();
		// Makes sure that next clip does not begin until current clip finishes playing
		 yield WaitForSeconds (activeClip.clip.length);
		
		 audioIndex++;
		 // reset array index to beginning after all clips have been played
		 if (audioIndex >= audioArray.length) {
			audioIndex = 0;
		 }
	}
}

// Function plays specified clips sequentially - replaced by new version above, which is more scalable
//
// function LoopClips() {
	// var audioArray = GetComponents(AudioSource);
	// while (true) {
		// groan = audioArray[0];
		// groan.Play();
		// yield WaitForSeconds(groan.clip.length);
		// whimper = audioArray[1];
		// whimper.Play();
		// yield WaitForSeconds(whimper.clip.length);
	// }
// }