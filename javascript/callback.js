console.log("working");

const array1 = [1,2,3];
array1.forEach(function(item){
    console.log(item);
});

const a = ['a','b','c','d','e'];

function myFunc(p1,p2,p3) {
    console.log(p1,p2,p3);
}
a.forEach(myFunc);


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


function myCallBackFunc(a1, func){
    console.log("in the myCallBackFunc");
    console.log("staff", a1);
    console.log("func", func);
    for(let i=0; i< a1.length; i++){
        //console.log("index array", a1[i]);
        func(a1[i]);
    }
}

function myWorkerFunc(x1){
    console.log("in the myWorkerFunc", x1);

}

myCallBackFunc(data.staff, myWorkerFunc);
// myWorkerFunc("abc");