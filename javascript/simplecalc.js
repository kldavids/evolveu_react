// Creating a simple Calculator
//Assign variables
let add = document.getElementById("idAddBtn");
let sub = document.getElementById("idSubBtn");
let multiply = document.getElementById("idMultBtn");
let divide = document.getElementById("idDivBtn");
let	idIn1 = document.getElementById("idIn1");
let	idIn2 = document.getElementById("idIn2");
let result = document.getElementById("idAnswer");
let idClr = document.getElementById("idClrBtn");

function onAddClick(){
	console.log("you are in onAddClick function");
	let num1 = Number(idIn1.value);
	let num2 = Number(idIn2.value);
	let addResult = num1 + num2;

	result.value = addResult;
}

add.addEventListener("click", onAddClick);

function onSubClick(){
	console.log("you are in onSubClick function");
	let num1 = Number(idIn1.value);
	let num2 = Number(idIn2.value);
	let subResult = num1 - num2;

	result.value = subResult;
}

sub.addEventListener("click", onSubClick);

function onMultClick(){
	console.log("you are in onMultClick function");
	let num1 = Number(idIn1.value);
	let num2 = Number(idIn2.value);
	let multResult = num1 * num2;

	result.value = multResult;
}

multiply.addEventListener("click", onMultClick);

function onDivClick(){
	console.log("you are in onDivClick function");
	let num1 = Number(idIn1.value);
	let num2 = Number(idIn2.value);
	let divResult = num1 / num2;

	result.value = divResult;
}

divide.addEventListener("click", onDivClick);

function clearIt() {
 	document.getElementById("idIn1").value = "";
	document.getElementById("idIn2").value = "";
	document.getElementById("idAnswer").value = "";
}

idClr.addEventListener("click", clearIt);

//--------Canadian Taxes----------------------
//Assign variables
let	idIncome = document.getElementById("idIncome");
let fedTax = document.getElementById("idFedTax");
let provTax = document.getElementById("idProvTax");
let totalTax = document.getElementById("idTotalTax");
let resetBtn = document.getElementById("idResetBtn");
let calcTax = document.getElementById("idCalcBtn");

function onCalcClick(){
	console.log("you are in onCalcClick function");
	const income = Number(idIncome.value);

	// Federal tax calculation
	if (income <= 47630){
		let ft1 = (income - 0) * 0.15 + 0;
		fedTax.value = ft1;
	} else if (income > 47630 && income <=95259){
		let ft2 = (income - 47630) * 0.205 + 7145;
		fedTax.value = ft2;
	} else if (income > 95259 && income <=147667){
		let ft3 = (income - 95259) * 0.26 + 16908;
		fedTax.value = ft3;
	} else if (income > 147667 && income <=210371){
		let ft4 = (income - 147667) * 0.29 + 30535;
		fedTax.value = ft4;
	} else if (income > 210371) {
		let ft5 = (income - 210371) * 0.33 + 48719;
		fedTax.value = ft5;
	}

	// Alberta tax calculation
	if (income <= 131220){
		let pt1 = (income - 0) * 0.10 + 0;
		provTax.value = pt1;
	} else if (income > 131220 && income <=(131220 + 26244)){
		let pt2 = (income - 131220) * 0.12 + (131220 * 0.10);
		provTax.value = pt2;
	} else if (income > 131220 && income <=(131220 +52488)){
		let pt3 = (income - 131220) * 0.13 + (131220 * 0.10);
		provTax.value = pt3;
	} else if (income > 131220 && income <=(131220 + 104976)){
		let pt4 = (income - 131220) * 0.14 + (131220 * 0.10);
		provTax.value = pt4;
	} else if (income > 131220 && income <=(131220 + 104976)){
		let pt5 = (income - 131220) * 0.14 + (131220 * 0.10);
		provTax.value = pt5;
	}


	totalTax.value = Number(fedTax.value) + Number(provTax.value);
	return totalTax.value;
}

calcTax.addEventListener("click", onCalcClick);

function resetIt() {
 	document.getElementById("idIncome").value = "";
	document.getElementById("idFedTax").value = "";
	document.getElementById("idProvTax").value = "";
	document.getElementById("idTotalTax").value = "";
}

resetBtn.addEventListener("click", resetIt);