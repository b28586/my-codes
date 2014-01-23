//global variables
var famName = "Keeling";
var sisAge = 29;
var myAge = 31;
var famMembers = new Array("Me","Bridgette","Brenda","Kelly","Jenni","Peggy","Krissy","Kathy","Kelley","Kenya","Kim","Betty","George","Judy","David");
var counter = 0;

//JSON
var family = {
	"jason" : {
		"name" : "Jason Gill",
		"age" : "31",
		"relationship" : "self"
	},
	"bridgette" :{
		"name" : "Bridgette Johnson",
		"age" : "29",
		"relationship" : "sister"
	},
	"brenda" : {
		"name" : "Brenda Gill",
		"age" : "59",
		"relationship" : "mother"
	}
};

console.log("Greetings. My name is " + family.jason.name + ". I am glad to see you today.");
console.log("This story is going to be a little different than the past two weeks.");
console.log("I would like to tell you a story of my family.");
console.log("If you include aunts, uncles, and cousins, This story would be eternally long and have 15 people mentioned in it.");
console.log("That's right, I have a rather large extended family. So, I will contain this story to my immediate family.");
console.log("First there is my  " + family.bridgette.relationship + family.bridgette.name + ".");
console.log("She is my younger sibling. Bridgette is " + family.bridgette.age + " and I am " + family.jason.age + ".");
console.log("Just for fun, lets list all the family members that I can remember.");

for (counter = 0; counter<famMembers.length; counter++)
   console.log(famMembers[counter]);
   
if (famMembers.length < 15) {
	console.log("I could have sworn there were more people than that.");
}else{
	console.log("Yep thats everyone!");
};

console.log("Anyway, back to my immediate family.");
console.log("Let's use some code to figure out how many years seperate my sister and I. We are doing it this way because I don't math.");

function ageDiff(){
	var diffAge = myAge - sisAge;
		if (diffAge === 2){
			console.log("There are only " + diffAge + " years between " + family.bridgette.name + " and I!");
}else{
	console.log("That does not seem right");
}
};
ageDiff();

alert("I would like to know a little about you!");
var myConfirm = confirm("Do you have any siblings?");
var myPrompt = prompt("How many siblings do you have?");

while (myPrompt < 3){
	console.log(myPrompt + " , that is a respectable number of siblings.");
	myPrompt++;
};

console.log("Thank you for taking the time to read this story.");

