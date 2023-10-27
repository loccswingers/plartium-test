const http = require('http');

// Set of banned IP addresses
const bannedIPs = new Set(['1.2.3.4', '5.6.7.8']);

const server = http.createServer((request, response) => {
  const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

  if (bannedIPs.has(ip)) {
    response.writeHead(403, {'Content-Type': 'text/plain'});
    response.end('Access Denied. Your IP address has been banned.');
    console.log(`Banned IP address (${ip}) attempted to access the website.`);
  } else {
    // Serve website content
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});