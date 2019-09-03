# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file) -- Send back contents of a file usings res.render which must be in the views directory of our file structure!
* Explain what EJS is and why we use it -- ESJ is javascript that can be run as html file (Embedded Javascript) <%= EmbeddedJavascript %>
* Pass variables to EJS templates -- Pass an object in the res.render call as a key value pair which takes in the ejs variable as the key and javascript variable as the value that matches the key.

<%= %> #Renders the javascript as HTML
<% %> Evaluates code but doesn't add anything to the HTML