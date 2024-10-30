 // var date = new Date()
// console.log(date);


// var month = date.getMonth()
// console.log(month);


// var monthNames = ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'jun' , 'jul' , 'aug' , 'sep' , 'oct' , 'nov' , 'dec'];
// var currentMonth = new Date()
// var myMonth = currentMonth.getMonth()
// var month = monthNames[myMonth]
// console.log(month);


// var monthNames = ['january' , 'february' , 'march' , 'aprril' , 'may' , 'june' , 'july' , 'august' , 'september' , 'octobr' , 'november' , 'december'];
// var currentMonth = new Date ()
// var myMonth = currentMonth.getMonth()
// var month = monthNames[myMonth]
// console.log(month.slice(0,3));


// var dayNames = ['monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'] 
// var currentDay = new Date()
// var myDay = currentDay.getDay()
// var day = dayNames[myDay]
// if(day === dayNames.indexOf(4)){

//     alert('its funday')
// }
// else{
//     alert(day)
// }

// var dates = new Date()
// var getDates = dates.getDate()
// if(getDates <= 15){
//     alert('First Ifteen Days of the month')
// }
// else{
//     alert('Last Days of the month')
// }


// var dateObj = new Date()
// console.log('Current Date: ' + dateObj);

// var myTime = dateObj.getTime()
// console.log('Elapsed miliseconds since 1970 january: '+myTime);
// console.log('Elapsed minutes since 1970 january: '+myTime * 60);


// var time = new Date()
// var myTime = time.getHours()
// if(myTime <= 12){
//     alert('its AM')
// }
// else{
//     alert('its PM')
// }


// var obj = new Date('dec 31 2020')
// console.log(obj);



// var obj = new Date()
// obj.setHours(obj.getHours() - 1);
// console.log('1 hour ago it was '+obj);

// var obj = new Date('december 05 1950')
// alert(obj)



// var age = parseInt(prompt('Enter your age to find out your birth year'));

// // Validate input
// if (isNaN(age) || age < 0) {
//   console.log('Invalid age. Please enter a positive number.');
// } else {
//   console.log('Your age is ' + age);

//   // Calculate birth year
//   var currentDate = new Date();
//   var birthYear = currentDate.getFullYear() - age;
//   console.log('Your birth year is ' + birthYear);
// }

var customerName = "ABC Customer";
var month = "Februry";
var numOfUnit = 410;
var chargesPerUnit = 16;

var netAmountPayable = numOfUnit * chargesPerUnit;

console.log("Customer Name: " + customerName);
console.log("Month: " + month);
console.log("Number of Units: " + numOfUnit);
console.log("Charges Per Unit: $" + chargesPerUnit);
console.log("Net Amount Payable: $" + netAmountPayable);

var latePaymentCharges = 350;
console.log("Late payment charges is:"+latePaymentCharges);
var  GrossAmountPayable=netAmountPayable + latePaymentCharges;
console.log("Gross Amount payable  is:"+ GrossAmountPayable);





