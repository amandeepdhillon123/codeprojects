// // Creating a new element and appending it to an existing element
// var newElement = document.createElement('div');
// newElement.textContent = 'New element';
// elementById.appendChild(newElement);
// // Removing an element
// elementBySelector.remove();
// // Removing a child element from a parent element
// var parentElement = document.querySelector('.parentElement');
// var childElement = document.querySelector('.childElement');
// parentElement.removeChild(childElement);
// 


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM Methods</title>   
//   </head>
//   <body>    
//     <div id="myDiv" class="myClass">1</div>
//     <div class="myClass">2</div>
//     <p class="myClass">3</p>
//     <script src="index.js"></script>
//   </body>
// </html>
// //getElementById - select a single element 
// const elementById = document.getElementById("myDiv");
// console.log(elementById.innerHTML);
// // Output: 1
// //getElementsByClassName - select multiple elements that 
//                         //share the same class name
// const elements = document.getElementsByClassName("myClass");
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// // Output: 1 2 3
// //getElementsByTagName - select multiple elements based 
//                       //on their tag name
// const elementsTag = document.getElementsByTagName("div");
// for (let i = 0; i < elementsTag.length; i++) {
//   console.log(elementsTag[i].textContent);
// }
// // Output: 1 2
// 

//     <div class="myClass">Element 1</div>
//     <div class="myClass">Element 2</div>
//     <div class="myClass">Element 3</div>
//     <script src="index.js"></script>
//   </body>
// </html>
// 
//  
//  // Using querySelector() - returns the first element
//  var element = document.querySelector('.myClass');
//  console.log(element.textContent); 
//  // Output: Element 1
//  // Using querySelectorAll() - returns all the elements
//  var elements = document.querySelectorAll('.myClass');
//  elements.forEach(function(element) {
//    console.log(element.textContent);
//  });
//  // Output: Element 1, Element 2, Element 3
