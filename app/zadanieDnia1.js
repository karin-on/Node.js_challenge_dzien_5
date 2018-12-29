//Twój kod

const express = require('express');
const app = express();

// let yesVotes = 0;
// let noVotes = 0;
//
//
// app.use(express.static('./public/zadanieDnia/'));
//
// app.get('/vote/yes', function(req, res) {
//     yesVotes++;
//     res.send('<h2>Dziękujemy za oddanie głosu!</h2>');
// });
//
// app.get('/vote/no', function(req, res) {
//     noVotes++;
//     res.send('<h2>Dziękujemy za oddanie głosu!</h2>');
// });
//
// app.get('/votes/check', (req, res) => {
//     res.send(`<h3>Ilość głosów na TAK: ${yesVotes}</h3>
//               <h3>Ilość głosów na NIE: ${noVotes}</h3>`);
// });
//
//
// app.listen(3000, () => {
//     console.log('port 3000');
// });



//----- version with 'maybe' -------

let yesVotes = 0;
let noVotes = 0;
let maybeVotes = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:option', (req, res) => {
    let option = req.params.option;

    switch (option) {
        case 'yes': yesVotes++;
        break;
        case 'no': noVotes++;
        break;
        case 'maybe': maybeVotes++;
    }

    res.send('<h2>Dziękujemy za oddanie głosu!</h2>')
});

app.get('/votes/check', (req, res) => {
    res.send(`<h3>Ilość głosów na TAK: ${yesVotes}</h3>
              <h3>Ilość głosów na NIE: ${noVotes}</h3>
              <h3>Ilość głosów TO SIĘ OKAŻE: ${maybeVotes}</h3>`);
});



app.listen(3000, () => {
    console.log('port 3000');
});