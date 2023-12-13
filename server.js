// server.js
const http = require("http");
const fs = require("fs");

// const options = {
//   key: fs.readFileSync("./private_file/private-key.pem"),
//   cert: fs.readFileSync("./private_file/certificate.pem"),
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, this is your secure server!\n");
// });

// const PORT = process.env.PORT || 443;

// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is your server!\n");
});

const PORT = 3000; // Choose a port number

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
