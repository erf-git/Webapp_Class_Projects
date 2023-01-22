/*Ephycis*/

//The objects are made. I tried to do this separatly, but I when adding them to an array they broke
var objects = [
	{name:"grape",image:"Images/grape.png"},
	{name:"apple",image:"Images/apple.png"},
	{name:"blueberry",image:"Images/blueberry.png"},
];

//Money
var bal = 5;

//The function that runs everytime you press the PLAY button
function slots() {
	//Deducts money to play
	bal -= 5;
	
	//These get a random object from objects[], get their image, and adds it to the webpage
	var slotA = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("A").innerHTML = '<img src="'+slotA+'" height="200px" width="200px">';
	var slotB = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("B").innerHTML = '<img src="'+slotB+'" height="200px" width="200px">';
	var slotC = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("C").innerHTML = '<img src="'+slotC+'" height="200px" width="200px">';
	
	//This checks for 3 same and 3 different while leaving other combinations in else
	if (slotA == slotB && slotA == slotC && slotB == slotC) {
	document.getElementById("result").innerHTML = '<h2>YOU WIN!!!</h2>';
	bal += 10;
	} else if (slotA != slotB && slotA != slotC && slotB != slotC ) {
	document.getElementById("result").innerHTML = '<h2>YOU WIN!!!</h2>';
	bal += 5;
	} else {
	document.getElementById("result").innerHTML = '<h2>You Lose, Try Again?</h2>';
	}
	
	//This prints your current bal
	document.getElementById("bal").innerHTML = '<h3>$'+bal+'</h3>';
	
	//If you have less than 0 money that it thanks you for your money
	if (bal < 0) {
		document.getElementById("lol").innerHTML = '<p>Thanks For Your Money!</p>'
	}
}

/*function playA(){
	var slotA = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("A").innerHTML = '<img src="'+slotA+'" height="200px" width="200px">';
}
function playB(){
	var slotB = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("B").innerHTML = '<img src="'+slotB+'" height="200px" width="200px">';
}
function playC(){
	var slotC = objects[Math.floor(Math.random() * 3)].image;
	document.getElementById("C").innerHTML = '<img src="'+slotC+'" height="200px" width="200px">';
}*/
