let nextCardNumber = 1;

document.addEventListener(“click”,onButtonClick) ;

function onButtonClick(){
    console.log(event.target.id);
    const targetID = event.target.id ;
    if (targetID === “addCardButton” ){

        leftPanel = event.target.parentNode;
        newCard = createCard() ;
        leftPanel.insertBefore(newCard,null);

    } else if (targetID === “deleteButton”) {

        clickedCard = event.target.parentNode;
        console.log(clickedCard);
        leftPanel = clickedCard.parentNode ;
        leftPanel.removeChild(clickedCard) ;

    } else if ( targetID === “beforeButton”) {

        clickedCard = event.target.parentNode ;
        leftPanel = clickedCard.parentNode ;
        newCard = createCard() ;
        leftPanel.insertBefore(newCard,clickedCard) ;

    } else if ( targetID === “afterButton”) {

        clickedCard = event.target.parentNode ;
        leftPanel = clickedCard.parentNode ;
        newCard = createCard() ;
        nextSibling = clickedCard.nextSibling ;
        leftPanel.insertBefore(newCard,nextSibling) ;

    }
}

function createCard() {

    const newCard = document.createElement(“div”) ;
    newCard.setAttribute(“class”,“clPanel”);
    const cardTitle = “Card ” + nextCardNumber;
    const newCardText = document.createTextNode(cardTitle);

    const breakOne = document.createElement(“br”) ;

    const newBeforeButton = document.createElement(“button”) ;
    newBeforeButton.setAttribute(“id”,“beforeButton”) ;
    const newBeforeButtonText = document.createTextNode(“Add Before”) ;
    newBeforeButton.appendChild(newBeforeButtonText) ;

    const newCardSpace1 = document.createTextNode(” “) ;

    const newAfterButton = document.createElement(“button”) ;
    newAfterButton.setAttribute(“id”,“afterButton”) ;
    const newAfterButtonText = document.createTextNode(“Add After”) ;
    newAfterButton.appendChild(newAfterButtonText) ;

    const breakTwo = document.createElement(“br”) ;

    const newDeleteButton = document.createElement(“button”) ;
    newDeleteButton.setAttribute(“id”,“deleteButton”) ;
    const newDeleteButtonText = document.createTextNode(“Delete”) ;
    newDeleteButton.appendChild(newDeleteButtonText) ;

    newCard.appendChild(newCardText);
    newCard.appendChild(breakOne) ;
    newCard.appendChild(newBeforeButton);
    newCard.appendChild(newCardSpace1);
    newCard.appendChild(newAfterButton);
    newCard.appendChild(breakTwo) ;
    newCard.appendChild(newDeleteButton);

    nextCardNumber = nextCardNumber + 1;
    return(newCard) ;
}