const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Logging: ' + Date.now());
    return res.send('Hello Crazy8!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
