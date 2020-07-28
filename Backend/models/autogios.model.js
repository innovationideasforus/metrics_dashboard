const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

const AutogiosSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  testCaseFixed: {
    type: Number,
  },
  testCaseExecuted: {
    type: Number,
  },
  defectRaised: {
    type: Number,
  },
  downTime: {
    type: Number,
  },
  otherActivies: {
    type: String,
    trim: true,
  },
  timeTaken: {
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

const Autogios = mongoose.model('Autogios', AutogiosSchema);
module.exports = { Autogios };
