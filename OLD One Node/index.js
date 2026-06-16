const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'customers';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('details');
    // let data = await collection.find({}).toArray();
    // console.log(data);
}
// getData();
// console.log(getData())
getData().then((resp) => {
    resp.find().toArray().then((data) => {
        console.log(data);
    })
})