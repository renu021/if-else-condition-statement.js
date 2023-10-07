// 2 types of "Conditional statement" --> 1.)  if-else   2.) switch-case


/*
//Example : syntax statement
let condition = true;

if (condition) {
    console.log("condition is true");
    console.log("condition is against rule")
}
else 
    console.log("condition is false"); //while using single line code we can neglate {} if we use more than one line we must put the codes in {}

*/



/*
// Weather Condition 1 : if the Temperature is more than 30 degree^c print "The weather is hot", if not print "weather is normal enjoy your day!!"

 let temperature = 31;

 if(temperature > 30)
    console.log("The weather is hot");
else
    console.log("weather is normal enjoy your day!!");
*/



/*
// weather Condition 2 : if the weather is cloudy or rainny print "Dont't forget to take umbrella" , if not print "weather is normal enjoy your day"

let isCloudy = false;
let isRainny = false;

if (isCloudy || isRainny)
   console.log("Dont't forget to take umbrella")

else
    console.log("weather is normal enjoy your day!!")
*/


/*
// Evaluating the students "Grade" based on "Scores"

let Score = 60;

if (Score < 40)  // score less than 40
    console.log("Fail");
else if (Score >= 40 && Score <= 50)  // if score more than 40 and less than 50, --> 40 - 50
    console.log("Just pass");
else if (Score > 50 && Score <= 85)  //score more than 50 and less then equal to 85, --> 50 - 85
    console.log("Moderate");
else 
    console.log("Excellent"); // here i didn't give if-condition because this is what left so i put it in defalut else position
*/




// laptop Timing 24 hours - greet the user
//if hour is between 12AM(0) to 12PM(12) --> Good Morning
//if hour is between 12pm(12)to 5PM(17)  --> Good Afternoon
//if hour is between 5PM(17) to 8PM(20)  --> Good Evening
//if hour is between 8PM(20) to 12AM(0)  --> Good Night  (Else-condition)


//declaration method 1: mannual method --> worst method do not use
    //let hour = 1;
//declaration method 2: getting hour dynamically from system by using --> "new date()""
    //   let hour = new Date()   
    //   console.log(hour); //output: Sat Oct 07 2023 12:25:58 GMT+0530 (India Standard Time)
    //   console.log(typeof(hour)); //output: object
    //   console.log(hour.getDate())  //because this is an object i can access keys and values inside the object
//declaration method 3: 2lines    
    // let hrs =new Date()
    // let hour=hrs.getHours() // if i want only hours form the system "variablename2=variblename1.specification()"
////declaration method 4: same method in sigle line
    let hour = new Date().getHours()


      if(hour >= 0 && hour < 12)  
        console.log("Good Morning");
      else if (hour >= 12 && hour < 17)
        console.log("Good Afternoon");
      else if (hour >= 17 && hour < 20)
        console.log("Good Evening");
      else
         console.log("Good Night");
    