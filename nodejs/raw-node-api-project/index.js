/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Abu Sayeed
 * Date: 22/09/2022
 *
 */

// Dependencies
const http = require("http");
const url = require('url');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimPath = path.replace(/^\+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    headersObject = req.headers;
    console.log(headersObject);
  // response handle
  res.end("Hello bangladesh");
};

// start the server

app.createServer();