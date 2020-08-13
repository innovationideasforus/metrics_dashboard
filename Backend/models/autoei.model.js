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
  scriptsPreparedTimeTaken: {
    type: Number,
  },
  scriptsExecuted: {
    type: Number,
  },
  scriptsExecutedTimeTaken: {
    type: Number,
  },
  defectsRaised: {
    type: Number,
  },
  downtime: {
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

const Autoei = mongoose.model('Autoei', AutoeiSchema);
module.exports = { Autoei };
