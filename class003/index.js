const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;
  if (pathname === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (pathname === "/about") {
    fs.readFile(path.join(__dirname, "about.html"), (err, content) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (pathname === "/api") {
    fs.readFile(path.join(__dirname, "data.json"), (err, content) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(content);
    });
  } else {
    fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
