const http = require('http');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type': 'application\json'});
    resp.write(JSON.stringify({name:'Aman', email:'aman@hotmail.com'}));
    resp.end();
}).listen(3000)