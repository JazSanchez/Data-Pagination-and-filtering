
// /*
// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering
// */

//  Create a function named showPage that accept two parameters list and page.
function showPage(list, page) {
   //  Create two variable that will account for the first(startIndex) and last(endIndex) index of the student displayed on the page.
   const startIndex = page * 9 - 9;
   const endIndex = page * 9;
   //  Use the querySelector method to select the element with the class name "student-list" and assign it to a varaible named studentList.
   const studentList = document.querySelector(".student-list");
   //  Set the .innerHTML property of the variable studentList to an empty string.
   studentList.innerHTML = "";
   //  (Variable defined from the if statement.)
   let studentItem = "";
   //  Create a for loop that will run one time for each object in the list.
   for (let i = 0; i < list.length; i++) {
     //  Create an if statement that will check if i is greater or equal to starIndex AND if i is less than endIndex.
     if (i >= startIndex && i < endIndex) {
       //  Create a variable that will display the student at the given index. Create a template literal.
       //     Use bracket notation to access the student at the given index and dot notation to access its properties.
       //    (Define the studentItem variable outside the for loop)
       studentItem += `  <li class="student-item cf">
       <div class="student-details">
         <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
       </div>
       <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
       </div>
     </li>`;
     }
   }
   //  Use the insertAdjacentHTML method to insert the studentList variable into the DOM. Using beforeend position.
   studentList.insertAdjacentHTML("beforeend", studentItem);
 }
 
 //  Call the showPage function passing in the parameters data and 1.
 showPage(data, 1);
 
 //  Create a function named addPagination that will accept one parameter, list.
 function addPagination(list) {
   //  create a variable to calculate the number of pages needed name it numOfPages
   const numOfPages = Math.ceil(list.length / 9);
   //  Use the querySelector method to capture the element with the "link-list" class and assign it to a variable named linkList.
   const linkList = document.querySelector(".link-list");
   //  Set the .innerHTML property of linkList to an empty string.
   linkList.innerHTML = "";
   // (Define button and set it to an empty string)
   let button = "";
 
   //  Create a for loop that will use the numOfPages variable. Have i start at 1 and until i is less than or equal to numOfPages.
   for (let i = 1; i <= numOfPages; i++) {
     //  Create a DOM element that will display the pagination button and assign it to a variable named button.
     //  This variable will hold the template literal (Define button outside the for loop)
     button = `<li>
     <button type="button"> ${[i]}</button> 
   </li>`;
 
     //  Use the insertAdjacentHTML method to insert linkList variable into the DOM in the beforeend position.
     linkList.insertAdjacentHTML("beforeend", button);
   }
 
   //  Use the querySelector method to capture the button element and assing it to a variable.
   const firstBtn = document.querySelector("button");
   console.log(firstBtn);
   //  Use the className element and assign it to " active" using the firstBtn variable
   firstBtn.className = "active ";
 
 
   // Create an event listener with the variable linkList when there is a click event. 
   linkList.addEventListener("click", (e) => {
     //  Create a conditional statement that targets an element with the tagName BUTTON.
     if (e.target.tagName === "BUTTON") {
       //  Use querySelector method to capture the element with the className "active" and assign it to a variable named activeBtn
       const activeBtn = document.querySelector(".active");
       // Grabbed the activeBtn variable and gave it a className of an empty string.
       // This way it becomes inactive after another button is clicked.
       activeBtn.className = "";
       //  Set the e.target class to active so that only the button being clicked is active.
       e.target.className = "active";
       // Call the showPage function and pass it the parameters list and e.target.textContent
       showPage(list, e.target.textContent);
     }
   });
 }
 
 // Call the addPagination function and pass the parameter data.
 addPagination(data);
 
 // //Call functions