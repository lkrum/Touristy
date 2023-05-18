// Compile Handlebars template
const templateSource = document.getElementById('post.handlebars').innerHTML;
const template = Handlebars.compile(templateSource);

// Define the data to pass to the template
const data = {
  
};

// Render the template with data
const renderedTemplate = template(data);

// Insert the rendered template into HTML
document.getElementById('map').innerHTML = renderedTemplate;
