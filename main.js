"use strict"

const toList = []

const form = document.getElementById("myForm");
const mySection = document.getElementById("listSection"); 


form.addEventListener('submit', function(event){
    event.preventDefault();
    const formInput = document.getElementById("text");
    const formValue = formInput.value.trim();

    if (formValue.length !== 0){
        toList.push(formValue);
        if(formValue){
            const para = document.createElement("p");
            para.innerHTML = `${formValue}<a href="https://www.w3schools.com/jsref/met_document_createelement.asp">delete</a>`;
            mySection.appendChild(para);

        }
    }

    else if (formValue.length === 0) {
        alert("you have not type any to do list");
    };

});


// Event delegation: listen for clicks on <a> inside #listSection
mySection.addEventListener("click", function(event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    alert("hello world");
    event.target.parentElement.remove();
  }
});








