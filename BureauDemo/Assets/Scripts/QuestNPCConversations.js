#pragma strict

var ludo1dialoguetree : Object[]; 
var bullshitJobTitle : String;


bullshitJobTitle = { adjective : randomAdj, 
noun: randomNoun,
position: randomPosition 
};

var randomAdj : String[] = ["Chief", "Lead", "Senior", "Junior", "Dynamic"];
var randomNoun : String[] = ["Operating", "Executive", "Technology", 
var randomPosition : String[] = ["Evangelist", ];

ludo1dialoguetree[0] = { text: "Good afternoon. How may I be of service today?"
};

ludo1dialoguetree[1] = { text: "I'm afraid I cannot help you with such a query. Have you tried asking the " + bullshitJobTitle +
"?" };

function Start () {

}

function Update () {

}

function OnGUI () {


}