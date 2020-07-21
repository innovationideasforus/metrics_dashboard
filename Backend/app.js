const express = require('express');
const app = express();

const { mongoose } = require('./database/mongoose');
const bodyParser = require('body-parser');
const { User } = require('./database/models');

/*
CORS - cross origin request security
localhost:3000 - backend api
localhost:4200 - front end

*/
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World');
});

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

/**
 * this is to test the page and the request body , it is purely for testing purpose
 */
app.post('/user', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});

/* USER ROUTES*/

// post /users
//purpose : first time sign up

app.post('/users', (req, res) => {
  console.log('testing');
  let body = req.body;
  let newUser = new User(body);
  console.log(req.body);

  newUser
    .save()
    .then(() => {
      return newUser.createSession();
    })
    .then((refreshToken) => {
      // session created successfully - refreshToken returned.
      // now we generate an a ccess auth token for the user

      return newUser.generateAccessAuthToken().then((accessToken) => {
        return { accessToken, refreshToken };
      });
    })
    .then((authTokens) => {
      res
        .header('x-refresh-token', authTokens.refreshToken)
        .header('x-access-token', authTokens.accessToken)
        .send(newUser);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

/**
 * post /users/login
 * purpose: post user is created we can able to login
 */
app.post('./users/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findByCredentials(email, password)
    .then((user) => {
      return user
        .createSession()
        .then((refreshToken) => {
          return user.generateAccessAuthToken().then((accessToken) => {
            return { accessToken, refreshToken };
          });
        })
        .then((authTokens) => {
          res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(User);
        });
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

/* LIST ROUTES */

app.use(express.json());
app.listen(3000, () => console.log('Server Connected On Port 3000'));
