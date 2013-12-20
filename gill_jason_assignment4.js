//Does a string follow a 123-456-7890 pattern like a phone number?

function checkNumber(phonenumber){
    var phone = prompt("Your phone number");
    var validNumber = "0123456789.-";

    for(i = 0; i < phone.length; i++) {
            if(validNumber.indexOf(phone.charAt(i)) == -1) {
                    alert("You have entered an invalid phone number");
                    return false;
                }
            }

        return true;
};


//Does a string follow an aaa@bbb.ccc pattern like an email address?

function checkEmail(emailAddy){
	var email = prompt("Enter Your e-mail address.");
	var validEmail = "abcdefghijklmnopqrstuvwxyz0123456789.-@";
	
	for(i = 0; i < email.length; i++) {
		if(validEmail.indexOf(email.charAt(i)) == -1) {
			alert("You have entered an invaild email address.");
			return false;
		}
	}
return true;
};

//Dates

today=new Date()
var christmas=new Date(today.getFullYear(), 11, 25) 
if (today.getMonth()==11 && today.getDate()>25) 
christmas.setFullYear(christmas.getFullYear()+1) 

var oneDay=1000*60*60*24
alert(Math.ceil((christmas.getTime()-today.getTime())/(oneDay))+
" days left until Christmas!");

//array sum
var newArray= ['a',1,'b',2,'c',3,'d',4,10,'r',33];

var sum = 0;
for (var i=0; i<newArray.length; i++) {
  if (!isNaN(parseInt(newArray[i]))) { sum += newArray[i]; }
}
alert(sum);

//URL validation
function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	
	if(isNaN(i)) { 
		i = 0.00; 
	}
	
	var minus = '';
	
	if(i < 0) { 
		minus = '-'; 
	}
	
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	
	if(s.indexOf('.') < 0) {
		 s += '.00'; 
	}
	if(s.indexOf('.') == (s.length - 2)) {
		 s += '0'; 
	}
	
	s = minus + s;
	return s;
};
var result = CurrencyFormatted(74847384);

function toProperCase(){
	alert("this is title casing.".toUpperCase());
};
alert(result);
checkNumber();
checkEmail();
toProperCase();