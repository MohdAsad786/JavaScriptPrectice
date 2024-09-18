// select element using get element by id
    // ye method document object mey hota hai we can access ussing
    // issey ham id ko access ker saktey jo object deta hai but wo element ki tarah dikhta hai
console.log(document.getElementById('main-heading'));
// if u want to see in real object form use dir
console.dir(document.getElementById('main-heading'));
// check object hai ya nahi
console.log(typeof document.getElementById('main-heading') );

const mainHeading=document.getElementById('main-heading');
console.log(mainHeading); 


const mainHeadingbyqs=document.querySelector('#main-heading');
console.log(mainHeadingbyqs); 


// if i do same name to multiple class to ye pehli wali jo milegi usko hi return karega 
// aur ko ignore karega 
const navItem=document.querySelector('.nav-item');
console.log(navItem);

// if u want sarey nave items 
const navItems=document.querySelectorAll('.nav-item');
console.log(navItems);
// console mey nodelist milegi jismey sarey nav-iem hogey
// ye list array ki tarah dikhti hai but array nahi hoti

const mainHeadingforct=document.getElementById('main-heading');
console.log(mainHeadingforct); 
console.log(mainHeadingforct.innerText);

// we can change text by .textContent
// textContent jo text dikh bhi nahi raha hota wo bhi deta hai
// if u want only which text jo aap dekhna chahtey hai u can use innerText propperty

console.log(mainHeadingforct.textContent);
mainHeadingforct.textContent='we can change content by .textContent'
console.log(mainHeadingforct.textContent);

// if we wont perticuler class in mainheadingperticulerclass 
//  div.thisclassspacethistag
const mainheadingperticulerclass =document.querySelector('div.headline h2')
console.log(mainheadingperticulerclass);
console.log(mainheadingperticulerclass.style);

// style is also a type of object and it is a property
// but we can set css property with style
mainheadingperticulerclass.style.color='red';
// js mey ye -hifen error hai background-color
// we use this backgroundColor camelCase
mainheadingperticulerclass.style.backgroundColor='Green'
mainheadingperticulerclass.style.border="3px solid yellow"  

// get and set attribute
const inputElement=document.querySelector(".form-todo input")
console.log(inputElement);
console.log(inputElement.getAttribute('type'));

const link= document.querySelector("a")
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://amazon.in")
console.log(link.getAttribute("href"));


// get multiple elements using get element by class name
const navItemsmultiple= document.getElementsByClassName("nav-item");  
// console.log(navItemsmultiple);  

// array like object milega htmlcollection we can use only two property of array Hear 
// length , index property
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 
for(let i=0;i<navItemsmultiple.length;i++){
    console.log(navItemsmultiple);
    
}
console.log(navItemsmultiple[1]);   
console.log(Array.isArray(navItemsmultiple));

// get multiple elements using queryselectorAll() we can use this for all elements

// get element by tagname
let elebytagname=document.getElementsByTagName("a");
console.log(elebytagname);
// for(let i=0;i<=elebytagname.length;i++){
//     const itemanchortag=elebytagname[i];
//     itemanchortag.style.background="#fff";
//     itemanchortag.style.color='green';
//     itemanchortag.style.fontWeight='bold';

// }


// for of loop
// for(let ele of elebytagname){
//     ele.style.background="#fff";
//        ele.style.color='green';
//            ele.style.fontWeight='bold';
    
// }


// we can use foreach also but we have to change in array
elebytagname=Array.from(elebytagname);
console.log(elebytagname);
elebytagname.forEach(ele => {
    ele.style.background="#fff";
    ele.style.color='green';
    ele.style.fontWeight='bold';
        
});

// by hershit code 109.js file on github
// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// yaha ham array key sarey method use ker saktey hai
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
    // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);

// innerHtML 
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML); 


// Dom tree
// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 

// DOM.js mey dekho

const section=document.querySelector('.section-todo')
console.log(section);
// for check class 
console.log(section.classList);
section.classList.add(".bg-dark");
const ans=section.classList.contains('container')
console.log(ans);
section.classList.remove('container')
const ans2=section.classList.contains('container')
console.log(ans2);


// hershit code 

//class add remove contains toggle 
// 

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");
const formTodo = document.querySelector(".form-todo");

formTodo.classList.add("bg-dark");
console.log(formTodo);
// advice mostly developer use this method 
// document.createElement()
// append apend sey append hoga
// prepend pre append hoga element
// remove

const newtodoitem=document.createElement('li');
newtodoitem.textContent='teachstudent';
const todolist =document.querySelector('.todo-list');
todolist.append(newtodoitem); 
todolist.prepend(newtodoitem);
console.log(newtodoitem);

// remove 
const todo1=document.querySelector('.todo-list li');
console.log(todo1);
todo1.remove()
console.log(todo1)

// 🔵clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
//🟢 true means yaha deep cloning hogi child node ko bhi copy kareyga 
// li key saath .textContent ko bhi clone kareyga 
// ul.append(li);
// ul.prepend(li2);

// 🔵 static list means no reflection node list deta hai aur jo add kiy hai wo reflect nahi kerta hai
// live list getelementbysomething wala hamey htmlcollection dega jo baad wala bhi reflection dega
// both use have adv and desadv
// ye jyada memory leta(HTMLCollection)

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);

// 🔵 height width dekhney key liye by js getBoundingClientRect()
// how to get the dimension of element
// height width 
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

// 🔵 intro to events
// click event

btn.addEventListener("click", ()=>{
    console.log("arrow function !!!")
});

// this key uper discussion @6:20
// arrow function key case mey this ki value ek level up hogi 
// jaha ham log ker dakey means window function

// this keyword
const btn = document.querySelector(".btn-headline");
// aur aisey waley mey jo method isko call karega 
// btn set hogi yaha per this ki value
btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});

const allButtons = document.querySelectorAll(".my-buttons button");

// we try this with three type of loop
// yaha arrow function na ues kerna wo window dega 
// 90%arrowfunction hi use karege

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

// 🔴🔴🔴
// event object 
// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


const allButtonss = document.querySelectorAll(".my-buttons button");


for(let button of allButtonss){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}

// 🔵🟢task to change color
// little practice with click event
const allButtonsss= document.querySelectorAll(".my-buttons button")
// console.log(allButtons.length);

allButtonsss.forEach(button =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})