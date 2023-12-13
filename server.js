// server.js
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("./private_file/private-key.pem"),
  cert: fs.readFileSync("./private_file/certificate.pem"),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is your HTTPS secure server!\n");
});

const PORT = process.env.PORT || 443;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
