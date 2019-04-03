console.log("working")



function makeDiv(message){
	const newDiv = document.createElement("div");
	newDiv.textContent = message;
	newDiv.className = "clPanel";
	console.log("Hi I'm a new Div", newDiv);
	return newDiv;
}

 counter1 = 1;

function onBodyClick(event){
	//console.log("i am a target", bodyTarget);
	//console.log("on Body Click running");
	//console.log("e", event);
	//console.log("run target", event.target);
	event.target.textContent = "BANG" + counter1++;
	event.target.appendChild(makeDiv("i am cool"));
	
}
document.body.addEventListener('click', onBodyClick);

