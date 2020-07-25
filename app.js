alert("CAN'T COMPLETE DUE TO EXAMS")

// //                                          // Alerts
// // // task no 1
alert("hello dear user");
// // // task no 2
alert("Error! Please enter a valid Password");
// // // task no 3
alert("Welcome to JS Land... \n Happy Coding!");
// // // task no 4
alert("welcome to js land...");
alert("Happy Coding!");
// // // task no 5
console.log("Hello.. I can run js through web browser's console")
    // // // task 6 
    // // //done by applying in this project
    // //task 7 a,b,d done //task 7 c at line 63
    //                                             //variables for strings
    // all tasks done 
var username;
var myName = "Muhammad Muaz";
var message;
message = "Hello World";
alert(message);
var studentName = "jhone doe";
var studentAge = "15 years old";
var job = "Certified Mobile Application developvent";
alert(studentName);
alert(studentAge);
alert(job);
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
var email = "example@gmail.com";
alert("my email address is " + email);
var book = "A smarter \nway to learn JavaScript";
alert("I am trying to learn from the book" + book);
document.write("Yah! I can write HTMl through jS");
var iconString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(iconString);
// variables for numbers
// all tasks done
var age = 15;
alert("I am " + age + " years old");
var numberOfVisits = 14;
alert("you have visited this site " + numberOfVisits + " times");
var birthYear = 1999;
document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");
var visitorName = "Jhon Doe";
var product = "T-Shirt";
var quantity = 5;
document.write("<br>" + visitorName + " ordered " + quantity + product + " on XYZ clothing store.");
// VARIABLE NAMES: Legal & Illegal
// task 1
var name, age, last;
// task 2
var name, age, last, job, color;
// var 09name, @name, class, var, %color;
// task 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, underscore, $ sign <br> For example $my_1stVariable <br>");
document.write("Variables must begin with a letter, underscore or $ sign");
document.write("variable names are case sensitive <br>");
document.write("Variable names should not be JS keywords<br>");
// math expressions
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>");
var d = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + d + "<br>");
var e = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + e + "<br>");
var f = a / b;
document.write("Division of " + a + " and " + b + " is " + f + "<br>");
var g = a % b;
document.write("Modulus of " + a + " and " + b + " is " + g + "<br>");
// task 3
var mu;
document.write("Value after variable declaration is: " + mu + "<br>");
mu = 15;
document.write("Initial value is: " + mu + "<br>");
mu++;
document.write("Value after increment is: " + mu + "<br>");
mu += 7;
document.write("Value after addition of 7 is: " + mu + "<br>");
mu--;
document.write("Value after decrement is: " + mu + "<br>");
mu %= 3;
document.write("Remainder is: " + mu + "<br>");
var tickectCost = 600;
var totalCost = 600 * 5;
document.write("Total cost of buying 5 movie tickets is: " + totalCost + "PKR" + "<br>");
// // task 5
for (i = 1; i <= 10; i++) {
    var t = 5;
    document.write(t + " * " + i + " = " + t * i + "<br>");
}
// // task 6
tempInC = 25;
document.write(tempInC + "C is " + (tempInC * 9 / 5 + 32) + "F<br>");
tempInF = 70;
document.write(tempInF + "F is " + (tempInF - 32) * 5 / 9 + "C<br>");
var item1 = 650;
var item2 = 100;
var order1 = 3;
var order2 = 7;
var ship = 100;
var Tootal = item1 * order1 + item2 * order2 + ship;
document.write("Price of item 1 is: " + item1 + "<br>");
document.write("Quantity of item 1 is: " + order1 + "<br>");
document.write("Price of item 2 is: " + item2 + "<br>");
document.write("Quantity of item 2 is: " + order2 + "<br>");
document.write("Shipping Charges: " + ship + "<br>");
document.write("Total cost is: " + Tootal + "<br>");
var totalMarks = 980;
var obMarks = 804;
document.write("Total marks is: " + totalMarks + "<br>" + "Marks obtained: " + obMarks + "<br>" + "Percentage is: " + 804 / 980 * 100 + "% <br>");
var favSnak = "choclate chip";
var curAge = 20;
var maxAge = 60;
var amount = 5;
var totalSnaks = (maxAge - curAge) * 365 * amount;
document.write("Favourite snaks: " + favSnak + "<br>");
document.write("Curent age: " + curAge + "<br>");
document.write("Estimated max age: " + maxAge + "<br>");
document.write("Amount of snaks per dey: " + amount + "<br>");
document.write("You will need " + totalSnaks + " " + favSnak + " to last you untill the ripe old age of " + maxAge + "<br>");
// Ch 6-9
var A = 10;
document.write("Result: <br> The value of a is: " + A + "<br>");
document.write("....................................." + "<br>");
document.write("the value of ++a is: " + ++A + "<br>");
document.write("now the vale of a is: " + A + "<br>");
document.write("the value of a++ is: " + A++ + "<br>");
document.write("now the vale of a is: " + A + "<br>");
document.write("the value of --a is: " + --A + "<br>");
document.write("now the vale of a is: " + A + "<br>");
document.write("the value of a-- is: " + A-- + "<br>");
document.write("now the vale of a is: " + A + "<br>");
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write("a: " + a + "<br>" + "b: " + b + "<br>" + "result:" + result + "<br>");
--a;
document.write("a: " + a + "<br>" + "b: " + b + "<br>" + "result:" + result + "<br>");
--a - --b;
document.write("a: " + a + "<br>" + "b: " + b + "<br>" + "result:" + result + "<br>");
--a - --b + ++b;
document.write("a: " + a + "<br>" + "b: " + b + "<br>" + "result:" + result + "<br>");
--a - --b + ++b + b--;
document.write("a: " + a + "<br>" + "b: " + b + "<br>" + "result:" + result + "<br>");
var userName = prompt("Enter your name", "Muaz");
alert("Hello " + userName);
var t = parseInt(prompt("Enter a number for table:", "5"));
for (i = 1; i <= 10; i++) {
    document.write(t + " * " + i + " = " + t * i + "<br>");
}

// task 6
var sub1 = prompt("Enter 1st subject: ");
var sub2 = prompt("Enter 2nd subject: ");
var sub3 = prompt("Enter 3rd subject: ");
var totalmarks = 100;
var obMarks1 = parseInt(prompt("Enter obtained marks for 1st subject: "));
var obMarks2 = parseInt(prompt("Enter obtained marks for 2nd subject: "));
var obMarks3 = parseInt(prompt("Enter obtained marks for 3rd subject: "));
var per1 = obMarks1 / totalmarks * 100;
var per2 = obMarks2 / totalmarks * 100;
var per3 = obMarks3 / totalmarks * 100;
var omarks = totalmarks * 3;
var oobmarks = obMarks1 + obMarks2 + obMarks3;
var totalper = oobmarks / omarks * 100;
document.write("<b>Subject</b> <b>Total Marks</b> <b>Obtained Marks</b> <b>Percentage</b> <br>");
document.write(sub1 + " " + totalmarks + " " + obMarks1 + " " + per1 + "% <br>");
document.write(sub2 + " " + totalmarks + " " + obMarks2 + " " + per2 + "% <br>");
document.write(sub3 + " " + totalmarks + " " + obMarks3 + " " + per3 + "% <br>");
document.write(omarks + " " + oobmarks + " " + totalper + "% <br>");
// User Input & Conditional Statement
var city = prompt("Enter city name: ");
if (city == "Karachi") {
    alert("Welcome to the sity of lights!");
} else if (city == "Faisalabad") {
    alert("Welcome to home of Cotton Industury!");
} else if (city == "Lahore") {
    alert("Welcome to the city of Lively!");
} else {
    alert("Enter correct value");
}
// task 2
var gender = prompt("Enter ur gender: ");
if (gender == "male") {
    alert("good morning sir")
} else if (gender == "female") {
    alert("good morning maam")
} else {
    alert("Enter correct value: ")
}
// task 3
var color = prompt("Enter road signal");
if (color == "red") {
    alert("Must stop")
} else if (color == "yellow") {
    alert("ready to move")
} else {
    alert("move now")
}
// task 4
var fuel = prompt("Enter fuel in liters");
if (fuel < .25) {
    alert("please refill fuel")
} else {
    alert("u are good to go")
}
// task 5
// a) output: alert will be shown
// b) won't run
// c) condition 2,3 will run
// d) cost is equal
// e) True
// f) alert will run
var firstParameter, secondParamert, operator;
firstParameter = parseInt(prompt("Enter first number: ", 5));
secondParamert = parseInt(prompt("Enter sencond number: ", 5));
operator = prompt("Enter operator: ", "%");
if (operator == "+") {
    alert("Result: " + (firstParameter + secondParamert))
} else if (operator == "-") {
    alert("Result: " + (firstParameter - secondParamert))
} else if (operator == "*") {
    alert("Result: " + (firstParameter * secondParamert))
} else if (operator == "/") {
    alert("Result: " + (firstParameter / secondParamert))
} else {
    alert("Result: " + (firstParameter % secondParamert))
}
// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION
var chara = parseInt(prompt("Enter number or chatachter"));
if (chara >= 0 || chara <= 9) {
    alert("Entered value is a number");
} else if (chara >= 65 || chara <= 90) {
    alert("Entered value is uppercase letter");
} else if (chara >= 97 || chara <= 122) {
    alert("Entered value is lowercase letter");
} else {
    alert("Enter correct value");
}
var first = parseInt(prompt("Enter first value"));
var second = parseInt(prompt("Enter second value"));
if (first > second) {
    alert("first is greater");
} else if (first < second) {
    alert("second is greater");
} else if (first == second) {
    alert("both are equal");
}
var num = parseInt(prompt("Enter number: "));
if (num > 0) {
    alert("number is positive");
} else if (num < 0) {
    alert("number is negative");
} else {
    alert("number is zero");
}
// task password
var pass = "hello";
var enteres = prompt("Enter Password");
if (enteres == "") {
    alert("enter your password")
} else if (enteres == pass) {
    alert("Correct!")
} else {
    alert("Incorrect password")
}
// task 6 fixed
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// task flowchart
var inputTime = parseInt(prompt("Enter time in 24hrs format: "));
if (inputTime >= 0000 && inputTime < 1200) {
    alert("Good Morning!")
} else if (inputTime >= 1200 && inputTime < 1700) {
    alert("Good Afternoon!")
} else if (inputTime >= 1700 && inputTime < 2100) {
    alert("Good evening!")
} else if (inputTime >= 2100 && inputTime < 2359) {
    alert("Good Night!")
} else {
    alert("Input correct Time")
}
// Arrays 
var studentName = [""];
var studentName = new Array;
var string = ["ali", "muaz", "aiman"];
var numb = [1, 2, 5, 45];
var bool = [true, false];
var mix = ["ali", 25, false];
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
for (i = 0; i <= 7; i++) {
    document.write((i + 1) + ")" + qual[i] + "<br>");
}
// task 8
var studentNames = [];
var score = [];
var totalMarks = 500;
for (i = 0; i <= 2; i++) {
    studentNames[i] = prompt("Enter name of " + (i + 1) + " student");
    score[i] = parseInt(prompt("Enter score of " + (i + 1) + " student"))
}
for (i = 0; i <= 2; i++) {
    document.write("Score of " + studentNames[i] + " is " + score[i] + ". Percentage is: " + (score[i] / totalMarks) * 100 + "%<br>")
}
// task 9
var colors = ["red", "blue", "purple", "yellow"];
document.write("Colors before addition at start: " + colors + "<br>");
colors.unshift(prompt("Add the color of your choice at start"));
document.write("Colors after addition at start: " + colors + "<br>");
colors.push(prompt("Add the color of your choice at end"));
document.write("Colors after addition at end: " + colors + "<br>");
colors.unshift("black", "purple");
document.write("Colors after adding two at start: " + colors + "<br>");
colors.shift();
document.write("Colors after del first at start: " + colors + "<br>");
colors.pop();
document.write("Colors after del first at end: " + colors + "<br>");
document.write("Add colors to your choice of index: " + colors.splice(parseInt(prompt("Enter where you want to add")), 0, prompt("Enter color of your choice")) + colors + "<br>");
document.write("Colors after del of ur choice: " + colors.splice(parseInt(prompt("Enter index from where u want to del:")), parseInt(prompt("enter how many u want to del"))) + colors + "<br>")
scores = [320, 230, 480, 120];
scores.sort();
var cities = ["Karachi", "Lahore", "Faisalabad", "islamabad", "quetta"];
var selectedCities = cities.slice(0, 2);
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
// task 15
var phone = ["apple", "sony", "samsung", "motorola", "nokia", "huawei"];
document.write("<select><option>" + phone[0] + "</option><option >" + phone[1] + "</option><option>" + phone[2] + "</option><option>" + phone[3] + "</option><option>" + phone[4] + "</option><option>" + phone[5] + "</option></select>")
    // ARRAYS AND LOOPS
var arr = [
    [],
    [],
    []
];
arr[0] = [2, 3, 4];
arr[1] = ["a", "b"];
arr[2] = [true, false];
var arrMulti = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}
var tnumber = parseInt(prompt("Enter table number", "2"))
var tlength = parseInt(prompt("Enter table length", "10"))
for (i = 1; i <= tlength; i++) {
    document.write(tnumber + " * " + i + " = " + tnumber * i + "<br>");
}
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (i = 0; i <= 4; i++) {
    document.write(fruits[i] + "<br>")
}
var counting = [];
for (i = 0; i <= 14; i++) {
    counting[i] = i + 1;
}
document.write(counting.reverse())
for (i = 0; i <= 14; i++) {
    if (i % 2 == 0 || i == 0) {
        document.write(i)
    }
}
for (i = 0; i <= 14; i++) {
    if (i % 2 == 1) {
        document.write(i)
    }
}
var bakery = ["cake", "apple pie", "cookie", "chips", "patties", "sandwich"]
var oderTake = prompt("Enter order");
var found = bakery.indexOf(oderTake);
if (found == -1) {
    document.write("We are sorry. " + oderTake + " is not available at our bakery.");
} else {
    document.write(oderTake + " is available at index " + found)
}
var numb = [24, 53, 78, 91, 12];
var largest = 0;
for (i = 0; i < numb.length; i++) {
    if (numb[i] > largest) {
        largest = numb[i]
    }
}
document.write("Largest number is: " + largest);
var smallest = numb[0];
for (i = 0; i < numb.length; i++) {
    if (numb[i] < smallest) {
        smallest = numb[i]
    }
}
document.write("Smallest number is: " + smallest);
for (i = 1; i <= 20; i++) {
    document.write(i * 5 + " ")
}
// 21-25
var fullName = prompt("Enter First Name: ") + " " + prompt("Enter Last Name:");
alert("Hello " + fullName);

var model = prompt("Enter mobile model: ");
alert("My fav phone is: " + model + "\n" + "Length of string: " + model.length);

var str = "Pakistani"
document.write("String: " + str + "<br>" + "Index of 'n': " + str.indexOf("n"))

var str1 = "Hello World";
document.write("Last index of l in Hello World is: " + str1.lastIndexOf("l"));

document.write("String: " + str + "<br>" + "Char at index 3: " + str.charAt(3));
//  task 6 works alone
var fullName = prompt("enter first name: ").concat(prompt("enter last name: "));
alert("Hello " + fullName);

var str3 = "Hyderabad";
document.write("city: " + str3 + "<br>" + "after replacement: " + str3.replace("Hyder", "Islam"));

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Before: " + message + " <br>" + "after: " + message.replace(/and/g, "&"))

var str4 = "472";
document.write("value: " + str4 + "<br>" + "type: " + typeof(str4) + "<br>" + "value: " + str4 + "<br>" + "type: " + typeof(parseInt(str4)));

alert(prompt("Enter: ").toUpperCase());

var str5 = prompt("Enter: ");
var str7 = str5.slice(1)
var str6 = str5.slice(0, 1).toUpperCase();
alert("Uppercase: " + str6 + str7);

var num = 35.36;
alert(num + "\n" + num.toString().replace(".", ""));

var username = prompt("Enter username: ");
for (i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i)
    switch (code) {
        case 33:
            alert("Enter valid username: ! not allowed")
            break
        case 44:
            alert("Enter valid username: , not allowed")
            break
        case 46:
            alert("Enter valid username: . not allowed")
            break
        case 64:
            alert("Enter valid username: @ not allowed")
            break
    }
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var toSearch = prompt("Input item to search");
for (i = 0; i < A.length; i++) {
    if (toSearch === A[i]) {
        alert("item found");
        break;
    } else {
        alert("item not found");
        break;
    }

}

//  it works if conditions apllied seperataley
var password = prompt("Enter Password");
if (password.length < 6) {
    alert("Enter paswword more than 6 characters")
} else if (password.charCodeAt(0) > 47 && password.charCodeAt(0) < 58) {
    alert("Password must not start with a number")
}

for (i = 1; i < password.length; i++) {
    if ((password.charCodeAt(i) < 97 || password.charCodeAt(i) > 122) && password.charCodeAt(i) < 65 || password.charCodeAt(i) > 90 && password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57) {
        alert("Only a-z, A-Z & numbers allowed")
        break
    }

}

var university = "University of Karachi";
for (i = 0; i < university.length; i++) {
    document.write(university.split("")[i] + "<br>")
}

var str = prompt("Enter Input");
alert(str.charAt(str.length - 1));

var str = "The quick brown fox jumps over the lazy dog";
document.write(str.search("the"));

// 26-30
var inte = prompt("Enter a positive integer");
if (inte < 0) {
    alert("Enter only positive integer");
}
document.write("Number: " + inte + "<br>");
document.write("round off value: " + Math.round(inte) + "<br>");
document.write("floor value: " + Math.floor(inte) + "<br>");
document.write("ceil value: " + Math.ceil(inte) + "<br>")

var integ = prompt("Enter a negative integer");
if (integ > 0) {
    alert("Enter only negative integer");
}
document.write("Number: " + integ + "<br>");
document.write("round off value: " + Math.round(integ) + "<br>");
document.write("floor value: " + Math.floor(integ) + "<br>");
document.write("ceil value: " + Math.ceil(integ) + "<br>");

var abs = prompt("Enter value");
document.write("The abosulte value of " + abs + " is " + Math.abs(abs) + "<br>");

document.write("Random dice value: " + Math.floor(Math.random() * 6 + 1) + "<br>")
document.write("Random value from 1 to 100: " + Math.floor(Math.random() * 100 + 1) + "<br>")

var inn = parseFloat(prompt("Enter your weight in kilograms"));
document.write("weight of user is " + inn + " kilograms")

var Num = parseInt(prompt("Enter value b/w 1 to 10"));
if (Num == Math.round(Math.random() * 10 + 1)) {
    alert("Congragulations")
} else {
    alert("try again!")
}

// 31-34
document.write(Date() + "<br>");

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = date.getMonth()
alert("Current Month: " + monthNames[month])

alert(date.toString().slice(0, 3))

if (date.getDay() == 0 || date.getDay() == 6) {
    alert("Its Fun day")
}

if (date.getDate() <= 15) {
    alert("First fifteen days of the month")
} else {
    alert("Last fifteen days of the month")
}

var min = (date.getTime() / 1000) / 60;
alert("Elapsed miliseconds since jan 1, 1970: " + date.getTime() + "\n" + "Elapsed minutes since jan 1, 1970: " + min)

if (date.getHours() < 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}

var laterDate = new Date("Sun May 31 2020 15:34:18 GMT+0500 (Pakistan Standard Time)")
document.write(laterDate)

var ramadan = new Date("Fri Apr 24 2020")
var ramday = (date.getTime() - ramadan.getTime()) / 86400000
alert(Math.floor(ramday) + " days have passed since 1st Ramadan, 2020")

var date2015 = new Date("Thr Jan 01 2015")
document.write(date2015)

var sec_passed_2015 = (date.getTime() - date2015.getTime()) / 1000
alert(Math.floor(sec_passed_2015) + " seconds have passed since Jan 01 2015")

document.write("Current date: Tue Jun 23 2020 16:19:24 GMT+0500 (Pakistan Standard Time)<br>")
var hourAgo = new Date("Tue Jun 23 2020 15:19:24 GMT+0500 (Pakistan Standard Time")
document.write("1 hour ago , " + hourAgo + "<br>")

document.write("Current date: Tue Jun 23 2020 16:19:24 GMT+0500 (Pakistan Standard Time)<br>")
var centAgo = new Date("Tue Jun 23 1920 16:19:24 GMT+0500 (Pakistan Standard Time")
document.write("100 years back , " + centAgo)

var userAge = parseInt(prompt("Enter your age: "))
alert("Your birth year is: " + (date.getFullYear() - userAge))

document.write("<h3>Your K-Electric bill</h3> <br> Customer name: " + prompt("Enter your name: ") + "<br>" + "Current Month: " + monthNames[month])
var numOfUnits = parseInt(prompt("Enter number of units"))
var netAmount = numOfUnits * 16
document.write("<br> Number of units: " + numOfUnits + "<br> Charges per unit: 16" + " <br> Net Amount Payable (within Due Date): " + netAmount + "<br>Late Payment Surcharge: 350")
document.write("<br> Gross Amount Payable (after Due Date): " + (netAmount + 350))

// 35-38
function date() {
    document.write(Date())
}
date()

function userName(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName)
}
userName(prompt("Enter your First name"), prompt("Enter your Last name"))

function sum(a, b) {
    return a + b;
}
sum(parseInt(prompt("Enter first number")), parseInt(prompt("Enter second number")))

function calc(a, b, o) {
    var result;
    switch (o) {
        case "+":
            result = a + b
            break
        case "-":
            result = a - b
            break
        case "*":
            result = a * b
            break
        case "/":
            result = a / b
            break
        case "%":
            result = a % b
            break
    }
    document.write(result)
    return result;
}
calc(parseInt(prompt("Enter first value:")), parseInt(prompt("Enter second value:")), prompt("Enter operator (+, -, *, /, %)"))

function sqr(a) {
    document.write(a * a)
}
sqr(parseInt(prompt("Enter number to be squared")))

function fac(a) {
    for (i = a; i >= 0; i--) {
        document.write(a * fac(a - 1))
    }
}
fac(parseInt(prompt("Enter number to find factorial:")))

function counter(start, end) {
    for (i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}
counter(parseInt(prompt("Enter start number")), parseInt(prompt("Enter end number")))
    //
function hypo(base, perp) {
    function sqr(a) {
        document.write(a * a)
    }
    document.write(sqr(base) + sqr(perp))
}
hypo(parseInt(prompt("Enter base number")), parseInt(prompt("Enter perpandicular number")))

// 38-44
function power() {
    a = 2;
    b = 5;
    c = 1;
    for (i = 1; i <= b; i++) {
        c = c * a
    }
    return c
}
alert(power());
//

leap = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028]

function leapYear() {
    year = parseInt(prompt("Enter year"));
    for (i = 0; i <= leap.length; i++) {
        if (year === leap[i]) {
            alert(year + " is a leap year.")
        }
    }
}
leapYear()
    //
a = 5;
b = 4;
c = 7;

function s() {
    return (a + b + c) / 2

}

function area() {
    return s() * (s() - b) * (s() - b) * (s() - b)
}
alert(area())
    //
x = parseInt(prompt("Enter marks of first sub:"))
y = parseInt(prompt("Enter marks of second sub:"))
z = parseInt(prompt("Enter marks of third sub:"))

function average() {
    return (x + y + z) / 3
}

function percentage() {
    return ((x + y + z) / 300) + "%"
}

function result() {
    document.write(average() + " is average" + "<br>")
    document.write(percentage() + " is percentage")
}
result()
    //
str = prompt("Enter string:")
a = prompt("Enter char to find index from " + str)

function index() {
    for (i = 0; i < str.length; i++) {
        if (a == str[i]) {
            document.write("Index of " + a + " is: " + i)
            break
        }
    }
}
index()
    //
str = prompt("Enter string to remove vowels:")

function remVowel() {
    splited = str.split("")
    for (i = 0; i < splited.length; i++) {
        switch (splited[i]) {
            case "a":
                splited.splice(i, 1)
                break
            case "o":
                splited.splice(i, 1)
                break
            case "e":
                splited.splice(i, 1)
                break
            case "i":
                splited.splice(i, 1)
                break
            case "u":
                splited.splice(i, 1)
                break
        }
    }
    joined = splited.join("")
    return joined
}

withoutVowels = remVowel()
alert("Your string without vowels is: \n " + withoutVowels)
    //
str = "Please read this application and give me gratuity"

function chkVowel() {
    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                switch (str[i + 1]) {
                    case "a":
                        alert("aa found")
                        break
                    case "e":
                        alert("ae found")
                        break
                    case "i":
                        alert("ai found")
                        break
                    case "o":
                        alert("ao found")
                        break
                    case "u":
                        alert("au found")
                        break
                }
                break
            case "o":
                switch (str[i + 1]) {
                    case "a":
                        alert("oa found")
                        break
                    case "e":
                        alert("oe found")
                        break
                    case "i":
                        alert("oi found")
                        break
                    case "o":
                        alert("oo found")
                        break
                    case "u":
                        alert("ou found")
                        break
                }
                break
            case "e":
                switch (str[i + 1]) {
                    case "a":
                        alert("ea found")
                        break
                    case "e":
                        alert("ee found")
                        break
                    case "i":
                        alert("ei found")
                        break
                    case "o":
                        alert("eo found")
                        break
                    case "u":
                        alert("eu found")
                        break
                }
                break
            case "i":
                switch (str[i + 1]) {
                    case "a":
                        alert("ia found")
                        break
                    case "e":
                        alert("ie found")
                        break
                    case "i":
                        alert("ii found")
                        break
                    case "o":
                        alert("io found")
                        break
                    case "u":
                        alert("iu found")
                        break
                }
                break
            case "u":
                switch (str[i + 1]) {
                    case "a":
                        alert("ua found")
                        break
                    case "e":
                        alert("ue found")
                        break
                    case "i":
                        alert("ui found")
                        break
                    case "o":
                        alert("uo found")
                        break
                    case "u":
                        alert("uu found")
                        break
                }
                break
        }
    }
}

chkVowel()
    //
distance = parseInt(prompt("Enter distance of two cities in Kms"))

function kmTom() {
    meters = distance * 1000
    document.write(distance + "km in meters: " + meters + "<br>")
}

function kmtofeet() {
    feet = distance * 3280
    document.write(distance + "km in feets: " + feet + "<br>")
}

function kmtoinches() {
    inches = distance * 39370
    document.write(distance + "km in inches: " + inches + "<br>")
}

function kmtocenti() {
    centimeters = distance * 100000
    document.write(distance + "km in centimeters: " + centimeters + "<br>")
}
kmtocenti()
kmtoinches()
kmtofeet()
kmTom()
    //
hrs = parseInt(prompt("Enter overtime hours"))

function overtime() {
    if (hrs > 40) {
        return (hrs - 40) * 12
    }
}
document.write("Overtime pay is:" + overtime())
    //
amount = parseInt(prompt("Enter amount in hundreds"))

function withdraw() {
    hndrds = Math.floor(amount / 100)
    fifty = Math.floor((amount - hndrds * 100) / 50)
    tens = Math.floor((amount - fifty * 50) / 10)
    document.write("you will have " + hndrds + " hundred notes " + fifty + " fifty notes " + tens + " ten notes")
}
withdraw()
    //43-48
function popup() {
    alert("Facebook opened")
}
//
function iphone() {
    alert("thanks for purchasing")
}
//
function del(row) {
    document.getElementById("table").deleteRow(row)
}
//
function imgchange(img) {
    img.src = 'samsung.jpg'
}

function imgback(img) {
    img.src = 'iphone.jpg'
}
//
function increase() {
    document.getElementById('increase').innerHTML++
}

function decrease() {
    document.getElementById('increase').innerHTML--
}