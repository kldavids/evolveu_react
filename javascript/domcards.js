console.log("working");

// Assign Global variables
const idAddPushed = document.getElementById("idBtnAdd");
const divLeft = document.getElementById("idDivLeft");

let cardCounter = 1;

function onAddPushed(){
	console.log ("In the onAddPushed function");
	divLeft.appendChild(createCard());
}
idAddPushed.addEventListener("click", onAddPushed);

function onButtonClick() {
	console.log(event.target.id);
	const targetID = event.target.id;
	console.log("assigned", targetID);

	if (targetID === "deletebtn") {
		console.log("card deleted");
		cardSelect = event.target.parentNode;
		divLeft.removeChild(cardSelect);

	} else if (targetID === "beforebtn") {
		console.log("add card before");
		cardSelect = event.target.parentNode;
	 	newCard = createCard();
	 	divLeft.insertBefore(newCard, cardSelect);

	} else if (targetID === "afterbtn") {
		console.log("add card after");
		cardSelect = event.target.parentNode;
		newCard = createCard();
		nextSibling = cardSelect.nextSibling;
		divLeft.insertBefore(newCard, nextSibling);
	}
}
document.addEventListener("click", onButtonClick);

function createCard(){
	const newCard = document.createElement("div");
	newCard.className = "card-container";
	const cardName = "CARD" + cardCounter++;
	const newCardName = document.createTextNode(cardName);
	//console.log("new card", newCard);

	const insertBreak = document.createElement("br");

	const delButton = document.createElement("button");
	delButton.id = "deletebtn";
	delButton.className = "del-button";
	delButton.appendChild(document.createTextNode("Delete"));

	const beforeButton = document.createElement("button");
	beforeButton.id = "beforebtn";
	beforeButton.className = "before-button";
	beforeButton.appendChild(document.createTextNode("Add Before"));

	const afterButton = document.createElement("button");
	afterButton.id = "afterbtn";
	afterButton.className = "after-button";
	afterButton.appendChild(document.createTextNode("Add After"));

	newCard.appendChild(newCardName);
	newCard.appendChild(insertBreak);
	newCard.appendChild(delButton);
	newCard.appendChild(afterButton);
	newCard.appendChild(beforeButton);
	return newCard;
}
