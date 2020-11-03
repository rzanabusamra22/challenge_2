//initail test for server - working
//console.log("test")
/////////////////////////////////
//Express
const express = require('express');
const app = express();
//localhost:3000
const port = 3000;
//Assets 
app.use(express.static('client'));
//Middleware 
const bodyParser = require('body-parser')


// app.post('/upload_json', (req, res) => {

// })
app.get('/', (req, res) => {
    res.send('hello test')
})
app.post('/', (req, res) => { })









//Server Listen
app.listen(port, function (error) {
    if (error) {
        console.log('Something Wrong with server', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
