/////..............BASIC JS LEARNING............////
/////Code is mixed up with everything. I wrote this just for learning & experimenting 
////So didn't care about code quality. Feel free to ignore :)....////


var firstname = "Alan";
var lastnamr = "Turing";

console.log(firstname);

var str = "I am a \"fullstack developer\" and software engineer";
console.log(str);

var str2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(str2);

var str3 = "I come first." ;
str3 += "I come second.";
console.log(str3);


var first = "AdA";

var length1 = first.length;
console.log(length1);

///

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

///Arrays
var ourArray = ["John" , 23];
console.log(ourArray);

///Nested array
var myArr = [["Bulls",23],["White sox",21]];
console.log(myArr);

var data1 = myArr[0];
console.log(data1);

var arr2 = [[1,2,3],[4,5,6],[[10,11,12],13,14]];
console.log(arr2.length);
console.log(arr2 [0][0]);
console.log(arr2[2]);
console.log(arr2[2][0]);
console.log(arr2[2][0][0]);


//Manipulating arrays
//add an ele at the end of the array
var ourArr = ["Star","J","Cat"];
ourArr.push(["happy","sad"]); //add at the end of ourArr

console.log(ourArr);

//remove the last ele of the array
var remArr = [1,2,3];
var rem = remArr.pop();
console.log(rem);
console.log(remArr);

///Shift array
///remove the first ele in the array
var shiftArr = ["Str","J",["cat"]];
var rem1st = shiftArr.shift();
console.log(rem1st);
console.log(shiftArr);

///add an element at the 1st of an array
shiftArr.unshift("Happy");
console.log(shiftArr);

shiftArr.unshift(["John",23]);
console.log(shiftArr);


///Example: Shopping list
var myList = [["cereal",3],["milk",2],["bananas",3]];


///wrtiing varialbes without using var will be automatically
///considerd as global variable 

var myGlobal = 10;

function fun1(){

    oopsGlobal = 0;
}

function fun2(){
    var output = "";
    if(typeof myGlobal != undefined)
        output += "myGlobal: " +myGlobal;

    if(typeof oopsGlobal != undefined)
        output += " oopsGlobal: " +oopsGlobal;

    console.log(output);
}

fun1();
fun2();

///local variable presidence over global variable
var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit()) ///return sweater but here is a catch
///this looks like it changed the value of outerWear
///howver it's not, it just took presidence over global variable 
//if we print outerWear it's still T-Shirt

console.log(outerWear);

///()Queue operation in an array
///New items are added to the back of the queue
///and old items are removed from the front of the queue

function nextInLine(arr, item){

    arr.push(item);


    return arr.shift();

}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));///change the array to string
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));

///Strict equality operator(===)
///Double equal(==) doesn't care about type 
///Since it convert other types to another 
///but triple equal (===) care about types

///10 == "10"-->true
///10 === "10"--->false
///Same theory goes to (!=) & (!==)



///Objects
var friends = ["everything!"];

var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : friends
};


var od = ourDog.friends;
console.log(od);


///accessing value using bracket notation
var val1 = ourDog["name"];
var val2 = ourDog['friends'];

console.log(val1);
console.log(val2);


///updating Obj properties

ourDog.name = "Quincy";
console.log(ourDog);

///adding a new property
ourDog.bark = "bow-wow";
console.log(ourDog);

///delete properties 
delete ourDog.tails;
console.log("After deleting tails " +ourDog);

///Since Objects have key value pairs we can
///use objects for lookup 

function phoneticLookup(val){

    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "frank"
    };

result = lookup[val];

return result;

}

console.log(phoneticLookup("charlie"));

///Complex Objects
var myMusic = [
    {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats":[
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
    },

    {
        "artists": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats":[
            "Youtube video",
            "9T"
        ]
    }


];

console.log(myMusic);



///Accessing nested objects
var myStorage = {
    "car":{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
            "object two":{
                "name": 2
            }
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

//access glove box
var gloveBoxContents = myStorage.car.inside["object two"].name; //because glove box has a space in between we've to use brac notation after inside
console.log(gloveBoxContents);


///Accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]

    },

    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }

    
];

var secondTree = myPlants[1].list[2];
console.log(secondTree);


///Big example. Put things together
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rocks",
            "You Give Love a Bad Name"
        ]
    },

    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },

    "1245": {
        "artist": "Robert Palmar",
        "tracks": []
    },

    "5439": {
        "album": "ABBA Gold"
    }

};

///keep a copy of the collection before change
var collectionCopy = JSON.parse(JSON.stringify(collection));

///The task is update & return the full collection with given id, property & value
///if the value is given with something it'll add at the end of the respective property array
///if the value is given empty it'll delete the whole property 

function updateRecords(id, prop, value){

    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []; ///if the track prop is present it'll be the same if not it'll be assigned an empty track prop first 
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }

    return collection

}

updateRecords(5439,"artist","ABBA");
console.log(collection);
updateRecords("2468","tracks","La La Land");
updateRecords("5439","tracks",[]);
updateRecords("5439","album","");


///Iterate with while loops
var myArray = [];

var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}



console.log("Myarray: "+myArray);

///Nested for loops in a mult array

function multipleArr(arr){
    var product = 1;

    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
                product *= arr[i][j];
        }
    }

    return product;



}

var product = multipleArr([[1,2],[3,4],[5,6,7]]);

console.log("Product: "+product);


///Generate random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() *20);
console.log("Random number between 0 and 19 :" +randomNumberBetween0and19);

///Ternary operators
function checkEqual(a,b){
    return a === b? true : false;
}
console.log(checkEqual(1,2));

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));

///Diff between var & let 
//--> let won't allow a variable decalared twice
//--> var allows that 
//--> let enables strict mode which catches common coding mistakes 
//and unsafe action 

///compare scopes of var & let 
//--> varaible with var is declared globally
//--> however scope of let is limited to block statement or expression
//that it was decalred in

//Example
function checkScope(){
    "use strict";
        let i = "function scope";
        if(true){
            let i = "block scope";
            console.log("Block scope i is: ",i);
        }
        console.log("Function scope i is: ",i);

}

checkScope();

//const
//--> another type of variable declaration
//--. has all feature of let
//--> but it's read only variable means it can't be reassigned

var str = "coding";

const sentence = str + " is cool";
//sentence =  str + " is amazing" //it will generate a syntax  error

///Mutate an array declared with const
 const s = [5,7,2];
 function editInPlace(){
     //s = [2,5,7];--> reassigning array will generate error because of const
     //however we can update the array through index
     s[0] = 2;
     s[1] = 5;
     s[2] = 7;

 }
 editInPlace(); // will genrate an syntax error since const won't allow reassign 
 editInPlace(); //will work now 
 console.log(s);

 ///Prevent object mutation
 //--> use Object.freeze();
function piObj() {
    const MATH_CONSTANT = {
            PI : 3.14
    };
    Object.freeze(MATH_CONSTANT);

    try{
        MATH_CONSTANT.PI = 99
    }catch(ex){
        console.log(ex);
    }

    return MATH_CONSTANT.PI;
        
}

const PI = piObj();
console.log(PI);

///USE ARROW functions to write 
///Concise ANONYMOUS function
const magic = () => new Date();

//pass arguments to the anonymous function
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

//write higher order arrow function 
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList = (arr) => {
    const squaredIntegers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);

    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

///defult parameters
const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

///....................REST OPERATOR(...)............////

///Rest operator(...)
//Rest simply means care about rest of the elements into a collection
const sum = (function(){
    return function sum(x,y,z) {
        const args = [x, y, z];
        return args.reduce((a,b) => a+b,0); //reduce method reduce the total array into single element
        //first x is added to the y & then y is added to the z
    };
})();
console.log(sum(1,2,3));

//--> we can do it using rest operator(...)
const sum2 = (function(){
    return function sum(...args) {
        return args.reduce((a,b) => a+b,0); //reduce method reduce the total array into single element
        //first x is added to the y & then y is added to the z
    };
})();
console.log(sum2(1,2,3,4));

///..................SPREAD OPERATOR.........////

///Spread operator to evaluate arrays in place
const arrCal = ['JAN','FEB','MAR','APR','MAY'];
let arrCop;
(function(){
    arrCop = arrCal; //it didn't copy the array..it's just pointing to the same addr
    arrCal[0] = 'potato';
})();
console.log(arrCop);//will ouput the array with potato
//means anything change in arrCal will also be the change 
//for arrCop

//if we now use spread operator[...]-->
const arrCalS = ['JAN','FEB','MAR','APR','MAY'];
let arrCops;
(function(){
    arrCopS = [...arrCalS]; //it'll copy the contents of arrCalS to arrCopS
    arrCalS[0] = 'potato';
})();
console.log(arrCopS); //will output the contents of arrCalS


///......................DESTRUCTION ASSIGNMENT OPERATOR..................///

///Use destruction assignments
var voxel = {x: 3.6, y: 7.4, z: 6.54};

//destructing syntax
const { x: a, y: b, z: c} = voxel;
console.log(a +" "+ b +" "+ c);

//using destruction in a fucntion
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){

    const {tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES))

//using destruction in a a nested object 
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTomorrow(forecast){

    const {tomorrow: {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST));

///Using destructing assignment to assign variables from array 
const [z,x] = [1,2,3,4,5,6];
console.log(z,x);//will output 1 2 
//if we want to reaturn 2,3,5 we have to use comma to skip 
const[,p,q,,r] = [1,2,3,4,5,6];
console.log(p,q,r);

//use distruction to swap variables
 let m = 8, n = 6;
 (() => {
     [m,n] = [n,m];
 })
console.log(m,n);

///Using destructing assignment with Rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){

    const [ , , ...arr] = list;
    return arr;
}

const resArr = removeFirstTwo(source);
console.log("Array after removing two elements: " ,resArr);
console.log("Source array: ",source);

///Use destructing assignment to pass an object as a function param
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function(){

    return function half(stats){  //here we are passing the whole stats object 
        return (stats.max + stats.min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));

//We don't need to pass the whole object instead 
//with destruction we can pass only what we need 
//see below example

const stats2 = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half2 = (function(){

    return function half({ max, min }){  //here we are passing the whole stats object 
        return (max + min) / 2.0;
    };
})();

console.log(stats2);
console.log(half2(stats2));
///Note: This is often used in Api implementation (calling Get methods & passing the params we need)

///Write concise object literal declarations using simple fields
const createPerson = (name,age,gender) => {

    return{
        name: name, 
        age: age, 
        gender: gender
    };
};
console.log(createPerson("Sohan",24,"male"));

//we can write it in more easy way
const createPerson2 = (name,age,gender) => ({ name, age, gender}); //--> this is object literal
console.log(createPerson2("Asif",24,"male"));

//Using declarative function
//An object can contain a function.
const bicycle = {
    gear: 2,
    setGear: function(newGear){
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//this is a long way to write a function inside objects.
//we can make it shorter using declarative func
const bicycle2 = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
    }
};

bicycle2.setGear(4);
console.log(bicycle2.gear);

///class in js to create a new object
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var jup = new SpaceShuttle('Jupiter');
console.log(jup.targetPlanet);

///Getters & Setters
class Book{
    constructor(author){
        this._author = author; //"_" refers private variable
    }

    get writer(){
        return this._author
    }

    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}


const book1 = new Book('Aurther Konan Doyale');
console.log(book1.author);//will output undefined because author is a private variable

book1.writer = 'Satyajit' //this will update writer into set function
let writer = book1.writer;
console.log(writer);



