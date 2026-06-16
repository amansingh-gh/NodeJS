// Express handles API, routes, Port, Pages, etc.
// install = npm i express

const express = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send(`Hello, this is home page <br/><a href="/about">Go to about page></a>`);
    // resp.send(``);
});

app.get('/text', (req, resp) => {
    resp.send(`
    <input type="text" placeholder = "Enter Something" value="${req.query.name}"/>
    <button>Click Me</button>
    `);
});

app.get('/json', (req, resp) => {
    resp.send([
        {
            name: "Sam",
            email: 'sam@hotmail.com'
        },
        {
            name: "Sabuu",
            email: 'sabuu@hotmail.com'
        }
    ])
})

app.get('/about', (req, resp) => {
    resp.send(`Hello, this is about page  <br/><a href="/">Go to home page></a>`);
});

app.listen(5000);