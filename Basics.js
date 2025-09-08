
//-------- 4. Accept user input ---------------
//#region Accept user input


// to accept user input we can use:-
// 1. prompt() method
// 2. HTML form elements (textbox, radio button, checkbox, dropdown etc.) --> proffectional way
// let userName = "";
// userName = prompt("Enter your name: ");
// document.write("Hello " + userName + "<br>");


// 2. HTML form elements (textbox, radio button, checkbox, dropdown etc.) --> proffectional way

// let userName;

// document.getElementById("button").onclick = function () {
//     userName = document.getElementById("text").value;
//     alert("Hello " + userName);
// }

// changing HTML element content
// document.getElementById("button").onclick = function () {
//     userName = document.getElementById("text").value; 
//     document.getElementById("h1").innerHTML = 'hello ' + userName;
// }
// when user click on button then only onclick function will be called and it will get the value from textbox and display it in h1 tag


//#endregion



// ------- 5. type conversion ---------------
//#region type conversion
// type conversion --> changing a datatype to another one (strings, numbers, boolean..etc)
// its of two types:-
// 1. implicit type conversion (type coercion)
// 2. explicit type conversion (type casting)

//let age = window.prompt("Enter your age: "); // input will be string
// age = age + 1; // implicit type conversion
// console.log(typeof(age)); // string
// console.log(age); // 201

// ------------------------------------------------------
// explicit type conversion

// age = Number(age); // explicit type conversion
// age = age + 1;
// console.log(typeof(age)); // number

// console.log(age); // 21
// ------------------------------------------------------
// strings
// let x = "pizza";
// let y = "pizza";
// let z = "pizza"

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // pizza string
// console.log(z, typeof (z)); // true boolean


// zeros 
// let x = "0";
// let y = "0";
// let z = "0"

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // 0 number
// console.log(y, typeof (y)); // 0 string
// console.log(z, typeof (z)); // true boolean


// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // string
// console.log(z, typeof (z)); // false boolean

// // nulls
// let x ;
// let y ;
// let z ;
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // pizza string
// console.log(z, typeof (z)); // true boolean



//#endregion


// ------- 6. Consts ---------------
//#region Consts

// const --> constant value (value which cannot be changed)

// const pi = 3.14;
// // pi = 3.145; // error
// let radius;
// radius = window.prompt("Enter radius of circle: ");
// radius = Number(radius);
// let area = pi * radius * radius;
// console.log("Area of circle is: " + area);

// --------- from HTML form elements -----------
// const PI = 3.14;
// document.getElementById("button").onclick = function () {
//     let radius = document.getElementById("raduis").value;
//     radius = Number(radius);
//     let area = PI * radius * radius;
//     console.log("Area of circle is: " + area);
//     document.getElementById("result").innerHTML = "Area of circle is: " + area;
// }


//#endregion



// ------- 7. Counter Program ---------------
//#region  Counter Program
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// let value = document.getElementById("value");
// let count = 0;

// decreaseBtn.onclick = function () {
//     count--;
//     value.innerHTML = count;
//     if (count < 0) {
//         value.style.color = "red";
//     }
//     else if (count > 0) {
//         value.style.color = "green";
//     }
//     else {
//         value.style.color = "black";
//     }
// }
// resetBtn.onclick = function () {
//     count = 0;
//     value.textContent = count;
//     value.style.color = "black";
// }

// increaseBtn.onclick = function () {
//     count++;
//     value.innerHTML = count;
// }


//#endregion






