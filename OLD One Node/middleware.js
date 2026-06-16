const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send('Provide your age');
    }
    else if (req.query.age < 18) {
        resp.send('You cannot enter this page')
    }
    else {
        next();
    }
}
app.use(reqFilter)

app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page')
});


app.listen(5000)