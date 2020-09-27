const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

const AutoclaimsSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  date: {
    type: Date,
  },
  release: {
    type: String,
  },
  projects: {
    type: String,
    trim: true,
  },
  testCaseExecuted: {
    type: Number,
  },
  testCaseExecutedTimeTaken: {
    type: Number,
  },
  testCaseFixed: {
    type: Number,
  },
  testCaseFixedTimeTaken: {
    type: Number,
  },
  newScriptsCreated: {
    type: Number,
  },
  newScriptsCreatedTimeTaken: {
    type: Number,
  },
  defectsRaised: {
    type: Number,
  },
  downTime: {
    type: Number,
  },
  otherActivities: {
    type: String,
    trim: true,
  },
  otherActivitiesTimeTaken: {
    type: Number,
  },
  remarks: {
    type: String,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Autoclaims = mongoose.model('Autoclaims', AutoclaimsSchema);
module.exports = { Autoclaims };
