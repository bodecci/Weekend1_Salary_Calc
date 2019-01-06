//setup requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5004;
const employeess = [];
let monthTotal = 0;
const budget = 20000;


//server running on PORT
app.listen(PORT, () => {
    console.log('server running on PORT:', PORT);
});

app.post('/employee', (req, res) => {
    console.log('/employee POST', req.body);
    employeess.push(req.body);
    res.sendStatus(201);
});

app.get('/employee', (req, res) => {
    console.log('/employee GET', employeess);
    res.send(employeess);
});