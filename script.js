// ====================Question1: Write a program that displays current date and time in your browser. 
// let currentDateTime = new Date();
// let formattedDateTime = currentDateTime.toLocaleString();
// let result = document.createElement("div");
// result.innerHTML = `<p>Current Date and Time: ${formattedDateTime}</p>`;
// document.body.appendChild(result);

// ====================Question2: Write a program that alerts the current month in words. For example December
// let currentDate = new Date();
// let monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// let currentMonthIndex = currentDate.getMonth();
// let currentMonth = monthNames[currentMonthIndex];
// alert(`Current month: ${currentMonth}`);

// ====================Question3: Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
// let currentDate = new Date();
// let dayNames = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];
// let currentDayIndex = currentDate.getDay();
// let currentDay = dayNames[currentDayIndex];
// let shortDay = currentDay.substring(0, 3);
// alert(`Current day: ${shortDay}`);

// ====================Question4: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today
// let currentDate = new Date();
// let currentDayIndex = currentDate.getDay();
// if (currentDayIndex === 0 || currentDayIndex === 6) {
//     let message = document.createElement("div");
//     message.innerHTML = "<p>It's Fun day!</p>";
//     document.body.appendChild(message);
// }

// ====================Question5:  Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
// let currentDate = new Date();
// let currentDay = currentDate.getDate();
// let message = document.createElement("div");
// if (currentDay < 16) {
//     message.innerHTML = "<p>First fifteen days of the month</p>";
// } else {
//     message.innerHTML = "<p>Last days of the month</p>";
// }
// document.body.appendChild(message);

// ====================Question6: Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 
// let currentDate = new Date();
// let millisecondsSinceEpoch = currentDate.getTime();
// minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 60000);
// let result = document.createElement("div");
// result.innerHTML = `<p>Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}</p>`;
// document.body.appendChild(result);

// ====================Question7: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
// let currentDate = new Date();
// let currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// ====================Question8: Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
// let laterDate = new Date(2020, 11, 31);
// let result = document.createElement("div");
// result.innerHTML = `<p>Last day of the last month of 2020: ${laterDate.toDateString()}</p>`;
// document.body.appendChild(result);

// ====================Question9: Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
// let ramadanStartDate = new Date(2015, 5, 18);
// let currentDate = new Date();
// let timeDifference = currentDate - ramadanStartDate;
// let daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(`Days past since 1st Ramadan (June 18, 2015): ${daysPast}`);

// ====================Question10:Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015
// let referenceDate = new Date(2020, 0, 1);
// let beginningOf2015 = new Date(2015, 0, 1);
// let timeDifference = referenceDate - beginningOf2015;
// let secondsElapsed = Math.floor(timeDifference / 1000);
// let result = document.createElement("div");
// result.innerHTML = `<p>Seconds elapsed between the reference date and the beginning of 2015: ${secondsElapsed}</p>`;
// document.body.appendChild(result);

// ====================Question11: Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser
// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// let result = document.createElement("div");
// result.innerHTML = `<p>Current date and time an hour ahead: ${currentDate.toString()}</p>`;
// document.body.appendChild(result);

// ====================Question12: Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
// let currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(`Date 100 years back: ${currentDate.toDateString()}`);

// ====================Question13:Write a program to ask the user about his age. Calculate and show his birth year in your browser
// let currentYear = new Date().getFullYear();
// let age = prompt("Please enter your age:");
// let birthYear = currentYear - age;
// let result = document.createElement("div");
// result.innerHTML = `<p>Your birth year is: ${birthYear}</p>`;
// document.body.appendChild(result);

// ====================Question14: Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// function generateBill() {
//     let customerName = "John Doe";
//     let currentMonth = new Date().toLocaleString('default', { month: 'long' });
//     let numberOfUnits = 250;
//     let chargesPerUnit = 10;
//     let latePaymentSurcharge = 50;

//     let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
//     let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

//     let bill = `
//         <h2>K-Electric Bill</h2>
//         <p><strong>Customer Name:</strong> ${customerName}</p>
//         <p><strong>Current Month:</strong> ${currentMonth}</p>
//         <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
//         <p><strong>Charges per Unit:</strong> ${chargesPerUnit.toFixed(2)}</p>
//         <p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>
//         <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)}</p>
//         <p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>
//     `;

//     let result = document.createElement("div");
//     result.innerHTML = bill;

//     document.body.appendChild(result);
// }

// generateBill();
