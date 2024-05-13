const http = require('http');
const moment = require('moment-timezone');

const port = 5000;
const author = "Artem Smolii";

const server = http.createServer((req, res) => {
  const clientIP = req.socket.remoteAddress;
  const clientTimezone = moment.tz.guess();
  const clientTime = moment().tz(clientTimezone).format('YYYY-MM-DD HH:mm:ss');

  console.log(`New client connection from IP: ${clientIP}`);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <h1>Client Information</h1>
    <p>Your IP address: ${clientIP}</p>
    <p>Current date and time in your timezone: ${clientTime}</p>
  `);
  res.end();
});

server.listen(port, () => {
  console.log(`Server started on port ${port}. Author: ${author}.`);
});