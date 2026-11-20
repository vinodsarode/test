var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' });

res.write(`
<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>
<style>
body {
font-family: Arial, sans-serif;
background: linear-gradient(135deg, #e3f2fd, #bbdefb);
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;
}
.container {
background: white;
padding: 30px;
border-radius: 10px;
box-shadow: 0 4px 10px rgba(0,0,0,0.2);
width: 300px;
text-align: center;
}
h2 {
color: #1565c0;
margin-bottom: 20px;
}
input[type="text"],
input[type="password"] {
width: 90%;
padding: 10px;
margin: 8px 0;
border: 1px solid #ccc;
border-radius: 5px;
}
input[type="submit"] {
background-color: #1565c0;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
}
input[type="submit"]:hover {
background-color: #0d47a1;
}
</style>
</head>
<body>
<div class="container">
<h2>TYBCA - SCS</h2>
User Name:
<input type="text" placeholder="Enter Username"><br>
Password:
<input type="password" placeholder="Enter Password"><br><br>
<input type="submit" value="Login">
</div>
</body>
</html>
`);
res.end();
});
const port = 3000;
server.listen(port);
console.log("Server running at http://localhost:3000/");