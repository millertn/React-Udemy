const http = require('http');
const fs = require('fs');

// function requestListener(request, response) {

// }

// http.createServer(requestListener);
const server = http.createServer((request, response) => {
    // console.log(request.url, request.method, request.headers);
    const url = request.url;
    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html><form action='/message' method='POST'> <input type='text' name='message'> <button type='submit'>send</button> </form> </html>");
        return response.end();
    }
    if (url === '/message' && request.method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            response.statusCode = 302;
            response.setHeader('Location', '/');
        });
    }   
    // response.setHeader('Content-Type', 'text/html');
    // response.write("<html><h1>Hello world</h1></html>")
    // response.end();
});

server.listen(3000);