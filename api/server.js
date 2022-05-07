const express = require('express'); //import the express library
const bodyparser = require('body-parser'); //import body-parser

const app = express(); //using express library to get application module
app.use(bodyparser.json());//add body parser middleware

const port = 3000; 

//listen
app.listen(port, ()=>{
    console.log("Listening on port: "+port)
});

app.use(express.static('public'));
//respond
app.get('/',(request,response)=>{response.send("hello")});

// app.post('/visitors');

