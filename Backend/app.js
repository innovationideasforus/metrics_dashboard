const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

//Authentication
const jwt = require('jsonwebtoken');
// Load in the mongoose models
const { User } = require('./models');
const { autoei } = require('./models/autoei.model');
const { autogios } = require('./models/autogios.model');
const { autoclaims } = require('./models/autoclaims.model');
const { funclaims } = require('./models/funclaims.model');

// Load User Routes
const userRouter = require('./routers/user');
const autogiosRouter = require('./routers/autogios');
const autoeiRouter = require('./routers/autoei');
const autoclaimsRouter = require('./routers/autoclaims');
const funclaimsRouter = require('./routers/funclaims');

const app = express();
/*
CORS - cross origin request security
localhost:3000 - backend api
localhost:4200 - front end

*/

// CORS HEADERS MIDDLEWARE
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id'
  );

  res.header(
    'Access-Control-Expose-Headers',
    'x-access-token, x-refresh-token'
  );

  next();
});

/* MIDDLEWARE STARTS*/
// Load middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

/* MIDDLEWARE ENDS*/
app.use(express.json());
app.use(userRouter, autogiosRouter);
app.use(userRouter, autoeiRouter);
app.use(userRouter, autoclaimsRouter);
app.use(userRouter, funclaimsRouter);
app.listen(3000, () => console.log('Server Connected On Port 3000'));
