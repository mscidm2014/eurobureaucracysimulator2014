#pragma strict

import System.IO;

import System.Collections.Generic;

// Initial variables
var webScraper : String = "output3.txt";

private var fileContents : String;

var lines : String[] = null;

var randomInt : int;

var randomLine : String;

var hit : RaycastHit;

var guiOn : boolean = false;

var inputCounter : int = 0;

var mainSkin : GUISkin; 

var webScraperLines : List.<String>;

function Awake () {
	// Reads the contents of the output3.txt file using the StreamReader class
	
	var sr : StreamReader = new System.IO.StreamReader(Application.dataPath + "/" + webScraper);
	fileContents = sr.ReadToEnd();
	sr.Close();
	
	// Splits the file contents up line by line and assigns a random string between lines 0 and 4000 to the randomLine variable

	lines = fileContents.Split("\n"[0]);
	webScraperLines = new List.<String>(lines);

	randomInt = Random.Range(0, lines.Length);

	//randomLine = lines[randomInt]; 

}



function Start () {
	
	
	
}



// function Update () {
	
	
// //	var objectinFront : boolean = Physics.Raycast (transform.position, transform.forward, 10)
	
// //	if (objectinFront) {
		
// //	}

// 	readLines();
	
// 	if (Input.GetKeyDown("e")) {
// 			inputCounter += 1; // This counter keeps track of the number of e keypresses. We need to ensure that the disable GUI event is triggered only after the enable GUI event. 
// 	}
	
// 	//if (Input.GetKey ("e")) {
// 	//	print ("E key was pressed");
// //
// //	}
// }

// function OnGUI () {

// 	// Creates a GUI box with the contents of randomLine
	
// 	if (guiOn == true) {
// 		GUI.skin = mainSkin; // Overrides default GUI skin

// 		GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 100,700,50), randomLine);
		
// 		//if (Input.GetKeyDown("e")) {	
// 		//	if (inputCounter % 2 == 0) {
// 				//print("inputCounter's value is" + inputCounter); // Debugging
// 		//		guiOn = false;
// 		//	}
		
// 		if (Physics.Raycast(transform.position, transform.forward, hit, 10) == false) {
// 			guiOn = false;
// 		}
// 	}
// }


// function readLines () {

// 	if (Input.GetKeyDown("e")) {  // If there is something 10m or less in front of the raycaster
	
// 		if (inputCounter % 2 == 1 && Physics.Raycast(transform.position, transform.forward, hit, 10)) {
// 			randomInt = Random.Range(0,1924);
// 			randomLine = lines[randomInt];
			
// 			if (randomLine.Length == 0) { // This doesn't seem to work
			
// 				print("There's a blank line here!");

	
// 				randomLine = lines[randomInt]; 
	
// 			}
			
// 			guiOn = true;
			
// 			//print ("There is a " + hit.transform.name + " in front of you");
// 			//GUI.Box (Rect (10,10,300,90), randomLine);
			
// 			//if (Input.GetKey("e")) {
// 			//	print("e pressed again");
// 			//	guiOn = false;
// 			//}
// 		}
// 	}
	
// }	
		