const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

const FunmobileSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  projects: {
    type: String,
    trim: true,
  },

  assignedTo: {
    type: String,
    trim: true,
  },
  testPrepPlanned: {
    type: Number,
  },
  testPrepPlannedTimeTaken: {
    type: Number,
  },
  testPrepRework: {
    type: Number,
  },
  testPrepReworkTimeTaken: {
    type: Number,
  },
  pass: {
    type: Number,
  },
  fail: {
    type: Number,
  },
  hold: {
    type: Number,
  },
  retest: {
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

const Funmobile = mongoose.model('Funmobile', FunmobileSchema);
module.exports = { Funmobile };
