console.log("Hello World");

console.log("Document", document);

//----------------------FUNCTIONS------------------------------------
// 3 items we will always need to do:  First - write a function that you include 
// console.log with a text line to indicate your location.
function onButtonPushed (){
	console.log ("I am in the onButtonPushed function");
// Added code to change the text in Header 1 each time the button is pressed.
	if (idH1.textContent === "Hello World!"){
		idH1.textContent = "Hello Universe!";
	} else {
		idH1.textContent="Hello World!";
	}
	document.body.appendChild(makeH1("this is NEW" + counter1++));
}

function onTextClick (){
	console.log ("I am in the onTextClick function");
	if (idH1.textContent === "Hello World!"){
		idH1.textContent = "Hello Universe!";
	} else {
		idH1.textContent="Hello World!";
	}
}

function onMouseMove(){
	console.log ("I am in the onMouseMove function");	
	if (idH2.textContent === "Hello Canada"){
		idH2.textContent = "Hello America";
	} else {
		idH2.textContent="Hello Canada";
	}
}

function onMouseOver(){
	console.log ("I am in the onMouseOver function");
	if (idH3.textContent === "Hello Alberta"){
		idH3.textContent = "Hello Saskatchewan";
	} else {
		idH3.textContent="Hello Alberta";
	}
}

function onMouseExit(){
	console.log ("I am in the onMouseExit function");
	if (idH4.textContent === "Hello Calgary"){
		idH4.textContent = "Hello Saskatoon";
	} else {
		idH4.textContent="Hello Calgary";
	}
}
 
// Second - get a reference to the button by using const (for constant) to 
// assign a method to search through the DOM.  
const idBtnPushed = document.getElementById("idBtnPush");
console.log("Button", idBtnPushed);

// Third - Add an event listener to run our function.  
idBtnPushed.addEventListener("click", onButtonPushed);

console.log("Header1", idH1);

//H1 Header Text Pushed
const idH1Pushed = document.getElementById("idH1");
console.log("H1", idH1Pushed);

idH1Pushed.addEventListener("click", onTextClick);

//H2 Header Mouse Moving over text
const idH2MouseMove = document.getElementById("idH2");
console.log("H2", idH2MouseMove);

idH2MouseMove.addEventListener("mousemove", onMouseMove);

//H3 Header Mouse Over text
const idH3MouseOver = document.getElementById("idH3");
console.log("H3", idH3MouseOver);

idH3MouseOver.addEventListener("mouseover", onMouseOver);

//H4 Header Mouse Exiting screen
const idH4MouseExit = document.getElementById("idH4");
console.log("H4", idH4MouseExit);

idH4MouseExit.addEventListener("mouseleave", onMouseExit);

//----------------------------------------------
const hdr2 = document.querySelector("idH2");
counter1 = 1;

function makeH1(message){
	const newH1 = document.createElement("h1");
	newH1.textContent = message;
	console.log("New h1 text", newH1);
	return newH1;
}

function onBodyClick(event){
	console.log("on Body Click running");
	console.log("what event", event);
	console.log("run target", event.target);
	document.getElementById("idH2").setAttribute("place", "Canada");
}

document.body.addEventListener('click', onBodyClick);
