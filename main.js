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
            para.textContent = `${formValue}`;
            mySection.appendChild(para);

        }
    }

    else if (formValue.length === 0) {
        alert("you have not type any to do list");
    };

});




