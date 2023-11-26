// Chapter # : 06, Question # : 01
// var studentNames = [];
// document.write(studentNames);

// // Chapter # : 06, Question # : 02 

// Chapter # : 06, Question # : 03
// var studentNames = [];
// studentNames.push("Naveed", "Salman", "Qasim");
// document.write(studentNames);

// Chapter # : 06, Question # : 04
// var studentNames = [];
// studentNames.push(91, 97, 113);
// document.write(studentNames);

// Chapter # : 06, Question # : 05
// var studentNames = [];
// studentNames.push(true, false);
// document.write(studentNames);

// Chapter # : 06, Question # : 06
// var studentNames = [];
// studentNames.push("Naveed", "Salman", "Qasim", 81, 97, 113, true);
// document.write(studentNames);

// Chapter # : 06, Question # : 07
// var quaification  = [];
// quaification.push("SSC","HSC","BSC","BS","B.COM","MS","M.PHIL","PHD")
// document.write(quaification);

// Chapter # : 06, Question # : 08
// var studentNames = ["Naveed", "Salman", "Qasim"]
// var score = [320, 230, 480]
// var totalmarks = 500;
// var percentage1 = score[0] / totalmarks * 100;
// var percentage2 = score[1] / totalmarks * 100;
// var percentage3 = score[2] / totalmarks * 100;

// document.write("Score of " + studentNames[0] + " is " + score[0] + " Percentage: " + percentage1 + "%")
// document.write("<br>" + "Score of " + studentNames[1] + " is " + score[1] + " Percentage: " + percentage2 + "%")
// document.write("<br>" + "Score of " + studentNames[2] + " is " + score[2] + " Percentage: " + percentage3 + "%")

// // Chapter # : 06, Question # : 09
// var colorname = ["Red", "Blue", "Green", "Yellow"]
// document.write(colorname)

// // Chapter # : 06, Question # : 09(a)
// colorname.unshift(prompt("what color add  to the beginning")) 
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(b)
// colorname.push(prompt("what color add  to the end")) 
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(c)
// colorname.unshift(prompt("what color add  to the beginning"))
// colorname.unshift(prompt("what color add  to the beginning")) 
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(d)
// colorname.shift()
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(e)
// colorname.pop()
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(f)
// var indexs = +prompt("Enter the index number you want to add new color name: ")
// var colornames = prompt("Enter new color name")
// colorname.splice(indexs, 0, colornames)
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 09(g)
// var indexs = +prompt("Enter the index number you want to delete color name: ")
// colorname.splice(indexs, 1)
// document.write("<br>" + colorname)

// // Chapter # : 06, Question # : 10
// var studentscore = [320,230,480,120]
// document.write("Scores of Students: " + studentscore)
// studentscore.sort()
// document.write("<br>" + "Order Scores of Students: " + studentscore)

// // Chapter # : 06, Question # : 11
// var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selectcities = cityName.slice(2, 4)
// document.write("Cities List: " + cityName)
// document.write("<br>" + "Select Cities List: " + selectcities)

// // Chapter # : 06, Question # : 12
// var arr = ["This", " is", " my", " cat"];

// // Create a single string using the join method
// var resultString = arr.join("");

// // Display the result
// document.write("Array: " + arr)
// document.write("<br>" + "String: " + resultString);

// // // Chapter # : 06, Question # : 13
// // Create an empty array to simulate a queue
// var fifoQueue = [];

// // Adding values to the queue (FIFO)
// fifoQueue.push("Keyboard", "Mouse", "Printer", "Monitor");

// // Display the values
// document.write("Devices " + fifoQueue)

// // Accessing values in the order in which they were stored (FIFO)
// var firstValue = fifoQueue.shift();
// var secondValue = fifoQueue.shift();
// var thirdValue = fifoQueue.shift();
// var fourthValue = fifoQueue.shift();

// // Display the values
// document.write("<br>" + firstValue);  // Output: "Value 1"
// document.write("<br>" + secondValue); // Output: "Value 2"
// document.write("<br>" + thirdValue);  // Output: "Value 3"
// document.write("<br>" + fourthValue);  // Output: "Value 1"

// // Chapter # : 06, Question # : 14
// // Create an empty array to simulate a queue
// var fifoQueue = [];

// // Adding values to the queue (LIFO)
// fifoQueue.push("Keyboard", "Mouse", "Printer", "Monitor");

// // Display the values
// document.write("Devices " + fifoQueue)

// // Accessing values in the order in which they were stored (LIFO)
// var firstValue = fifoQueue.pop();
// var secondValue = fifoQueue.pop();
// var thirdValue = fifoQueue.pop();
// var fourthValue = fifoQueue.pop();

// // Display the values
// document.write("<br>" + firstValue);  // Output: "Value 1"
// document.write("<br>" + secondValue); // Output: "Value 2"
// document.write("<br>" + thirdValue);  // Output: "Value 3"
// document.write("<br>" + fourthValue);  // Output: "Value 1"

