require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


PORT=3000

connectDB()

app.listen(PORT, () => {
    console.log(`Listen at port number : ${PORT}`);
})