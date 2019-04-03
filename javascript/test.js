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

//---------------March 21 assignment-----------------------------------------
// write a function to receive the same array and return the total of balances
// create a table of objects of people having name and age
// write a function to receive the above array and return total of the ages
// write a function to receive the above array and average the ages


function staffTotal(staffData){
  const staffBalance = staffData.map(function(cost){
    return cost.balance;
  });
  const totalBalance = staffBalance.reduce(function(prev, curr){
    return prev + curr;
  });
  console.log(staffBalance);
  console.log(totalBalance);
}
staffTotal(data.staff);

//------------------------------------------------

const family = [
  {name:"Larry", age:70},
  {name:"Peggy", age:70},
  {name:"Larissa", age:44},
  {name:"Jackie", age:40}
  ];

// Find the total age of all family members
function famTotalAge(person){
  const familyAge = person.map(function(ageCalc){
    return ageCalc.age;
  });
  const totalAge = familyAge.reduce(function(prev, curr){
    return prev + curr;
  });
  return totalAge;
}
console.log("Family Total Age", famTotalAge(family));

//--------------------------------------------------

// Average the ages of the family members
function famAgeAvg(person) {
  const famAvgAge = famTotalAge(person) / person.length;
  return famAvgAge;
}
console.log("Family Avg Age is ", famAgeAvg(family));


//-------More Array Exercises (Really) - March 28, 2019 ---------
// Using one of the callback functions we researched in the last exercise
// (but may have not used previously) create a new array for balances >= 1000.

function assertEquals (p1,p2){
  if (p1 === p2){
    console.log("ok->" + p1);
    return true;
  }
  console.log("The two values are not the same." );
  console.log("p1--> " + p1);
  console.log("p2--> " + p2);
  return false;
}

let largeBalances = data.staff.filter(employee => employee.balance >= 1000);
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

//------ March 29, 2019 --------------------------------
// Write a reduce function to total the balances.

let tot = data.staff.reduce((prev, curr) => {
  return prev + curr.balance;
},0);

console.log(tot);
//assertEquals(tot, 3823);
