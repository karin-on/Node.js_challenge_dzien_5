//Twój kod

const express = require('express');
const app = express();

let name;

app.get('/name/set/:imie', function (req, res) {
    name = req.params.imie;

    res.send("imię to: " + name);
});

app.get('/name/show', function (req, res) {
    res.send('wcześniej podane imię to: ' + name);
});

app.get('/name/check', function (req, res) {
    if (name) {
        res.send('imię zostało już zapisane w programie');
    } else {
        res.send('imię nie zostało jeszcze zapisane');
    }
});


app.listen(3000, () => {
    console.log('port 3000');
});
