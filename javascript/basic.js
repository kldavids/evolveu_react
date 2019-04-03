{
	console.log("Hello World from basic.js");
}

function onButtonClick(){
	let x = Number(idIn1.value);
	let y = Number(idIn2.value);
	let sum = Number(x + y); 

	//console.log("I'm in the button click event.");
	console.log("The first number is " + x);
	console.log("The second number is " + y);
	console.log("The result is " + sum);
}

const idBtn1Click =document.getElementById("idBtn1");
idBtn1Click.addEventListener("click", onButtonClick);
console.log("B1", idBtn1Click);

//----Array exercise for Competency 100------
//Assign variables
const add = document.getElementById("idAddBtn");
const show = document.getElementById("idShowBtn");
const total = document.getElementById("idTotalBtn");
const clear = document.getElementById("idClrBtn");
const resetFields = document.getElementById("idResetBtn");
const arrayItem = document.getElementById("idArrayItem");

const myData = [11,22,33,44,55,66,77,88,99];
//console.log(myData);

function onAddClick(){
	console.log("you are in onAddClick");
	let num1 = Number(arrayItem.value);
	myData.unshift(num1);
	if(isNaN(num1)){
		document.getElementById('idMsgArea').textContent = "The input is not a valid number.";
	}else{
		document.getElementById('idMsgArea').textContent = "The number has been added to the array.";
	}
}
add.addEventListener("click", onAddClick);

function onShowClick(){
	console.log("you are in onShowClick function");
	document.getElementById('idMsgArea').textContent = [myData];
}
show.addEventListener("click", onShowClick);

function onTotalClick(){	
	console.log("you are in onTotalClick function");
	let totalSum = 0;
	for(let i=0; i< myData.length; i++){
		totalSum += myData[i];
		console.log(totalSum);
	}
	document.getElementById('idMsgArea').textContent = "Sum of array values =" + totalSum;
}
total.addEventListener("click", onTotalClick);
	
function onClrClick(){
	console.log("you are in onClrClick function");
	while (myData.length){
		myData.pop();
	}
	document.getElementById('idMsgArea').textContent = "My array is empty." + myData;
}
clear.addEventListener("click", onClrClick);

function onReset(){
	console.log("you are in onReset function");
	document.getElementById("idArrayItem").value = "";
	document.getElementById('idMsgArea').textContent = "";
}
resetFields.addEventListener("click", onReset);

//----Dictionary exercise for Competency 100------
//Assign variables
const lookupBtn = document.getElementById("idLookBtn");
const findItem = document.getElementById("idFindItem");
const clearFields = document.getElementById("idClearBtn");

const cdnProv = {ab: "Alberta", bc: "British Columbia", mb: "Manitoba", sk: "Saskatchewan", 
on: "Ontario", qc: "Quebec", nb: "New Brunswick", ns: "Nova Scotia", 
pei: "Prince Edward Island", nl: "Newfoundland and Labrador", 
nt: "Northwest Territories", nu: "Nunavut", yt: "Yukon"};

function onLookup(){
	console.log("you are in onLookup function");
	console.log("entry", findItem.value);
	for (const findItem in cdnProv) {
		const value = cdnProv[findItem];
		console.log(findItem + ": " + value);
	}
	document.getElementById('idFindArea').textContent = findItem.value + ": " + cdnProv[findItem.value];

}
lookupBtn.addEventListener("click", onLookup);


function onClear(){
	console.log("you are in onClear function");
	document.getElementById("idFindItem").value = "";
	document.getElementById('idFindArea').textContent = "";
}
clearFields.addEventListener("click", onClear);
		