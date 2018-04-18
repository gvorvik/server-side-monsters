const express = require('express');
const app = express();
const PORT = 5000;

const monsters = ['Big Foot', 'Loch Ness Monster', 'Mike', 'Sully'];

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`);
});