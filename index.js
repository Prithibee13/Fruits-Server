const express = require('express');
const cors = require('cors');


const app = express();

const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())



app.listen(port , ()=>
{
    console.log("Fruit-server is runnig in", port);
})