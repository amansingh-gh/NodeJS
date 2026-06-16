const app = require('./src/app')

const port = 3000
app.listen(port,()=>{
    console.log(`The server runs on port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("This is home page")
})