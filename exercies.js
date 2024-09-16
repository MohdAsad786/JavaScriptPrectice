const heading=document.querySelector('h1')
console.log(heading);
let headingParentTag=heading.parentNode;

headingParentTag.style.color='yellow'
headingParentTag.style.background='green'
// parenkey bhi parenko access kerna hai
const headingParentofParent=heading.parentNode.parentNode;
console.log(headingParentofParent);
// ek heading select ki
// const h1 = document.querySelector("h1");
// parenkey bhi parenko access kerna hai

// const body = h1.parentNode.parentNode;
// 

// body tag direct selection or uski styling
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
const head = document.querySelector("head");
console.log(head);
// yaha head sey hi agey ley saktey hai kisi bhi element ko
const title = head.querySelector("title");
console.log(title.childNodes);
// if we only see childnode without newlinespace
const container = document.querySelector(".container");
console.log(container.children);

