const fs = require('fs');

const requestHandler =  (request, response) => {
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
            const message = parsedBody.split('=')[0];
            fs.writeFileSync('message.txt', message);
            response.statusCode = 302;
            response.setHeader('Location', '/');
        });
    } 
}

module.exports = requestHandler;

//hi
// module.exports = {
//      handler: requestHandler,
//      text:"Some hard coded text"
// }