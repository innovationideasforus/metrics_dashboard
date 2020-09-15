const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

const FunwebSchema = new mongoose.Schema({
  date: {
    type: Date,
  },

  testPrepPlanned: {
    type: Number,
  },
  testPrepPlannedTimeTaken: {
    type: Number,
  },
  testCaseExecuted: {
    type: Number,
  },
  testCaseExecutedTimeTaken: {
    type: Number,
  },
  defectRaised: {
    type: Number,
  },
  downTime: {
    type: Number,
  },
  otherActivities: {
    type: String,
    trim: true,
  },
  otherActiviesTimeTaken: {
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

const Funweb = mongoose.model('Funweb', FunwebSchema);
module.exports = { Funweb };
