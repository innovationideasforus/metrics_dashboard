const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');
const { reject } = require('lodash');
const crypto = require('crypto');
const { response } = require('express');
const bcrypt = require('bcryptjs');

const AutoeiSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  scriptsPrepared: {
    type: Number,
  },
  timeTaken1: {
    type: Number,
  },
  scriptsExecuted: {
    type: Number,
  },
  timeTaken2: {
    type: Number,
  },
  defectsRaised: {
    type: Number,
  },
  downTime: {
    type: Number,
  },
  otherActivies: {
    type: String,
    trim: true,
  },
  timeTaken3: {
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

const Autoei = mongoose.model('Autoei', AutoeiSchema);
module.exports = { Autoei };
