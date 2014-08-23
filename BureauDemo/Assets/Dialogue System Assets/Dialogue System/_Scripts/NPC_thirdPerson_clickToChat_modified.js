// This is a modified version of a script from TurnGameOn's NPC Chat and Dialogue System: https://www.assetstore.unity3d.com/en/#!/content/9723

import System.Collections.Generic;

var player:Transform;
var talkTextGUI:GUIText;
var toggleColorChange:boolean;
var textures:GUITexture[];
var ludo1dialoguetree : String[]; 
var textScrollSpeed:float=20;
var distanceToChat:int=5;
var camScript : GameObject;
private var talking:boolean;
private var textIsScrolling:boolean;
private var currentLine:int;
//private var playerScript:CharacterMotor;				
//private var playerScript2:FPSInputController;
//var webScraperScript : RandomReadFromWebScraper = gameObject.GetComponent(RandomReadFromWebScraper);
var webScraperScript: RandomReadFromWebScraper;
webScraperScript = GetComponent("RandomReadFromWebScraper");
var questNPCScript : QuestNPCConversations;
questNPCScript = GetComponent("QuestNPCConversations");
var randomLine : String;
var textLines : List.<String> = new List.<String>(); 


function Start(){
	// Have disabled all textures for now until we have a decent GUI texture
	// for(var i = 0;i<textures.Length;i++){
	// 	//Disables all NPC textures until they are called upon during dialogue 
	// 	textures[i].enabled = false;
	// }

	if (this.gameObject.tag == "NonQuestLudo") {
		textLines = webScraperScript.webScraperLines; // Non-quest NPCs just spout lines from the web scraper
	}

	if (this.gameObject.tag == "QuestLudo") {
		CheckBools(); // Check the current state of the game world before proceeding.
	}

}


	//When the cursor hovers over this object
	function OnMouseEnter(){
		if (player){
			var dist = Vector3.Distance(player.position, transform.position);
			//Use this line to debug distance checks//	print ("Distance to other: " + dist);
		}
		if(toggleColorChange==true && dist <= distanceToChat) {
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
			//print(this.gameObject.tag);

			FormatString(textLines[currentLine]);
			
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
					FormatString(textLines[currentLine]);
					//FormatString(ludo1dialoguetree[currentLine]);
					textIsScrolling = false;
				}
				else{
					if(currentLine < textLines.Count - 1){
						print("Chat continuing");
						currentLine++;
						startScrolling();
					}
					else{
						print("Chat done");
						currentLine = 0;
						talkTextGUI.text = "";
						talking = false;

						if (this.gameObject.name == "Ludo1Cube") {
							questNPCScript.ludo1spokento = true;

						}

						CheckBools();

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

		for(var i:int = 0; i < textLines[currentLine].Length; i++){
			if(textIsScrolling && currentLine == startLine){
				displayText += textLines[currentLine][i];
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

function CheckBools () {

	if (questNPCScript.scenarioList[0] && !questNPCScript.ludo1spokento) { // If enterUni is true
		print("I'm in enter uni. This is my first time speaking");
		textLines.Clear();
		//textLines = questNPCScript.ludo1dialoguetree.Concat(questNPCScript.ludo1dialoguetreeenteruni);
		questNPCScript.ludo1dialoguetree.AddRange(questNPCScript.ludo1dialoguetreeenteruni);
		textLines = questNPCScript.ludo1dialoguetree;
		//textLines = questNPCScript.ludo1dialoguetreeenteruni;
		//textLines = questNPCScript.ludo1dialoguetree[0] + questNPCScript.ludo1dialoguetree[2:5];


	}

	else if ((questNPCScript.scenarioList[1] || questNPCScript.scenarioList[2]) && !questNPCScript.ludo1spokento) {
		//print("I'm not in enter uni. This is my first time speaking");
		//textLines = questNPCScript.ludo1dialoguetree.Concat(questNPCScript.ludo1dialoguetreerequest);
		textLines.Clear();
		questNPCScript.ludo1dialoguetree.AddRange(questNPCScript.ludo1dialoguetreerequest);
		textLines = questNPCScript.ludo1dialoguetree;
		//textLines = questNPCScript.ludo1dialoguetree.Concat(questNPCScript.ludo1dialoguetreerequest);
	}

	if (questNPCScript.scenarioList[0] && questNPCScript.ludo1spokento) {
		//print("I'm in enter uni. This is my second time speaking");
		textLines.Clear();
		textLines.Add(questNPCScript.ludo1spokentree[0]);
	}

	else if (!questNPCScript.scenarioList[0] && questNPCScript.ludo1spokento ) {
		//print("I'm not in enter uni. This is my second time speaking");
		textLines.Clear();
		textLines.Add(questNPCScript.ludo1spokentree[1]);
	}
}