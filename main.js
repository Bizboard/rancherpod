
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Logging: ' + Date.now());
  return res.send('Hello Crazy8. RIP!');
});

console.log('should block now');

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Example app listening on port 3000!'));
