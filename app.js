// Section 2 (FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS)
// Q1
// function power(a, b) {
//     let result = 1;
//     let i = 0;
    
//     while (i < b) {
//         result *= a;
//         i++;
//     }
    
//     return result;
// }

// console.log(power(2, 3));

// Q2
// function isLeapYear(year) {
//     switch (true) {
//         case (year % 400 === 0):
//             return `${year} is a leap year`;
//         case (year % 100 === 0):
//             return `${year} is not a leap year`;
//         case (year % 4 === 0):
//             return `${year} is a leap year`;
//         default:
//             return `${year} is not a leap year`;
//     }
// }

// var year = 2024;
// console.log(isLeapYear(year));
// Q3
// function calculateTriangleArea(a, b, c) {
//     let S = (a + b + c) / 2;

//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }

// let a = 5, b = 6, c = 7; 
// let area = calculateTriangleArea(a, b, c);
// console.log("The area of the triangle is: " + area);
// Q4
// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     var obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / (totalMarks * 3)) * 100;
// }

// function mainFunction(marks1, marks2, marks3, totalMarks) {
//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);

//     console.log("Average Marks: " + average);
//     console.log("Percentage: " + percentage + "%");
// }

// var marks1 = 85; 
// var marks2 = 90;  
// var marks3 = 88; 
// var totalMarks = 100;

// mainFunction(marks1, marks2, marks3, totalMarks);
// Q5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   console.log(customIndexOf("hello", "e"));
//   console.log(customIndexOf("hello", "l")); 
//   console.log(customIndexOf("hello", "z"));
// Q6
// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//          new Error("Sentence must not exceed 25 characters.");
//     }

//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// var inputSentence = "This is an example sentence.";
// var result = removeVowels(inputSentence);
// console.log(result); 

// Q7
// function countVowelPairs(text) {
//     var vowels = "aeiouAEIOU";
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var char1 = text[i];
//         var char2 = text[i + 1];

//         switch (true) {
//             case (vowels.includes(char1) && vowels.includes(char2)):
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }

//     return count; 
// }

// const sentence = "Pleases read this application and give me gratuity";
// const result = countVowelPairs(sentence);
// console.log(`Number of vowel pairs: ${result}`);
// Q8
// function kmToMeters(km) {
//     var meters = km * 1000;
//     console.log(`${km} km is equal to ${meters} meters`);
//   }
  
//   function kmToFeet(km) {
//     var feet = km * 3280.84;
//     console.log(`${km} km is equal to ${feet.toFixed(2)} feet`);
//   }
  
//   function kmToInches(km) {
//     var inches = km * 39370.08;
//     console.log(`${km} km is equal to ${inches.toFixed(2)} inches`);
//   }
  
//   function kmToCentimeters(km) {
//     var centimeters = km * 100000;
//     console.log(`${km} km is equal to ${centimeters} centimeters`);
//   }
  
//   var distanceInKm = parseFloat(prompt("Enter the distance between two cities in km: "));
  
//   kmToMeters(distanceInKm);
//   kmToFeet(distanceInKm);
//   kmToInches(distanceInKm);
//   kmToCentimeters(distanceInKm);
// Q9
// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// var hoursWorked = prompt("Enter the number of hours worked:");
// var overtimePay = calculateOvertimePay(parseInt(hoursWorked));

// console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);

// Q10
// function calculateNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     amount %= 100; 
//     var notes50 = Math.floor(amount / 50); 
//     amount %= 50; 

//     var notes10 = Math.floor(amount / 10); 

//     return {
//         notes100,
//         notes50,
//         notes10
//     };
// }

// var amountToWithdraw = prompt("Enter the amount to withdraw (in hundreds):");
// var amountInHundreds = parseInt(amountToWithdraw) * 100; 

// if (amountInHundreds > 0) {
//     var notes = calculateNotes(amountInHundreds);
//     console.log(`Total Notes to be Given:`);
//     console.log(`100 Rs Notes: ${notes.notes100}`);
//     console.log(`50 Rs Notes: ${notes.notes50}`);
//     console.log(`10 Rs Notes: ${notes.notes10}`);
// } else {
//     console.log("Please enter a valid amount.");
// }

// Section 3
// chapter (Event)
// Q1
//  function showAlert() {
//            alert("You clicked the link!");
//        }
// Q2
// function showAlert(message) {
//     alert(message);
// }
// Q3
// function deleteRow(button) {
//     var row = button.parentElement.parentElement;
//     var studentName = row.cells[1].innerText; 
//     var confirmation = confirm(`Are you sure you want to delete ${studentName}'s record?`);

//     if (confirmation) {
//         row.remove();
//         alert(`${studentName}'s record has been deleted.`); 
//     }
// }
// Q4
// function changeImage() {
//     document.getElementById("myImage").src = "https://cdn.mos.cms.futurecdn.net/5wDTVRZKp9R9XBGanPzCND-1200-80.jpg";
// }

// function resetImage() {
//     document.getElementById("myImage").src = "https://swisscomvbc.scene7.com/is/image/Swisscom/scs-11068187-de-000?wid=400&hei=400&fmt=webp-alpha&qlt=90";
// }
// Q5
