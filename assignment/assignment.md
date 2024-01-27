# SWE101: Programming Fundamentals

## Assessment 05 Javascript Intermediate

### Case Background

Building upon the success of the "Financial Calculator", Quantum Financial Solutions is pivoting towards a broader horizon. Given the increasing diversity in their clientele, the firm has identified a pressing need to maintain a streamlined customer database. This database would not only store vital information regarding each client but would also facilitate advanced data manipulation techniques to provide a holistic picture at any given time.

Imagine this: a new business client walks into Quantum's office. The client is considering a significant investment. The analyst at the desk swiftly accesses Quantum’s customer database, retrieves the client’s financial history, sorts through past investments, and filters out the ones with impressive returns. All this, in mere seconds, driving a tailored investment pitch, leading to a successful deal closure.

This level of precision and agility is what Quantum aims to achieve with this new project, and you, once again, are at the helm of it. After your commendable work on the 'Financial Calculator', the management sees you as the perfect fit for developing the backbone of this new customer database system. It's time to integrate your scripting knowledge with advanced data manipulation techniques, setting the stage for Quantum's next leap in customer relationship management!

### Objective

In the aftermath of your successful script for the 'Financial Calculator', a new challenge awaits. Quantum Financial Solutions now aspires to evolve its customer management system, integrating advanced data manipulation techniques with the intent of driving more insightful, data-driven decisions at unprecedented speeds. Your mission is twofold: First, to script a digital repository that can capture the intricacies of Quantum’s diverse clientele. And second, to empower this repository with capabilities to sort, filter, and analyze this data, offering instantaneous insights for any client interaction. Dive deep into the realms of JavaScript, architecting a system that stands as a testament to Quantum's commitment to precision, speed, and excellence. The future of client interactions at Quantum rests in your hands, and it's time to script another success story!

### Section 1: Setting Up JavaScript File (5 points)

#### Task 1.1

Create a new JavaScript file customerDatabase.js.

### Section 2: Objects (5 points)

#### Task 2.1

Create an object customer with properties name, accountNumber, accountType and balance. Assign appropriate values to each property.

#### Task 2.2

Test out the object by creating a loop to log each property on to the console. It should log, console.log(“key: {name}, value: {value}).

### Section 3: Function Reader (10 points)

#### Task 3.1

Create a function that takes in the customer data as the first parameter, and a key (i.e. name, accountNumber, accountType and balance) in type string. The function should return the value of the 2nd parameter. Also, set the 2nd parameter default value to “balance”. Call the function and console.log the result.

### Section 4: Array of Objects (5 points)

#### Task 4.1:

Create an array of customer objects for various customers.

### Section 5: Iterating Arrays and Object Methods (10 points)

#### Task 5.1:

Use a for loop to iterate through the customers array and log both the customer name and balance for each customer.

### Section 6: Finding and Filtering Arrays (10 points)

#### Task 6.1:

Use the find method to find a customer by account number. Use the filter method to find all customers with a balance over a certain amount.

### Section 7: Sorting Arrays (10 points)

#### Task 7.1:

Use the sort method to sort customers by their balance in descending order.

### Section 8: Mapping Arrays (10 points)

#### Task 8.1:

Use the map method to create a new array of strings where each string is a customer name and their balance.

### Section 9: DOM (Bonus Credit - 35 points)

#### Task 9.1:

Create a calculator app using HTML, CSS, and JS.

1. Spin up a new HTML file
2. Link the CSS and JS script.
3. The calculator should have two display, one to render the selected numbers and arithmetic. The other to display the result.
4. Below the display, is should include buttons from 1 – 9, and arithmetic operators.

---

### GitHub Guide

1. `$ git add .` this add all updated files to staging
2. `$ git commit -m "a random message"` this shift the staged updates to local repository.
3. `$ git push` this push the updated local repository to github repository.
