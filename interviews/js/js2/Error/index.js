// const result = someUndefinedVariable + 10;
//   console.log(result);
//   console.log('An error occurred:', error.message);
// // 

// }
//finally block to execute code regardless of whether
//an error occured or not
// finally{
//   console.log("finally executed");
// }
// //Output
//An error occurred: someUndefinedVariable is not defined
//finally executed
// 

// function validateUserAge(age) {
//       if (typeof age !== "number") {
//         throw new Error("Age must be a number");
//       }
//       if (age < 18) {
//         throw new Error("User must be at least 18 years old");
//       }
//       console.log("User age is valid");
//     }
    


// function validateUserAge(age) {
//       if (typeof age !== "number") {
//         throw new Error("Age must be a number");
//       }
//       if (age < 18) {
//         throw new Error("User must be at least 18 years old");
//       }
//       console.log("User age is valid");
//     }


// 1. Use Try Catch and Handle Errors Appropriately
try {
      // Code that may throw an error
    } catch (error) {
      // Error handling and recovery actions
    }
    // 2. Use Descriptive Error Messages
    throw new Error("Cannot divide by zero");
    // 3. Avoid Swallowing Errors
    try {
      // Code that may throw an error
    } catch (error) {
      // Do not leave the catch blank
    }
    // 4. Log Errors
    try {
      // Code that may throw an error
    } catch (error) {
      console.error("An error occurred:", error);
      // Log the error with a logging library 
    }
    
    

    // Syntax Error
// console.log("Hello, World!" 
// // Missing closing parenthesis );
// // Reference Error
// console.log(myVariable); 
// // myVariable is not defined
// // Type Error
// const number = 42;
// console.log(number.toUpperCase()); 
// // number.toUpperCase is not a function
