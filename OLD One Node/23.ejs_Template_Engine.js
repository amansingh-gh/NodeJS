const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs');

app.get('/profile', (req, resp)=>{
    const user={
        name:"Aman",
        email:'amanmax@getMaxListeners.com',
        country:'India'
    }
    resp.render('profile', {user});
});

app.listen(3000);
