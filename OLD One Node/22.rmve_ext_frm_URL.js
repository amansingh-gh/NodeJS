const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// console.log(publicPath);

app.get('', (req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (req, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('*', (req, resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
});

app.use(express.static(publicPath));
app.listen(3000);