// console.log('Hello word')

const alice = {
    name : 'Alice',
    age : 23
};

var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


// http.createServer((request, response) => {
//     const jsonData = JSON.stringify(alice);

//     response.writeHead(200, {'Content-Type': 'application/json'});

//     response.end(jsonData);
// }).listen(8080);

const server = http.createServer((request, response) => {
    const jsonData = JSON.stringify(alice);
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*', // CORS için yazdık.
        'Content-Type': 'application/json'});
    response.end(jsonData);
});

// server.listen(8080, '192.168.1.106', ()=>{
//     console.log('Server started to listen at port:8080');
// });

server.listen(8080, 'localhost', ()=>{ // localhost = 177.0.0.1
    console.log('Server started to listen at port:8080');
});