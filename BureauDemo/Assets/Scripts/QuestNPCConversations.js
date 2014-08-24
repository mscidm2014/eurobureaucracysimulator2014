#pragma strict
import System.Collections.Generic;

var ludo1dialoguetree : List.<String> = new List.<String>(); 
var ludo2dialoguetree : List.<String> = new List.<String>(); 
var ludo2dialoguetree2 : List.<String> = new List.<String>(); 
var ludo2dialoguetree3 : List.<String> = new List.<String>(); 
//var ludo1dialoguetree = new Array (); 
var ludo1dialoguetreeenteruni : List.<String> = new List.<String>(); 
//var ludo1dialoguetreeenteruni = new Array ();
var ludo1dialoguetreerequest : List.<String> = new List.<String>(); 
//var ludo1dialoguetreerequest = new Array ();
var ludo1spokentree : List.<String> = new List.<String>(); 
//var ludo1spokentree = new Array ();
var ludo2spokento : boolean = false;
var ludo1spokento : boolean = false;
var bullshitJobTitle : String;
var bullshitJobTitle2 : String;
var bullshitJobTitle3 : String;
//var hit: RaycastHit;
var guiOn : boolean = false;
var enterUni : boolean = false;
var changeCourse : boolean = false;
var ethicalApproval : boolean = false;
var convoScript : ConversationTrigger;
var mainSkin : GUISkin;
var scenarioList : boolean[];

function DefineInitialVariables () {
	var randomAdj : String[] = ["Chief", "Lead", "Senior", "Junior", "Dynamic", "Director of", "Legacy", "Global", "Central", "Direct"];
	var randomNoun : String[] = ["Operating", "Executive", "Technology", "Brand", "Communications", "Human Service", "Operations", "Applications",
	"Markets", "Response", "Sales", "Solutions"];
	var randomPosition : String[] = ["Evangelist", "Manager", "Officer", "Consultant", "Architect", "Professional", "Director", "Analyst", "Executive"];

	bullshitJobTitle = randomAdj[Random.Range(0,randomAdj.length)] + " " + randomNoun[Random.Range(0,randomNoun.length)] + " " + randomPosition[Random.Range(0,randomPosition.length)];
	bullshitJobTitle2 = randomAdj[Random.Range(0,randomAdj.length)] + " " + randomNoun[Random.Range(0,randomNoun.length)] + " " + randomPosition[Random.Range(0,randomPosition.length)];
	bullshitJobTitle3 = randomAdj[Random.Range(0,randomAdj.length)] + " " + randomNoun[Random.Range(0,randomNoun.length)] + " " + randomPosition[Random.Range(0,randomPosition.length)];


	var TCD : String[] = ["the University of Dublin", "Trinity College Dublin", "Trinity College, the University of Dublin",
	"the College of the Holy and Undivided Trinity of Queen Elizabeth Near Dublin", "TCD", "Coláiste na Tríonóide", "Trinity College, The University of Dublin"]; 

	var ludo1dialoguetreeinput : String[] = ["Good afternoon, and welcome to " + TCD[Random.Range(0,TCD.length)] + ", where we build on our 400-year old tradition of scholarship to confirm our position as one of the great universities of the world! How may I be of service today?"];
       	ludo1dialoguetree.AddRange(ludo1dialoguetreeinput);

	var ludo1dialoguetreeenteruniinput : String[] = ["I take it by that dazzling gleam in your eyes that you've been accepted into this venerable institution.", "In that case, welcome! You’re about to enter a liberal environment where independence of thought is highly valued and staff and students are nurtured as individuals and are encouraged to achieve their full potential. May I ask you to confirm your CAO number and Leaving Cert points total first? Let me just check against our records...",
	"...", "...", "Everything seems to be in order. To take the first step on your academic journey, please enter your name below!", "...", "...", 
	"Hmm. It appears that your name contains forbidden characters. Our system does not recognise foreign characters, apostrophes, or vowels. Can your name be rewritten? No?", "I'm afraid there's nothing more I can do until our engineers finish updating the system to accept ASCII characters. I suggest you consult the " + bullshitJobTitle + "."];
 	ludo1dialoguetreeenteruni.AddRange(ludo1dialoguetreeenteruniinput);

	var ludo1dialoguetreerequestinput : String[] = ["Oh? Just a moment", "...", "...", "I'm afraid that the current academic infrastructure is such that a request of that nature is impossible for me to engage. Have you tried asking the " + bullshitJobTitle + "?"];
	ludo1dialoguetreerequest.AddRange(ludo1dialoguetreerequestinput);

	var ludo1spokentreeinput : String[] = ["There appears to be some deficiency in your form-filling abilities. Please contact the " + bullshitJobTitle + ".", "I'm afraid that the current academic infrastructure is such that a request of that nature is impossible for me to engage. Have you tried asking the " + bullshitJobTitle + "?"];
	ludo1spokentree.AddRange(ludo1spokentreeinput);

	var ludo2dialoguetreeinput : String[] = ["... <i>efficient population of the academic strata within the new organisation</i> ...", "Hmm? No, that's not my remit. I suggest you speak to the " + bullshitJobTitle2 + "."];
	ludo2dialoguetree.AddRange(ludo2dialoguetreeinput);

	var ludo2dialoguetree2input : String[] = ["...", "... <i>a new dynamic for the innovation ecosystem in Ireland</i>..." , "... <i>diversified income sources </i>... " , "Oh, sorry - didn't see you there. What can I help you with?" , "An issue with form CZ9001? I'm afraid encoding issues are not my remit. You might be able to force the system to accept your name if you convert it to binary, though. You'll have to do the same for everything else on the list as well.", 
	"Let's have a look...", "Where's your postcode? Our vision at " + TCD[Random.Range(0, TCD.length)] + " is to establish an innovation ecosystem for Ireland. Every modern economy needs an efficient postal system! As such we've decided to preemptively introduce An Post's new postcode system.", "The " + bullshitJobTitle3 + " might be able to help you."];
	ludo2dialoguetree2.AddRange(ludo2dialoguetree2input);

	var ludo2dialoguetree3input : String[] = ["Sorry, we're a little snowed under here with the identity initiative. Talk to the " + bullshitJobTitle3 + " about your address troubles."];
	ludo2dialoguetree3.AddRange(ludo2dialoguetree3input);

	//var ludo3dialoguetree : String[] = [""]
}

function Start () {
	//convoScript = GetComponent(ConversationTrigger);
	

	//var randomInt1 : int = Random.Range(0, randomAdj.length);
	//var randomInt2 : int = Random.Range(0, randomNoun.length);
	//var randomInt3 : int = Random.Range(0, randomPosition.length);

	


}

function Awake () {
	scenarioList = [enterUni, changeCourse, ethicalApproval];

	//scenarioList[Random.Range(0,scenarioList.length)] = true;

	scenarioList[0] = true; // DEBUGGING

	DefineInitialVariables();

	// if (scenarioList[0] && !ludo1spokento) { // If enterUni is true
	// 	print("I'm in enter uni. This is my first time speaking");
	// 	ludo1dialoguetree = ludo1dialoguetree.Concat(ludo1dialoguetreeenteruni);
	// }

	// else if ((scenarioList[1] || scenarioList[2]) && !ludo1spokento) {
	// 	print("I'm not in enter uni. This is my first time speaking");
	// 	ludo1dialoguetree = ludo1dialoguetree.Concat(ludo1dialoguetreerequest);
	// }

	// if (ludo1spokento && enterUni) {
	// 	print("I'm in enter uni. This is my second time speaking");
	// 	ludo1dialoguetree = ludo1spokentree[0];
	// }

	// else if (ludo1spokento && !enterUni) {
	// 	print("I'm not in enter uni. This is my second time speaking");
	// 	ludo1dialoguetree = ludo1spokentree[1];
	// }

}

function Update () {

	// if (scenarioList[0] && !ludo1spokento) { // If enterUni is true
	// 	//print("I'm in enter uni. This is my first time speaking");
	// 	ludo1dialoguetree = ludo1dialoguetree.Concat(ludo1dialoguetreeenteruni);
	// }

	// else if ((scenarioList[1] || scenarioList[2]) && !ludo1spokento) {
	// 	//print("I'm not in enter uni. This is my first time speaking");
	// 	ludo1dialoguetree = ludo1dialoguetree.Concat(ludo1dialoguetreerequest);
	// }

	// if (ludo1spokento && enterUni) {
	// 	//print("I'm in enter uni. This is my second time speaking");
	// 	ludo1dialoguetree = ludo1spokentree[0];
	// }

	// else if (ludo1spokento && !enterUni) {
	// 	//print("I'm not in enter uni. This is my second time speaking");
	// 	ludo1dialoguetree = ludo1spokentree[1];
	// }


	// if (Input.GetKeyDown("e") && Physics.Raycast(transform.position, transform.forward, hit, 10) && hit.collider.gameObject.name == "FPC") {
	// 	guiOn = true;

	
	// }

}

// function OnGUI () {

// 	if (convoScript.guiOn) {

// 		GUI.skin = mainSkin; // Overrides default GUI skin

// 		GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 100,700,50), ludo1dialoguetree[0]);


// 		if (enterUni) {
// 			//GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 50,1000,100), ludo1dialoguetree[1]);
		
// 		}
// 		else {
// 			GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 50,1000,100), ludo1dialoguetree[2]);
		
// 		}
		
// 	}	

	