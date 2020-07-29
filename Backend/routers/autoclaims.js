const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autoclaims } = require('../models');

router.post('/autoclaims', auth, async (req, res) => {
  try {
    const autoclaims = new Autoclaims({
      ...req.body,
      owner: req.user._id,
    });
    await autoclaims.save();
    console.log('Data Saved!!!');
    res.status(200).send(autoclaims);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/autoclaims', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('autoclaims').execPopulate();
    res.status(200).send(user.autoclaims);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
