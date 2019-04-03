// /*

// 	--- functions and braces nightmare

// */
// console.log("Hello from exercises");
// const array1 = [3,1];
// // write the function that will make this work
// function orderArray(xyz){
// 	console.log("in orderArray", xyz);
// 	if (xyz[0] < xyz[1]) {
// 		//console.log("pos0", xyz[0]);
// 		return [xyz[0], xyz[1]];
// 	} else {
// 		//console.log("Xpos0", xyz[0]);
// 		return [xyz[1], xyz[0]];
// 	}
// }
// console.log("Should Be: 1, 3:", orderArray(array1));

// console.log("Should Be: 1, 5:", orderArray([1, 5]));

// console.log("Should Be: 10, 20:", orderArray([20, 10]));

//---------------------------------------------------------
/*
	--- make me an email
	Write the function that will make this code work.
*/
// console.log("Make me an Email");

// function makeEmail(firstName, lastName){
// 	console.log("I am in makeEmail");

// 	let email = firstName + "." + lastName + "@evolveu.ca";
// 	//console.log("email", email);

// 	return email;
// }


// const larryEmail = makeEmail('larry', 'shumlich');
// const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';


// if (larryEmail != shouldBeLarryEmail) {
// 	console.log("***** We have an error here *****",
// 		larryEmail,
// 		" is not = ",
// 		shouldBeLarryEmail,
// 		" and it should be."
// 	)
// }

// console.log("Larry:", larryEmail);

// console.log("Jane:", makeEmail("jane", "lee"));
// console.log("Bill:", makeEmail("bill", "lee"));
// console.log("Sam:", makeEmail("sam", "lee"));

// //----Write a function that sums the array----
// const numbers = [5,10,15,20];

// let totalSum = 0;
// for(let i=0; i< numbers.length; i++){
// 	totalSum += numbers[i];

// }
// console.log(totalSum);


// /*
// 	----- Write a function to do a String Search ----------
// */

const string_array = [
	'this is a string',
	'that is also a string',
	'what about this',
	'what about that',
];


function look_for_string(arrayS, searchItem){
	let count = 0;
	for (let i=0; i < string_array.length; i++){
		console.log(string_array[i]);

		if (string_array[i].includes(searchItem)){
			count += 1;
		}
	}
	return count;
}

const search1 = "this";
const search2 = "is";

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");


//----------------------------------------------------------------
/*	Write the function that will create this output:
*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals (p1,p2){
	//console.log("in the assertEquals function");
	if (p1 === p2){
		console.log("ok->" + p1);
		return true;
	}
	console.log("The two values are not the same." );
	console.log("p1--> " + p1);
	console.log("p2--> " + p2);
	return false;
}

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");


/*
	Write the function to format an email based on an array
*/
// function makeEmailArr(arrayName){
// 	const emailA = arrayName[0] + "." + arrayName[1] + "@evolveu.ca";
// 	console.log(emailA);
// 	return emailA;
// }

// const arrayLarry = ['larry', 'shumlich'];
// assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
// assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
// assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

/*
	Write the function to format an email based on an object / map
*/
function makeEmailObj(objName){
	let email = objName.fname + "." + objName.lname + "@evolveu.ca";
	return email;
}

// objLarry = {fname:'larry', lname:'shumlich'};
// assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
// assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
// assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));


//----------------------------------------------------------------
const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

function loopStaff(staffData) {
	sArray=[];
	console.log("parameter", staffData);
	for(let i=0; i< staffData.length; i++){
		//console.log(staffData[i]);
		//console.log(makeEmailObj(staffData[i]));
		sArray.push(makeEmailObj(staffData[i]));
		//console.log("sArray", sArray);
	}
	return sArray;
}

const staffEmail = loopStaff(data.staff);
//console.log("staffEmail", staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

//------For Of loop---------------------
function loopWithForOf(staffData){
	sArray=[];
	console.log("for of",staffData);
	for(let person of staffData){
		newEmail = makeEmailObj(person);
		sArray.push(newEmail);
	}
	return sArray;
}
const emailForOf = loopWithForOf(data.staff);
console.log("loopForOf result", emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

//------For In loop---------------------
function loopWithForIn(staffData){
	sArray=[];
	for(let person in staffData){
		newEmail = makeEmailObj(staffData[person]);
		sArray.push(newEmail);
	}
	return sArray;
}
const emailForIn = loopWithForIn(data.staff);
console.log("loopForIn result", emailForIn);
assertEquals('Jane.Smith@evolveu.com', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.ca', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.com', emailForIn[6]);

//-------------For Each-----------------------------------
function loopWithEach(staffData){
	sArray=[];
	staffData.forEach(person => sArray.push(makeEmailObj(person)));
	//console.log("forEach", sArray);
	return sArray;
}

const emailWithEach = loopWithEach(data.staff);
console.log("loopWithEach", emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

//-------------Map-----------------------------------
function loopWithMap(staffData) {
	return staffData.map(person=> makeEmailObj(person));
}

const emailWithMap = loopWithMap(data.staff);
console.log("Map results", emailWithMap);
assertEquals('Jane.Smith@evolveu.com', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);



