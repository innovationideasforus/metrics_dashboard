const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

//jwt secret we need to create

const jwtSecret =
  '9446546549865489426549849fsdf9sdfs8da4fsdf54s65f4g654sdfg654sdfg';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  sessions: [
    {
      token: {
        type: String,
        required: true,
      },
      expiresAt: {
        type: Number,
        required: true,
      },
    },
  ],
});

//instance methods we are going to use  1. userschema.methods.toJson =function()

UserSchema.methods.toJson = function () {
  const user = this;
  const userObject = user.toObject();
  // return the document except the password and sessions (therse should be made available)
  return_.omit(userObject, ['password', 'sessions']);
};

UserSchema.methods.generateAccessAuthToken = function () {
  const user = this;
  return new Promise((resolve, reject) => {
    //cretae the JSON web tokend and return that
    jwt.sign(
      { _id: user._id.toHexString() },
      jwtSecret,
      { expiresIn: '15m' },
      (err, token) => {
        if (!err) {
          resolve(token);
        } else {
          reject();
        }
      }
    );
  });
};

UserSchema.methods.generateRefreshAuthToken = function () {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (!err) {
        let token = buf.toString('hex');
        return resolve(token);
      }
    });
    let expiresAt = generateRefreshTokenExpiryTime();
  });
};

UserSchema.methods.createSession = function () {
  let user = this;
  return user
    .generateRefreshAuthToken()
    .then((refreshtoken) => {
      return saveSessionToDatabase(user, refreshtoken);
    })
    .then((refreshtoken) => {
      return refreshtoken;
    })
    .catch((e) => {
      return Promise.reject('Failed to save session to the Database.\n' + e);
    });
};

let saveSessionToDatabase = (user, refreshtoken) => {
  //save session to database
  return new Promise((resolve, reject) => {
    let expiresAt = generateRefreshTokenExpiryTime();
    user.sessions.push({ token: refreshtoken, expiresAt });
    user
      .save()
      .then(() => {
        //session has been saved here successfully
        return resolve(refreshtoken);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let generateRefreshTokenExpiryTime = () => {
  let daysUntilExpire = '10';
  let secondsUntilExpire = daysUntilExpire * 24 * 60 * 60;
  return Date.now() / 1000 + secondsUntilExpire;
};

// Models Methods - static methods

UserSchema.statics.findByIdAndToken = function (_id, token) {
  // find user by Id and token
  // used in auth midddleware - verify seesion
  const User = this;
  return User.findOne({ _id, 'session.token': token });
};

UserSchema.statics.findByCredentials = function (email, password) {
  let User = this;
  return User.findOne({ email }).then((user) => {
    if (!user) return Promise.reject();

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) resolve(user);
        else {
          reject();
        }
      });
    });
  });
};

UserSchema.statics.hasRefreshTokenExpired = (expiresAt) => {
  let secondsSinceEpoch = Date.now() / 1000;
  if (expiresAt > secondsSinceEpoch) {
    return false;
  } else {
    return true;
  }
};

// MIDDLEWARE
// Before a user document is save , this code runs

UserSchema.pre('save', function (next) {
  let user = this;
  let costFactor = 10;

  if (user.isModified('password')) {
    // if the password is changed then run this code
    //generating salt and password
    bcrypt.genSalt(costFactor, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// Healper Methods

const User = mongoose.model('User', UserSchema);
module.exports = { User };
