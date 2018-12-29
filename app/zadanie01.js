//Twój kod

const express = require('express');
const app = express();

app.get('/sum/:num1/:num2', function (req, res) {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let result = Number(num1) + Number(num2);

    res.send('Suma to: ' + result);
});


app.listen(3000, function () {
    console.log('server is running at port 3000');
});