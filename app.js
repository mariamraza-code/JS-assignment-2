
//chap-21 to 25

//task-1
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.toUpperCase() +" "+ b.toUpperCase() ;
alert("Welcome"+ " " + fullName);

// //task-2
 var c=prompt("Enter your favorite Mobile phone model");
 document.write("My favorite phone is :" + " "+c);
 var d = c.length;
document.write("<br> Length of string :"+" "+ d);

//task-3
var e= "Pakistan";
e.indexOf("n");
document.write("<br><hr> String:" +" "+ e);
document.write("<br>Index of 'n':" +" "+ e.indexOf("n") );


// //task-4
var f= "Hello World";
f.lastIndexOf("l");
document.write("<br><hr> String:" +" "+ f);
document.write("<br>Last Index of 'l':" +" "+ f.lastIndexOf("l") );

//task-5
var g= "Pakistani";
g.charAt("3");
document.write("<br><hr> String:" +" "+ g);
document.write("<br>Character at Index 3 :" +" "+ e.charAt("3") );

//task-6
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.concat(b);
alert("Welcome"+ " " + fullName);

// //task-7
var h="Hyderabad";
document.write("<br><hr>City:"+ " "+ h);
 h = h.replace("Hyder","Islam");
document.write("<br> After replacement:" + " " + h);

//task-8
var message = "Ali and Sami are best friends. They play cricket and football together";
message=message.replace(/and/g,"&");
document.write("<br><hr>"+ message);

// //task-9
var value1="472";
document.write("<br><hr> Value:" + " "+ value1);
document.write("<br> Type: String" );
var valueInt=parseInt(value1);
document.write("<br> Value:" + " "+ valueInt);
document.write("<br> Type: Number" );

//task-10
var j=prompt("Enter string value:");
document.write("<br><hr>User input:" + " "+ j);
document.write("<br>Upper case: "+ j.toUpperCase())

//task-11
var k=prompt("Enter string value:");
var firstChar=k.slice(0,1)
var otherChar=k.slice(1)
firstChar=firstChar.toUpperCase();
otherChar=otherChar.toLowerCase();
var titleCase= firstChar.concat(otherChar);
document.write("<br><hr>User input:" + " "+ k);
document.write("<br>Upper case: "+ titleCase);


//task12
var num = 35.36 ;
var str=num.toString().replace(".","")
document.write("<br>Number="+num)
document.write("<br>Result="+str)

//task13
var name=prompt("enter your name:")
if(name=="33"||name=="44"||name==46||name=="64")
{
alert("enter a valid username")
}
else{
    alert("welcome"+" "+name)
}

//task14
var a= ["cake", "apple pie", "cookie", "chips", "patties"]
var input=prompt("welcome to bakery,what do you want to order:")
input= input.toLowerCase();

if(input==="cake")
{
    alert("cake is available")
}
else if(input==="apple pie"){
    alert("apple pie is available")
}
else if(input==="cookie"){
    alert("cookie is available")

}
else if(input==="chips"){
    alert("chips is available")
}
else if(input==="patties"){
    alert("patties is available")
}
else{
    alert("we are sorry,"+" "+input+" "+"is not availabe in our ")
}


//task16
var str = "University of Karachi";
var res = str.split("");
document.write("<br><hr>"+ res)

//task17
var str = prompt("Enter string");
var res = str.charAt(str.length-1);
document.write("<br><hr>User input:"+str)
document.write("<br>Last charcter of input:"+res)


//task18
function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="the quick brown fox jumps over the lazy dog."; 
 var count=countOccurences(text,"the");
document.write("<br><hr>Text:"+text)
document.write("<br>there are"+" "+count+" "+"occurence of the word 'the'")


//chap 26-30

//task1
var input=prompt("enter a positive integer:")
document.write("<br><hr>Number:"+input)
var input1=Math.round(input)
document.write("<br>rounded off value:"+input1)
var input2=Math.floor(input)
document.write("<br>floor value:"+input2)
var input3=Math.ceil(input)
document.write("<br>ceil value:"+input3)

//task2
var input=prompt("enter a negative integer:")
document.write("<br><hr>Number:"+input)
var input1=Math.round(input)
document.write("<br>rounded off value:"+input1)
var input2=Math.floor(input)
document.write("<br>floor value:"+input2)
var input3=Math.ceil(input)
document.write("<br>ceil value:"+input3)


//task3
var input=prompt("enter an integer:")
var inputnew=Math.abs(input)
document.write("<br><hr>absolute value:"+inputnew)

//task4
var throwdice=Math.random()*6
var floor=Math.floor(throwdice)
document.write("<br><hr>random dice value:"+floor)

//task5
var coin=Math.random()*2
var floor=Math.floor(coin)
document.write("<br><hr>"+ floor)
if(floor===0){
document.write("<br>random coin value:heads")}
else
{
    document.write("<br>random coin value:tails")
}

//task6
var random=Math.random()*100
var floor=Math.floor(random)
document.write("<br><hr>The random number between 1 to 100:"+floor)

//task7
var num = prompt("Enter your weight in kilograms:")
num=Number(num)
var n = num.toFixed(1);
document.write("<br><hr>The weight of user is:"+n)

task8
var secret=9
var num=prompt("Enter a number between 1 to 10:")
if(num==9){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}


//chap-31-34

//task-1
var rightNow= new Date();
document.write("<br><hr>"+rightNow);





//task-2

// var m= new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[m.getMonth()];
// alert("Current Month:"+" "+ n);
//or
var m= new Date();
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var n=month[m.getMonth()];
alert("Current Month: "+" "+ n)

//task-3
var m= new Date();
var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var n=day[m.getDay()];
alert("Today is "+" "+ n);

//task-4
var m= new Date();
var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var n=day[m.getDay()];
if(n===day[0]){
    alert("Its Fun day");
}
else if(n===day[6]){
    alert("Its Fun day");
}
else{
alert("Today is "+" "+ n);
}

//task-5

var rightNow= new Date();
var n=rightNow.getDate();
if(n<16){
    alert("First fifteen days of the Month");
}
else if(n>16){
    alert("Last days of the Month");
}

//task-6
var rightNow= new Date();
var mSec=rightNow.getTime();
var mins=(mSec/1000*60*60);
document.write("Current Date:"+ " "+ rightNow);
document.write("<br> Elapsed milliseconds since January 1,1970:"+" "+mSec);
document.write("<br> Elapsed minutes since January 1,1970:"+" "+mins);


//task-7
var rightNow= new Date();
var hours= rightNow.getHours()
if(hours=== rightNow.getHours(12)){
    alert("Its PM");
}
else{
    alert("Its AM");
}

//task-8
var Now= new Date("Thu December 31, 2020 00:00:00");
document.write("Later Date:" +" "+now);


// //task9
var today = new Date();
var doomsday = new Date("April 24, 2020");
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msToday - msDoomsday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff +" days have passed since 24 April,2020" )


//task10
var mydate=new Date();
var mydatemilli=mydate.getTime();
var first=new Date("january 01,2020 00:00:00")
var firstmili=first.getTime();
var diff=mydatemilli-firstmilli
var diff1=(diff/1000)
document.write("Date: "+mydate)
document.write(diff1+" seconds have passed since beginning of 2015")


//task11
var newdate=new Date("Sat Dec 05,2015 23:08:16");
var changedate=new Date("Sat Dec 05,2015 22:08:16");
document.write("Current date: "+newdate)
document.write("<br>1hour ago, "+changedate)




// //task12
var newdate=new Date();
document.write("Current date: "+newdate)
newdate.setFullYear(1920)
document.write("<br>100 years ago, "+newdate)


//task13
var age=prompt("Enter your age:")
var by=2020-age
document.write("Your age: "+age)
document.write("<br>Your birth year is: "+by)


//task14
var cname=prompt("Enter your name:")
var month=prompt("Enter Month:")
var units=prompt("number of units consumed in that month:")
var chr=16;
var net=(units*chr)
var late=350;
var gross=(net+late)
document.write("<br>K-Electric Bill <br>")
document.write("<br>Customer name: "+cname)
document.write("<br>Month: "+month)
document.write("<br>No of units: "+units)
document.write("<br>Charges per unit: "+chr +"<br>")
document.write("<br>Net amount payable (within due date): "+net)
document.write("<br>Late payment surcharge: "+late)
document.write("<br>Gross amount payable (after due date): "+gross)










//chap-35 to 40

//task-1
function currentDate(){
 var now=new Date();
 document.write(now);
}
currentDate();


//task-2
function greet(){
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.toUpperCase() +" "+ b.toUpperCase() ;
alert("Welcome"+ " " + fullName);
}
greet();

//task-3

 function add(a,b){
        var a=+prompt("enter first number")
        var b=+prompt("enter second number")
    
        var sum=a+b
        return sum;
     
    }
    alert("the sum is"+" "+ add());



//task-4 calculator

function cal(no1,opr,no2){
    var no1=+prompt("enter first number")
    var opr=prompt("enter an operator")
    var no2=+prompt("enter second number")

    if(opr==="+"){
        return no1+no2
    }
    else if(opr==="-"){
        return no1-no2
    }
    else if(opr==="*"){
        return no1*no2
    }
    else if(opr==="/"){
        return no1/no2
    }
    else{
        return "Invalid Operation!"
    }
    
}
alert(cal());






//task-5

function square(){
    var a=+prompt("enter any value")
    
    return a*a;
 
}
alert(square());

//task-6
function factorial(n){
       let answer = 1;
       if (n == 0 || n == 1){
         return answer;
       }else{
         for(var i = n; i >= 1; i--){
           answer = answer * i;
         }
         return answer;
       }  
     }
     let n = prompt("Enter any integer to calculate its factorial:");
     answer = factorial(n)
   document.write("<br><hr>The factorial of " + n + " is " + answer);


//task-7

function counting(a,b){

   var a=+prompt("Enter the start number");
   var b=+prompt("Enter the end number");
    for(i=a; i<=b ;i++){
         document.write("<br><hr>"+i );        
    }
}
counting();


//task-8


function hypotenuse(a,b) {

   
return Math.sqrt((a*a) + (b*b));
}


function secondFunction() {
    var result="";
     result = hypotenuse(1,2);
     document.write ( "<br><hr>The hypotenuse of a right angle triangle:"+result );
 }
 secondFunction();


//or

// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction() {
//     var result;
//     result = hypotenuse(1,2);
//     document.write ( result );
//  }
// secondFunction();
 







//task9-a
//arg as a variable
var l = prompt("Enter a number for the length of your rectangle.");
var w = prompt ("Enter a number for the width of your rectangle.");

function area (l, w) {
return l * w;
}

document.write("<br><hr> The area of your rectangle is " + area(l,w));


//task9-b
function area (l, w) {
    return l * w;
    }
    
    document.write("<br> The area of your rectangle is " + area(3,4));


//task10
function palindrome(str){
str = str.toLowerCase()
var leng = str.length;
for (var i = 0; i < leng/2; i++) {
    if (str[i] !== str[leng - 1 - i])
    return false;
}

return true;
}
alert(palindrome(prompt("Enter a word to check palindrome:")))





//task11
function string(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
 
   return splitStr.join(' '); 
}
document.write("<br><hr>the quick brown fox");
document.write(string("<br>the quick brown fox"));



//task12
function longWord(string) {
    var str = string.split(" ");
    var long = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (long < str[i].length) {
            long = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write("<br><hr>Web Development Tutorial <br>");
document.write(longWord("<br> Web Development Tutorial"));



//task13
function count(str, letter) 
{
 
 var letCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letCount += 1;
      }
  }
  return letCount;
}

console.log(count('JSResourceS.com', 'o'));



//task-14 The Geometrizer

function calcCircumference(r){
   var radius=(2*3.142*r);
   return radius;
}
document.write("The Circumference is:"+" "+ calcCircumference(2)+"<br>");

function calcArea(r){
   var area=(3.142*r*r);
   return area;
}
document.write("<br><hr>The Area is:"+" "+ calcArea(4));



