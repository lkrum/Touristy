// making a submit button 
// need function to append blog name to page
// save the value of the submit form and display it as blog name
var submitBtn = document.getElementById("submitBtn");
var listEl = document.querySelector('ul');
var textInput = ""; 

function createblog(){
var blog = document.createElement('li').setAttribute("blog");
blog.textContent = textInput.value;
blog.href = `/post${id}`;
listEl.appendChild(blog)

}


// return `<li><a href="/trip/${id}>${name}</li></a>`


