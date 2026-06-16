const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs');

app.get('/profile', (req, resp) => {
    const details = {
        name: 'aman',
        email: 'aman@gmail.com',
        country: 'USA',
        skills:['JAVA', 'PHP', 'REACT', 'Node']
    }
    resp.render('profile2', { details });
});

app.listen(3100);