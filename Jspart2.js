// 1.) comilation phase 🔴code run honey sey pehley compile hota hai
// why? early error cheking 2nd is determinig appropriate scope variable
// 1.tokenizing/laxing
// 2.parsing (iss  tree sey parsing generate hata hai Abstract syntex tree  AST)
// 3.code generation 
// 2.) code execution phase

// According to Ecma Script  
// early error checking honi chahiye or
//  variable scope maloom hona chahiye determinig appropriate scope variable
//  why?because  where is blong to 
// like firstname= 'dr zee' global scope  knows firstname belongs global scope 
// 🟢 2nd thing code execution phase  in js code  run inside execution context called global execution context
// now, Global execution context 
// 1.) creation Phase 
// 2.) code execution phase

// in creation phase var ki value like variable var wala firstname undefined
// window{} already present in creation phase
// creation phase perform like global memory  
// this value depend on envirenment browser key case mey this window object ko point kerta hai
// js is synchronus programming language 
// synchronus ? jab tek ek line execute nahi hoti dusri wali line ko wait kertna hoga single treaded behaviour
// browser key features ki wajah sey isko asyncronus behaviour perform hota hai
// js {} object ki form mey variable store kerta usey environment report kehtey hai
// var sey use hokey banney wala function in global memory mey  undefined hoga 
// example
console.log(myfunction);
var myfunction=function(){
    console.log('myfunction with  var sey use hokey banney wala function in global memory mey  undefined hoga  ');
    
}

// var ki hoisting hoti hai 
// let and const ki bhi hoisting hoti hai
// console.log(checklethoisting); 
// yaha error hai but hoisting ho rahi hai uninitialize uncaught reffrece error
// point jab tek variable uinitialize sey initialize honey  tek beech mey  temporal zone mey tha
// let checklethoisting='let ki bhi hoisting hoti hai'


// 🟢 function return function closure concept
// 🔴 jab function kisi function sey return hota hai to uskey saath uskey data variable ko leker return hota 

function outerFunction(){
    function innerFunction(){
        console.log("inside outer function ");
        
    }
    return innerFunction;
}
const ans =outerFunction();
ans();

function printfullname(firstname,lastname){
    function printName(){
        console.log(firstname,lastname);
        
    }
    return printName
    // printname firstname lastnmae key saath return hoga
}
const ans1 = printfullname("Mohd","Asad");
console.log(ans);
ans1(); // ismey assign hai firstname lastname

function func(){
     let counter=1;
     return function(){
        if(counter<=1){
            console.log('clicked first time');
            counter++;
            
        }else{
            console.log('i have called already');
            
        }
     }
}
const myfunc=func();
myfunc()
myfunc()
const myfunc2=func();
myfunc2();
myfunc2();
myfunc()