#pragma strict

var ludo1dialoguetree : String[]; 
var bullshitJobTitle : String;
var hit: RaycastHit;
var guiOn : boolean = false;
var enterUni : boolean = false;
var changeCourse : boolean = false;
var ethicalApproval : boolean = false;
var convoScript : ConversationTrigger;
var mainSkin : GUISkin;

var scenarioList : boolean[] = [enterUni, changeCourse, ethicalApproval];

scenarioList[Random.Range(0,scenarioList.length)] = true;


var randomAdj : String[] = ["Chief ", "Lead", "Senior", "Junior", "Dynamic", "Director of", "Legacy", "Global", "Central", "Direct"];
var randomNoun : String[] = ["Operating", "Executive", "Technology", "Brand", "Communications", "Human Service", "Operations", "Applications",
"Markets", "Response", "Sales"];
var randomPosition : String[] = ["Evangelist", "Manager", "Officer", "Consultant", "Architect", "Professional", "Director", "Analyst", "Executive"];

var TCD : String[] = ["the University of Dublin", "Trinity College Dublin", "Trinity College, the University of Dublin",
"the College of the Holy and Undivided Trinity of Queen Elizabeth Near Dublin", "TCD", "Coláiste na Tríonóide"]; 

function Start () {
	convoScript = GetComponent(ConversationTrigger);

	var randomInt : int = Random.Range(0, 5);

	bullshitJobTitle = randomAdj[randomInt] + " " + randomNoun[randomInt] + " " + randomPosition[randomInt];
	
	ludo1dialoguetree = [ "Good afternoon, and welcome to " + TCD[randomInt] + ", where we build on our 400-year old tradition of scholarship to confirm our position as one of the great universities of the world! How may I be of service today?", 
	"Ah! You’re about to enter a liberal environment where independence of thought is highly valued and where staff and students are nurtured as individuals and are encouraged to achieve their full potential. May I ask you to confirm your CAO number and Leaving Cert points total first? Let me just check against our records... that all seems to be in order. To take the first steps of your academic journey, please enter your name below!", 
	"I'm afraid that the current academic infrastructure is such that a request of that nature is impossible for me to engage. Have you tried asking the " + bullshitJobTitle + "?" ];


}

function Update () {

	if (Input.GetKeyDown("e") && Physics.Raycast(transform.position, transform.forward, hit, 10) && hit.collider.gameObject.name == "FPC") {
		guiOn = true;

	
	}
}

function OnGUI () {

	if (convoScript.guiOn) {

		GUI.skin = mainSkin; // Overrides default GUI skin

		GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 100,700,50), ludo1dialoguetree[0]);


		if (enterUni) {
			//GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 50,1000,100), ludo1dialoguetree[1]);
		
		}
		else {
			GUI.Box (Rect (Screen.width / 2 - 350,Screen.height - 50,1000,100), ludo1dialoguetree[2]);
		
		}
		
	}	

}	