// select element using get element by id
    // ye method document object mey hota hai we can access ussing
console.log(document.getElementById('main-heading'));
console.dir(document.getElementById('main-heading'));
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

// we can change text by .textContent
// textContent jo text dikh bhi nahi raha hota wo bhi deta hai
// if u want only which text jo aap dekhna chahtey hai u can use innerText propperty
const mainHeadingforct=document.getElementById('main-heading');
console.log(mainHeadingforct); 
console.log(mainHeadingforct.innerText);

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