var player:Transform;
var talkTextGUI:GUIText;
var toggleColorChange:boolean;
var textures:GUITexture[];
//var talkLines:String[];
var ludo1dialoguetree : String[]; 
var textScrollSpeed:float=20;
var distanceToChat:int=5;
var camScript : GameObject;
private var talking:boolean;
private var textIsScrolling:boolean;
private var currentLine:int;
//private var playerScript:CharacterMotor;				
//private var playerScript2:FPSInputController;	

var randomAdj : String[] = ["Chief ", "Lead", "Senior", "Junior", "Dynamic", "Director of", "Legacy", "Global", "Central", "Direct"];
var randomNoun : String[] = ["Operating", "Executive", "Technology", "Brand", "Communications", "Human Service", "Operations", "Applications",
"Markets", "Response", "Sales"];
var randomPosition : String[] = ["Evangelist", "Manager", "Officer", "Consultant", "Architect", "Professional", "Director", "Analyst", "Executive"];

bullshitJobTitle = randomAdj[randomInt] + " " + randomNoun[randomInt] + " " + randomPosition[randomInt];

ludo1dialoguetree = [ "Good afternoon, and welcome to " + TCD[randomInt] + ", where we build on our 400-year old tradition of scholarship to confirm our position as one of the great universities of the world! How may I be of service today?", 
	"Ah! Just a moment...", "You’re about to enter a liberal environment where independence of thought is highly valued and where staff and students are nurtured as individuals and are encouraged to achieve their full potential. May I ask you to confirm your CAO number and Leaving Cert points total first? Let me just check against our records... that all seems to be in order. To take the first steps of your academic journey, please enter your name below!", 
	"I'm afraid that the current academic infrastructure is such that a request of that nature is impossible for me to engage. Have you tried asking the " + bullshitJobTitle + "?" ];

var TCD : String[] = ["the University of Dublin", "Trinity College Dublin", "Trinity College, the University of Dublin",
"the College of the Holy and Undivided Trinity of Queen Elizabeth Near Dublin", "TCD", "Coláiste na Tríonóide"]; 

var randomInt : int = Random.Range(0, 5);

function Start(){
	// for(var i = 0;i<textures.Length;i++){
	// 	//Disables all NPC textures until they are called upon during dialogue
	// 	textures[i].enabled = false;
	// }

}

//When the cursor hovers over this object
function OnMouseEnter(){
	if (player){
		var dist = Vector3.Distance(player.position, transform.position);
		//Use this line to debug distance checks//	print ("Distance to other: " + dist);
	}
	if(toggleColorChange==true && dist <= distanceToChat){
	//Change text color to green
	renderer.material.color=Color.green;
	}
}

//When the cursor leaves this object
function OnMouseExit(){
	if(toggleColorChange==true){
	//change text color to black
	renderer.material.color=Color.black;
	}
}

function OnMouseUp(){
	if (player){
		var dist = Vector3.Distance(player.position, transform.position);
		//Use this line to debug distance checks
		//	print ("Distance to other: " + dist);
	}
	if (talking==false && dist <= distanceToChat) {
		talking = true;
		currentLine = 0;
		FormatString(ludo1dialoguetree[currentLine]);
		startScrolling();
		talkTextGUI.enabled = true; // I ADDED THIS LINE 
		//GameObject.Find("MainCamera").GetComponent(MouseLook).enabled == false;
		camScript.GetComponent("MouseLook").enabled = false;	
		//playerScript.enabled = false;
		//playerScript2.enabled = false;
	}
	else{	
	}
}

function Update () {
	if(talking){
		if(Input.GetButtonDown("Fire1")){
			if(textIsScrolling){
				print("text is scrolling");
				FormatString(ludo1dialoguetree[currentLine]);
				textIsScrolling = false;
			}
			else{
				if(currentLine < ludo1dialoguetree.Length - 1){
					currentLine++;
					startScrolling();
				}
				else{
					print("Chat done");
					currentLine = 0;
					talkTextGUI.text = "";
					talking = false;
					// for(var i = 0;i<textures.Length;i++){
					// 	textures[i].enabled = false;
					// }
					//End of chat.
					//Add custom end of dialogue functions here.
				}
			}
		}
	}
}

function startScrolling(){
	textIsScrolling = true;
	var startLine:int = currentLine;
	var displayText:String = "";

	for(var i:int = 0; i < ludo1dialoguetree[currentLine].Length; i++){
		if(textIsScrolling && currentLine == startLine){
			displayText += ludo1dialoguetree[currentLine][i];
			FormatString(displayText);
			//talkTextGUI.text = displayText;
			yield WaitForSeconds(textScrollSpeed / 100);
			if(currentLine == 0){
				//textures[0].enabled = true;
			}
			if(currentLine == 1){
				// textures[0].enabled = false;
				// textures[1].enabled = true;
			}
			if(currentLine == 2){
				// textures[1].enabled = false;
				// textures[2].enabled = true;
			}
			if(currentLine == 3){
				// textures[2].enabled = false;
				// textures[3].enabled = true;
			}
			if(currentLine == 4){
				// textures[3].enabled = false;
				// textures[4].enabled = true;
			}
			if(currentLine == 5){
				// textures[4].enabled = false;
				// textures[5].enabled = true;
			}
			if(currentLine == 6){
				// textures[5].enabled = false;
				// textures[6].enabled = true;
			}
			if(currentLine == 7){
				// textures[6].enabled = false;
				// textures[7].enabled = true;
			}
			if(currentLine == 8){
				// textures[7].enabled = false;
				// textures[8].enabled = true;
			}
			if(currentLine == 9){
				// textures[8].enabled = false;
				// textures[9].enabled = true;
			}
		}
		else{
			return;
		}
	}
	textIsScrolling = false;	
}

//function OnTriggerEnter(col:Collider){
//	if(col.tag == "Player"){
//	}
//}

//function OnTriggerExit(col:Collider) {
//	if(col.tag == "Player" ){
//	}
//}

//function OnTriggerStay(col:Collider) {
//	if(col.tag == "Player" ){
//	}
//}

function FormatString ( text : String ) { 
  
    words = text.Split(" "[0]); //Split the string into seperate words 
    var result : String= ""; 
    var numberOfLines : int = 0;
    var lineLength = Screen.width - 100; // Maximum width in pixels before it'll wrap
 
    for( var index = 0; index < words.length; index++)
    { 
        var word = words[index].Trim(); 
        if (index == 0) {
            result = words[0]; 
            talkTextGUI.text = result; 
        } 
 
        if (index > 0 ) { 
            result += " " + word; 
            talkTextGUI.text = result; 
        } 
        var TextSize : Rect = talkTextGUI.GetScreenRect(); 
        if (TextSize.width > lineLength)
        { 
            //remover 
            result = result.Substring(0,result.Length-(word.Length)); 
            result += "\n" + word; 
            numberOfLines += 1;
            talkTextGUI.text = result;
        } 
    } 
}