const express = require('express');
const cors = require('cors');


const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');


const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.poftg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.listen(port , ()=>
{
    console.log("Fruit-server is runnig in", port);
})