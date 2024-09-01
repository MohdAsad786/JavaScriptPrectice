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
// console.log(user?.firstName);
// console.log(user?.address?.housenumber);

// 🟣
// methods
// function inside object

// create your own method 
function personInfo(){
    // console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person4 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person5 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person6 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

// person4.about();
// person5.about();
// person6.about();

// 🔴 this and window same thing  this is global object of js u can use strict mode "use strict "

// 🟣 call apply bind 


const user1 = {
    firstName : "Habib",
    age: 8,   
     about:function(hobby){
        console.log(this.firstName, this.age,hobby);
}
}
const user2 = {
    firstName : "Khabib",
    age: 9,
    
}
// 🔴 if u use function jo aapney define bhi na kiya ho uss object then we use call(ager iskey ander kuch nahi to undifend dega o/w usi ko call karega )

// user1.about.call(user1);
// user1.about.call(user2,"Thinking");
// 🟢user1.about.call();

// 🟣 apply
// 🟢internallyy apply bhi call ko use kerta hai parameter array mey leta hai
function about(hobby, favretthing){
    console.log(this.firstName, this.age, hobby, favretthing);
}
const user3 = {
    firstName : "Zaid",
    age: 8,   
}
const user4 = {
    firstName : "Haris",
    age: 9,
    
}

// about.apply(user3, ["Thinking", "Quran-e-kareem"]);



// 🟣 bind method
// 🟢 bind return function 
const funcofbind = about.bind(user4, "walking", "visiting");
funcofbind();


// 🟣 Dont do that reference store honey per undefined dega 
myfunc=user1.about;
myfunc();

// this way correct u can use bind method
myfunc=user1.about.bind(user1,"hi");
myfunc();

// 🔴 Arrow function ka this nahi hota don't try with arrow functon always access this with function expression 

// 🟣 // arrow functions 


const user7 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

const user8 = {
    firstName : "harshit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}



user8.about();

// 🟣 

const objx = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

//🔴 __proto__ , [[prototype]] same thing



//🔴 prototype    but it diffretnt from __proto__

const objy = Object.create(objx);
 // {} object.Create(referance) it's giving two thing to you the firstone is that empty Object {} the secondone is creating chaining or connection
// there is one more way to create empty object
objy.key3 = "value3";
// obj2.key2 = "unique";
console.log(objy);

console.log(objy.__proto__); 
//🔴__proto__ is a referance of objx

// 🟣

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    education: function(){
        return ` your education from ${country}`;
    }
}

function creaatUser(firstName , lastname,age,country){
    const user=Object.create(userMethods);
    user.firstName=firstName;
    user.lastname=lastname;
    user.country=country;
    user.age=age;
    return user;
}

const user01= creaatUser('Mohd','Asad',27,'India');
const user02= creaatUser('Talib','Saeed',27,'India');
console.log('about yourself' ,user01.about());
console.log(user02);


// 🟣 portotype
function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object package of both

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); 🔴 {} free space milta hai we can add key value pair and function also

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

function createUser(firstName , lastname,age,country){
    const user=Object.create(prototype);
    user.firstName=firstName;
    user.lastname=lastname;
    user.country=country;
    user.age=age;
    return user;
}

createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function(){
        return this.age >= 18;
    };

createUser.prototype.education=function(){
        return ` your education from ${country}`;
    };
    
const user03= creaatUser('Zaid','Saeed',27,'India');
const user04= creaatUser('Bilal','Asad',23,'India');

console.log(user03.about());
console.log(user04.is18());


    
    // 🔴 prototype is a object / literals {} with free space jitna chaho function add karo
    //  [[prototype]] or__proto__ is a referance type like Object.create(referance)
    // p