// server.js
import { createServer } from "https";
import { readFileSync } from "fs";

const options = {
  key: readFileSync("/path/to/private-key.pem"),
  cert: readFileSync("/path/to/certificate.pem"),
};

const server = createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is your secure server!\n");
});

const PORT = process.env.PORT || 443;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
