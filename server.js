//initail test for server - working
//console.log("test")
/////////////////////////////////
//Express
const express = require('express');
const app = express();
//localhost:8080
const port = 8080;
//Middleware 
const bodyParser = require('body-parser')
//jsonToCsv function we build
const jsonToCsv = require('./jsonToCsv').jsonToCsv;
//Helper functions
const Promise = require("bluebird");
const fs = require('fs')
//Promisify fs methods
fs.readFileAsync = Promise.promisify(fs.readFile);
fs.writeFileAsync = Promise.promisify(fs.writeFile);
fs.unlinkAsync = Promise.promisify(fs.unlink);
//path manipulation 
const path = require('path');
//Assets 
//to host your static html file on the server
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded());
///////////////////////////////////////////////
app.post('/', (req, res) => {
    //takes what is added and send it to the function
    let csvText = jsonToCsv(JSON.parse(req.body.csvInput))
    fs.readFileAsync('./samples/textData.txt')
        //read the file and then write it becuse it does not exist and give it a number 
        .then(data => Promise.resolve(Number(data)))
        .catch(() => {
            return fs.writeFileAsync('./samples/textData.txt', 0)
                .then(() => 0);
        })
        .then((num) => {
            return fs.writeFileAsync(`${__dirname}/samples/${num}.csv`, csvText)
                .then(() => Promise.resolve(num))
        })
        .catch(() => console.log('error in writng file Async.'))
})










//////////////////////////////////////////////////////////
//Server Listen
app.listen(port, (error) => {
    if (error) { console.log('Something Wrong with server', error) }
    else { console.log('Server is listening on port ' + port) }
})
