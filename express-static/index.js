const path = require('path');
const express = require('express');

const app = express();

const jPath = path.join(__dirname, 'public');

const sPath = express.static(jPath);

app.use(sPath);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
