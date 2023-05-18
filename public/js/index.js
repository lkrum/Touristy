function createblog() {

// creating list element  
var blog = document.createElement('li').setAttribute("blog");
// setting the text content of the newly created li to whatever the user typed in
blog.textContent = textInput.value;
blog.href = `/blog/${id}`;
// grabbing the ul tag and appending the newly created blog li to it
var listEl = document.getElementsByTagName("ul");
listEl.appendChild(blog)

const title = document.querySelector('input').value;
// fetch request for creating a blog
  if (title) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// grabbing submitBtn id
var submitBtn = document.getElementById("submitBtn");
// adding event listener to submit button
submitBtn.addEventListener('click', function(event) {
event.preventDefault();
// setting form input to clear after the submit button is hit
var formInput = document.getElementById('inputBlog');

formInput.textContent = '';
// calling create blog function 
createblog();
});







// return `<li><a href="/trip/${id}>${name}</li></a>`


