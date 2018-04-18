const express = require('express');
const monsters = require('./monsters');
const app = express();
const PORT = 5000;


app.use(express.static('server/public'));

app.get('/monsters', (req, res) => {
    res.send(monsters);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`);
});