console.log("working");

// function onBodyClick(event){
// 	event.target.textContent = "Body Click is working";
// }
// document.body.addEventListener('click', onBodyClick);

//------------Add Item to the list----------------------
// Assign the Variables
const button = document.getElementById("idBtnAdd");
const input = document.getElementById("userinput");
const ol = document.querySelector("ol");
const listItems = document.getElementsByTagName("li");


//--------------------------------------------------
function inputLength () {
	return input.value.length;
}

function createListElement () {
	let li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = "";
		deleteBtn();
		i++;
}

function addListAfterClick (){
	if (inputLength() > 0) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

// Create Delete button per list item
function deleteBtn (){
	let btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		listItems[i].appendChild(btn);
		btn.onclick = removeParent;
	}

function listLength (){
	return listItems.length;
}

for (i=0; i< listLength();i++){
	deleteBtn();
}

function removeParent(event){
	event.target.parentNode.remove();
}

//--------Show the list------------------------
const btnShow = document.getElementById("idBtnShow");
btnShow.addEventListener("click", myList);

function myList() {
	console.log("ol", ol);
}
