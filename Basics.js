
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

// ------- 8. Math Object ---------------
//#region Math Object
// let pi = Math.PI;
// console.log('pi ' + pi);
// let euler = Math.E;
// console.log('euler number: ' + euler); 

// // 2. Basic Math Methods
// let roundNumber = Math.round(3.6);    // Rounds to nearest integer (4)
// let flooNumber = Math.floor(3.9);    // Rounds down to integer (3)
// let ceilNumber = Math.ceil(3.1);      // Rounds up to integer (4)
// let absNumber = Math.abs(-5);         // Returns absolute value (5)

// // 3. Power and Square Root
// let power = Math.pow(2, 3);         // 2 raised to the power of 3 (8)
// let sqrt = Math.sqrt(16);           // Square root of 16 (4)

// // 5. Min and Max
// let minNumber = Math.min(3, 1, 4, 2); // Minimum value (1)
// let maxNumber = Math.max(3, 1, 4, 2); // Maximum value (4)

// // 6. Random Number
// let randomNum = Math.random();       // Random number between 0 and 1
// let randomNumRange = Math.floor(Math.random() * 100) ; // Random number between 1 and 100

// console.log('randomNumRange: ' + randomNumRange);

// // 7. Trigonometry
// let sinValue = Math.sin(0);    // Sine of angle in radians
// let cosValue = Math.cos(0);    // Cosine of angle in radians
// let tanValue = Math.tan(0);    // Tangent of angle in radians

//#endregion

// ------- 9. Random Number Generator ---------------
//#region Random Number Generator



//#endregion

//  ----------- 10. If Statments --------------
//#region 

// let age = 21;
// if (age >= 21)
// {
//     console.log("hi there, your are old enough");
// }
// else 
// {
//     console.log("you are under age ");
// }

// let hasLicense = false;
// if (age >= 16)
// {
//     console.log("can has licence!");
//     hasLicense = true;
// }
// else 
// {
//     hasLicense = false;
// }


// ---- HTML checka age

// const text = document.getElementById("text");
// const submit = document.getElementById("submit");
// submit.onclick = function(){
//     age = text.value
//     age = Number(age);

//     if (age > 21) {
//         document.getElementById("result").innerHTML = "your are authorized to work!";
//     }
//     else {
//         document.getElementById("result").innerHTML = "you are not authorized to work!";
//     }
// }



//#endregion

//  ----------- 11. checked Button  ------------------ 
//#region checked Button

// const checkbox = document.getElementById("checkbox");
// const Visa = document.getElementById("Visa");
// const Paybal = document.getElementById("Paybal");
// const Mastercard = document.getElementById("Mastercard");
// const submit = document.getElementById("submit");
// const paymentResult = document.getElementById("paymentResult");
// const subResult = document.getElementById("subResult");

// // when user clicks submit , check if chekcBox is checked , if yes: 
// submit.onclick = function (){
//     if (checkbox.checked){
//         subResult.innerHTML = "you are subiscribed !"; // do this
//     }
//     // if no :
//     else {
//         subResult.innerHTML = "you are not subiscribed"
//     }

//     if (Visa.checked){
//         paymentResult.innerHTML = "you are paying with Visa !"
//     } 
//     else if (Paybal.checked){
//         paymentResult.innerHTML = "you are paying with Paybal"
//     }
//     else if (Mastercard.checked){
//         paymentResult.innerHTML = "you are paying with Mastercard"
//     }
//     else {
//         paymentResult.innerHTML = "please select a payment method"
//     }
// }


//#endregion

//  ----------- 12. Ternary Operators ------------------
//#region Ternary Operators

// let age = 20;
// // condition ? true : false
// let message = age >= 21 ? "you are adult" : "your are not adult";
// console.log(message);

// let time = 10;
// let welcomeMessage = time < 12 ? "Good morning" : "Good afternoon";
// console.log(welcomeMessage);

// let isMember = true;
// let discount = isMember ? 0.1 : 0;
// console.log("Discount: " + discount * 100 + "%");



//#endregion

// ----------- 13. Switch Statement ------------------
//#region Switch Statement
// let day = 3;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:

//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4: 
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }
// console.log("Day name: " + dayName);

//#endregion

// ----------- 14. string methods ------------------
//#region string methods

// let name = "mostafa";
// let firstChar = name.charAt(0); // m
// console.log("First character: " + firstChar);

// let indexOfS = name.indexOf('s'); // 2
// console.log("Index of 's': " + indexOfS);

// let lenghtOfName = name.length; // 7
// console.log("Length of name: " + lenghtOfName);

// // trim() => Removes the leading and trailing white space and line terminator characters from a string.
// let userName = "   mostafa   ";
// console.log("Before trim: '" + userName + "'");
// let trimmedName = userName.trim(); // "mostafa"
// console.log("After trim: '" + trimmedName + "'");

// console.log (userName.trim().toUpperCase()); //  
// console.log (userName.trim().toLowerCase()); // 


// let name = "mostafa";
// let result = name.includes('s'); // true
// console.log("Includes 's': " + result); // true

// let slixedName = name.slice(1, 4); // ost
// console.log("Sliced name: " + slixedName); // ost

// let replacedName = name.replace('m', 'M'); // Mostafa
// console.log("Replaced name: " + replacedName); // Mostafa

// let test = name.repeat(3); // mostafamostafamostafa
// console.log("Repeated name: " + test); // mostafamostafamostafa

// let phoneNumber = "123-456-7890";
// let cleanedNumber = phoneNumber.replace(/-/g, ''); // 1234567890
// console.log("Cleaned phone number: " + cleanedNumber); // 1234567890

// // Pad the phone number to ensure it has a total length of 12 characters, adding '*' at the start if necessary
// // pad is to add chars , adding numbers of chars and the char to be added
// let phone = phoneNumber.padStart(12, '*'); // ***123-456-7890
// console.log("Padded phone number: " + phone); // ***123-456-7890


//#endregion

// ----------- 15. stirng slicing  ------------------
//#region stirng slicing
// let fullName = "mo nagy";
// let firstName = fullName.slice(0, 2);
// console.log(firstName); // mo
// // let lastName = fullName.slice(3, fullName.length);
// let lastName = fullName.slice(3); // the same
// console.log(lastName); // nagy

// // let fullName = "mostafa nagy";
// // let firstName = fullName.slice(0, fullName.indexOf(" ")); // mostafa
// // console.log(firstName);

// // let lastName = fullName.slice(fullName.indexOf(" ") + 1); // nagy
// console.log(lastName);


// let email = "nagy10@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

// let exstension = email.slice(email.indexOf("@"));
// console.log(exstension);


//#endregion

// ----------- 16. Method Chaining ------------------
//#region Method Chaining

// no method channing
// let username = "   moSTafa  ";
// let cleanName = username.trim().toLocaleLowerCase();
// let upperChar = cleanName[0].toUpperCase();
// console.log(upperChar);
// let result = upperChar + cleanName.slice(1);
// console.log(result);

// // method channing 
// let username = "   moSTafa  ";
// let cleanName = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(cleanName);

//#endregion

// ---------- 17. strict equality operator -----------------
//#region strict equality operator
// = assignment operator
// == comparsion operator --> only check values are equals
// === strict equality operator --> check values and datatypes are equals
// != --> check values are not equals
// !== strict equality operator --> check values and datatypes are not equals

// const PI = 3.14;
// let pi = "3.14;"
// if (PI == "3.14"){
//     console.log('this is true in ==');
// }

// if (PI === "3.14"){
//     console.log('this is true');
// }
// else {
//     console.log("this is not true in ===");
// }


// let number = Number(1);
// let stringNumber = "1";
// if (number == stringNumber){
//     console.log("this is true in == ");
// }
// else {
//     console.log("GEEEKs");
// }

// if (number === stringNumber){
//     console.log("this is should be false");
// }
// else {
//     console.log("this is false in ===");
// }



//#endregion

// ---------- 18. while loop -----------
//#region while loop

// let isLoggedIn = false;
// let userName = "";
// let password = "";

// while(!isLoggedIn){
//     userName = window.prompt("please enter username");
//     password = window.prompt("please enter password");
//     if (userName === "nagy" && password === "nagy10"){
//         isLoggedIn = true;
//         console.log("you are logged in")
//     }
//     else {
//         console.log("invalid creds, please try again!");
//     }
// }


//#endregion

// ----------- 19. for loop -----------------
//#region for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//#endregion

// ------------ 20. Functions ------------------
//#region Functions
// function HappyBirthday(name){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!" + name);   
// }
// HappyBirthday("mostafa");

// function addTwoNumbers(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let result = addTwoNumbers(3, 5);
// console.log(result);
//#endregion

// ----------- 21. Variable Scope  ------------------
//#region Variable Scope

// function myFunction() {
//     let carName = "Volvo"; // local scope
//     console.log(carName);
// }

// let carName = "Toyota"; // global scope
// console.log(carName); // Toyota
// myFunction(); // Volvo

//#endregion

// ----------- 22. Temperature conversion program   ------------------
//#region Temperature conversion program

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//     if (toFahrenheit.checked) {
//         temp = Number(textBox.value);
//         let fahrenheit = (temp * 9 / 5) + 32;
//         result.innerHTML = temp + "°C is " + fahrenheit + "°F";
//     }
//     else if (toCelsius.checked) {
//         temp = Number(textBox.value);
//         let celsius = (temp - 32) * 5 / 9;
//         result.innerHTML = temp + "°F is " + celsius.toFixed(2) + "°C";
//     }
//     else {
//         result.innerHTML = "please select a conversion type";
//     }
// }

//#endregion

// ----------- 23. Arrays------------------
//#region Arrays
// let arr = ["nagy", "ahmed", 22];
// console.log(arr);
// // (3) ['nagy', 'ahmed', 22]
// console.log(arr[0]); // nagy
// // etc...


// arr.push("test");
// console.log(arr); // (4) ['nagy', 'ahmed', 22, 'test']
// arr.pop();
// console.log(arr); // (3) ['nagy', 'ahmed', 22]

// let lengthofArray = arr.length;
// console.log(arr);

// let indexOfNagy = arr.indexOf("nagy");
// console.log(indexOfNagy); // 0

// let indexOfAhmed = arr.indexOf("ahmed");
// console.log(indexOfNagy); // 1

// let indexOfNon = arr.indexOf("none");
// console.log(indexOfNon); // -1


// // for loop in js
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// // anohter syntax
// for(let element of arr){
//     console.log(element);
// }

//#endregion

// --------------- 24. seperated operators -----------------
//#region seperated operators

// let name = "mostafa";
// console.log(...name); // m o s t a f a
// // seperate the elements

// let letters = [...name].join(",");
// console.log(letters); // m,o,s,t,a,f,a

// let front_end = ["HTML", "CSS", "javascript"];
// let Back_end = ["SQL, C#", "API"];
// let web = [...front_end, ...Back_end];
// console.log(web); // (5) ['HTML', 'CSS', 'javascript', 'SQL, C#', 'API']

// function AddFoods(...foods){
//     console.log(foods);
// }

// let food1 = "pizza";
// let food2 = "burger";
// let food3 = "checken";
// let food4 = "salad";

// AddFoods(food1, food2, food3, food4);
// (4) ['pizza', 'burger', 'checken', 'salad']
// u can pass it any parametrs u want to pass

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const result = sum(1, 2, 3);
// console.log(result); // 6

// function joinNames(...fullName){
//     return  SVGStringList.join(" ");
// }

// const fullName = joinNames("MR. ", "Mostafa", "Nagy", "Helmy");
// console.log(fullName)

//#endregion

// --------------- 25. Dice Roller program 🎲 ------------
//#region  Dice Roller program 🎲


//#endregion


// START -> #29 03:58:44 