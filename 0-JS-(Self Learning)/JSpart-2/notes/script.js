// let myHeading = document.querySelector("h1");
// // will select the first h1 in body tag, and store it to myHeading variale.
// console.dir(myHeading);

// let myHeading = document.querySelectorAll('h1');
// // will select the all h1 in body tag, and store it to myHeading variale in an array like structure.
// console.dir(myHeading);
// // NodeList(3)
// // 0: h1.abcd
// // 1: h1.abcd
// // 2: h1.abcd

// DOM manipulation

// let h1 = document.querySelector('h1');
// console.dir(h1);
// go and see the h1 node open it and see which property have the h1 content written ?
//  innerHTML, innerText, outerText, textContent have the value =>
// 'Hello bhai kese ho';
// so manipulating this can change h1 content right ?
// the h1 node is actually an object, use . to access its property
// h1.textContent = 'Hello Anil kese ho'; // change the h1 text content
// h1.innerHTML= "harsh kese ho guru";
// h1.innerText = "hello harsh bhai";

// innerText => text badlta hai
// textContent => same like innerText
// innerHTML => selected tag me html code dalta hai.
// h1.innerHTML= "Hello <i>Harsh</i> Bhaiya <s>badhiya</s> ho?";
// console.dir(h1); // h1 content would be changed now

// h1.hidden = true; // hides the element

// getAttribute, setAttribute, removeAttribute
// let a = document.querySelector('a');
// console.log(a);
// a.href = "https://www.google.com/";
// a.setAttribute('href', 'https://www.google.com/');
// pahla argument jis attribute ko change krna hai, second argument uski value
// Element.setAttribute(name, value);

// let img = document.querySelector('img');
// img.setAttribute(
//   'src',
//   'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'
// );

// let a = document.querySelector('a');
// console.log(a.getAttribute('href')); // href attribute ki value dega

// let a = document.querySelector("a");
// a.removeAttribute("href");

// Dynamic DOM manipulation
//create element

// let h1 = document.createElement('h1');
// h1.textContent = 'Hello bhaiya me aa gya';
// document.body.append(h1);  // ye element ko <script></script> tag ke bad me add krega
// document.body.prepend(h1);  // <script></script> ke pahle aata hai, actually <body> ke just bad.
//prepend => body ke just bad first element ye hoga
// append => body me last element ye hoga
// document.body.appendChild(h1);

// create element -> append ya prepend kro, jaha bhi element chahiye vaha.
// let h2 = document.createElement("h2");
// console.log(h2);
// h2.textContent = "Hello chaiiiii 🍵 Pee lo";
// // document.body.append(h2);
// //OR
// document.querySelector("body").prepend(h2);

// let h1 = document.querySelector('h1');
// h1.remove(); // remove the element

/* ------------------------------------ 7 ----------------------------------- */
// let h1 = document.createElement("h1");
// h1.textContent = "Hey me bahar se aaya hu";
// document.querySelector("div").append(h1);

/* ------------------------------------ 8 style ----------------------------------- */
//style update using .style and classList (add , remove, toggle)

// let h1 = document.querySelector("h1");
// h1.style.color = "red"; // turn text color to red
// h1.style.backgroundColor = "purple";
// h1.style.fontFamily = "sans-serif";
// h1.style.textTransform = "capitalize";

// h1.classList
// h1.classList.remove("hulu"); // remove a class
// h1.classList.add("hehe"); // add a class
// console.dir(h1);
// h1.classList.toggle("hey"); // add a class if not, remove a class if yes

// what is DOM -> tree like structure which has nodes of each html element.
//
//

// how to get src of an image ?
// let img = document.querySelector('img');
// console.log(img.src);
// //m2
// console.log(img.getAttribute('src'));

// img.setAttribute("src", "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=pexels-mayday-1545743.jpg&fm=jpg");

// add a title attribute to a div dinamically

// let div = document.querySelector("div");
// div.setAttribute("title", "Hello dosto kese ho app");

// let btn  = document.querySelector("button");
// btn.removeAttribute("disabled");

// createElement()
// creates an new node element
// let h1 = document.createElement("h1");
// console.log("h1");

// appendChild() vs prepend()

// removeChild()

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New list item"
// ul.appendChild(li);

// let img = document.createElement('img');
// img.setAttribute(
//   'src',
//   'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=pexels-mayday-1545743.jpg&fm=jpg'
// );

// img.classList.add("placeholder");
// document.querySelector("div").prepend(img);

// let li = document.querySelector("li");
// li.remove();
// document.querySelector("ul").removeChild(li);

// let lis = document.querySelectorAll("li");
// for(let i = 0; i< lis.length; i++){
//   if(i %2 !==0){
//     lis[i].classList.add("highlight");
//   }
// }
// let li = document.querySelectorAll('ul li:nth-child(2n)');
// li.forEach(function (elem) {
//   elem.classList.add('highlight');
// });


// let li7 = document.createElement("li");
// li7.textContent = "I am Item 7";
// document.querySelector('ul').appendChild(li7);


