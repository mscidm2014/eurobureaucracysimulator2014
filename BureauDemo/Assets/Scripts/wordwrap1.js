// #pragma strict

// var string : String = "It's called Split and is an object method on string. Everything in the .Net framework is available in all .Net languages including unity JavaScript. The following should work fine in JavaScript:";



// function Start () {

// }

// function Update () {
// 	wrapWord();

// }

// function wrapWord () {
// 	var words : String = "Tata Yoyo ehjee ajkjaka kjaaj";
// 	var split : String[] = words.Split(" "[0]);
// 	for(var s in split) print(s);

// }

// function FormatString ( text : String ) { 
//     words : String[] = text.Split(" "[0]); //Split the string into seperate words 
//     var result : String = ""; 
 
//     for( var index = 0; index < words.length; index++)
//     { 
//         var word = words[index].Trim(); 
//         if (index == 0) {
//             result = words[0]; 
//             talkTextGui.text = result; 
//         } 
 
//         if (index > 0 ) { 
//             result += " " + word; 
//             block.text = result; 
//         } 
//         TextSize = block.GetScreenRect(); 
//         if (TextSize.width > lineLength)
//         { 
//             //remover 
//             result = result.Substring(0,result.Length-(word.Length)); 
//             result += "\n" + word; 
//             numberOfLines += 1;
//             block.text = result;
//         } 
//     } 
// }

// function FormatString ( text : String ) { 
//     words = text.Split(" "[0]); //Split the string into seperate words 
//     var result : String= ""; 
//     var numberOfLines : int = 0;
//     var lineLength = 1000; // Maximum width in pixels before it'll wrap
 
//     for( var index = 0; index < words.length; index++)
//     { 
//         var word = words[index].Trim(); 
//         if (index == 0) {
//             result = words[0]; 
//             talkTextGUI.text = result; 
//         } 
 
//         if (index > 0 ) { 
//             result += " " + word; 
//             talkTextGUI.text = result; 
//         } 
//         var TextSize : Rect = talkTextGUI.GetScreenRect(); 
//         print(TextSize.width);
//         if (TextSize.width > lineLength)
//         { 
//             //remover 
//             result = result.Substring(0,result.Length-(word.Length)); 
//             result += "\n" + word; 
//             numberOfLines += 1;
//             talkTextGUI.text = result;
//         } 
//     } 
// }