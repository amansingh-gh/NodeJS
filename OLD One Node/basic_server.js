const http = require('http');
http.createServer((req, resp)=>{
    resp.write("Basic Server");
    resp.end();
}).listen(4500);