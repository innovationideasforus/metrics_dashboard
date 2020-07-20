const express = require('express');
const app = express();

const mongoose = require('./database/mongoose');

/*
CORS - cross origin request security
localhost:3000 - backend api
localhost:4200 - front end
*/

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, HEAD , OPTIONS, PUT , PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.listen(3000, () => console.log('Server Connected On Port 3000'));
