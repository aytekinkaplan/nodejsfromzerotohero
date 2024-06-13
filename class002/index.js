const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "html");

  res.write("<h1>Hello World</h1>");
  res.write("<p>My name is Aytekin Kaplan</p>");
  res.write("<p>I am learning NodeJS</p>");
  res.write("<p>My favorite food is pizza</p>");
  res.write("<p>I am 25 years old</p>");
  res.write("<p>My favorite color is blue</p>");
  res.write("<p>I am from Chicago</p>");
  res.write("<p>I am not a fan of cats</p>");
  res.write("<p>I like to eat pizza</p>");
  res.end("");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
