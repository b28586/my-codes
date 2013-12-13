/*
Jason Gill
1312
SDI*/
//Math
function convertToCanadian(dolAmerican){
	var dolCanadian; 
	dolCanadian = 1.16 * dolAmerican;
	
	return dolCanadian;
}
//Global Variables
var people = new Array("James", "Madison", "Johnny", "Peggy");


//Local Variables
var myPrompt = confirm("Would you like to hear a story? Yes or No.");

//Conditinal
if (myPrompt == true){
	console.log("Great! Let's get started");
}else
{
	console.log("That's too bad. It is a great story.");
};

console.log("Not that long ago, there were four people.");
console.log(people[0] + ", " + people[1] + ", " + people[2] + " and " + people[3]);
console.log("These four people wanted to know how to convert American dollars into Canadian dollars.")
console.log("So, they did just that.")


//Loop 
var dolAmerican = new Array(212.25, 32.98, 10.67);
var dolCanadian = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++){
	dolCanadian[loopCounter] = convertToCanadian(dolAmerican[loopCounter]);
}

for (loopCounter = 2; loopCounter >= 0; loopCounter--){
	console.log("Amount " + loopCounter + " was " + dolAmerican[loopCounter] + " American Dollars." + " Which is " + dolCanadian[loopCounter] + " Canadian Dollars");

};



