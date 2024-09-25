const http = require('http');

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text.plain');
    // res.end('Hello, World!\n');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About us page');
    } else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact us page');
    } else {
        res.writeHead(404, {'Content-Type': 'plain/text'});
        res.end('Page not found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});