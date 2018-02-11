const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    next();
  } else {
    req.url = '/index.html';
    next();
  }
});

app.use(express.static(`${__dirname}/dist`))
  .get('/', (req, res) => {
    res.sendFile('index.html', {
      root: `${__dirname}/dist`,
    });
  });

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});
