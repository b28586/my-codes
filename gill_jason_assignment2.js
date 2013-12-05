/*
Jason Gill
SDI 1312
Code for Project 2
*/
//defining variables
var myString = (" Goodbye my friend, I hope we meet again soon");
var myBoolean = ("userAge > myAge || myAge < userAge");
var myAge = 31;
//defining prompt
var userAge = prompt ("How old are you?");
//defining function
var getAge = function (a){
    var age = userAge - a;
    return age;
};
var age = getAge(31);
var reportAge = function(name, age, message){}
//defining conditional
if (userAge > 31){
    var myConfirm = confirm("If I am " + myAge + " and you are " + userAge + " , that means you are older than I am");
}else 
    console.log("You are not older than I am");
//defingin boolean
if (userAge > myAge || myAge < userAge > 31){
	console.log("I am happy about this. I am older, than most of the people that I know.");
};
//local variables
var n = 0;
//while loop
while (n <= 5)
  {
  console.log("Of course, I miss the age of " + n);
  n++;
  if (n == 5){
  console.log("Ah, the joys of Youth!");
  }
};
console.log("Even from a young age, I have enjoyed cars. These are the types of cars that I like.");
//for loop
cars=["BMW","Volvo","Saab","Ford"];
for (var i=0,l=cars.length; i<l; i++)
{
console.log(cars[i] + "");
};
//string variable
var stringTwo = ("Well, it seems that we have come to the end.");
//string concatenation
console.log(stringTwo + "" + myString);

  
  
