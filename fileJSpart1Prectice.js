const chai=[
    {prodid:1,prodName:"milk",prodPrice:70},
    {prodid:2,prodName:"Tea",prodPrice:55},
    {prodid:3,prodName:"sugar",prodPrice:45},
    {prodid:4,prodName:"water",prodPrice:20},
    {prodid:5,prodName:"gas",prodPrice:100},

]

// const ammount=chai.reduce((totalPriceaccumalate,currentValue)=>{
    // return totalPriceaccumalate+currentValue.prodPrice;
// },0)
// console.log(ammount);

const checkamoountgreaterhai=chai.some(checkprice=>checkprice.prodPrice>555);
// console.log("is price greaterthen55: if yes return true o/w false in some metod: "+ checkamoountgreaterhai);

// fill method it have two use
//  first we can make array of same value
const myArray=new Array(10).fill(0);
// console.log(myArray);

// 2nd is replace value in array
alreadyArray=[1,2,3,4,5,6,7,8,9,0]
// fill(jis value sey fill kerna hai ,startindex,endindex)
alreadyArray.fill(0,7,9);
// console.log(alreadyArray)

// splice method it do insert delete
// splice method 
// start , delete , insert 

const spliceArray = ['item1', 'item2', 'item3'];

// delete wala dekho
const deletedItem = spliceArray.splice(1, 2);
// console.log("delted item", deletedItem);

// insert wala dekho
// const InsertedItem=spliceArray.splice(1, 0,'inserted one item');
// console.log("inserted item", InsertedItem);


// insert and delete 
const bothItem = spliceArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("both insertion and deletion item", bothItem);
// console.log(spliceArray);

// 🔵 
// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// 🔴 {object not iterable} not iterable

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }
// 🟢point
// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);

// 🔵

// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
const setitems = ['item1', 'item2', 'item3'];
const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// this not add again in set set properperty violatation 
// numbers.add(items);
// 🔴array have diffrerent memory location array will add again
numbers.add(['i1','i2','i3']);
numbers.add(['i1','i2','i3']);
// console.log(numbers);

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);


// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }
// 🔴 map return  array use return in callback function
// 🔵it is called object literals {ismey key hamesha string mey hoti hai ya  phir symbol mey but map mey we suse any type of key string number objectsliterals array etc}

const person=new Map();
person.set('firstName','zeeshan')
person.set('age','30')
person.set('1','child')
// console.log(person);

// or you can set map  this way also 
const pson = new Map([['firstname' ,'Mohd'],['age','30' ],['4','wives']]);
// console.log(pson);

for (const [key,value] of person) {
    // {console.log(key,value);

    
}


const person1 = {
    id: 1,
    firstName: "Krish"
}

const extraInfo = new Map();
extraInfo.set(person1, {gender:'Male',age:25});
console.log(person1.id);
console.log(extraInfo.get(person1).gender);

// clone using object assingn

const obj={
    key1:'value1',
    key2:'value2'
}
console.log(obj);
//🟢 memory location same both data same we need clone the object
// const obj1=obj;
// how to clone
const obj1={...obj}
obj.key3='value';
console.log(obj);
console.log(obj1);

// 🟣optionl chaining when data currently nahi hai after some data will upcome then we confirm and say undefined aur data

const user={
    firstName:'Mohd',
    // address:{housenumber:'121'}
}
console.log(user?.firstName);
console.log(user?.address?.housenumber);

