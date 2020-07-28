const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autoei } = require('../models');

router.get('/testAuth', auth, (req, res) => {
  console.log('UserID:', req.user._id);
  res.status(200).send('Success');
});

router.post('/autoei', auth, async (req, res) => {
  try {
    const autoei = new Autoei({
      ...req.body,
      owner: req.user._id,
    });
    await autoei.save();
    console.log('Data Saved!!!');
    res.status(200).send(autoei);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/autoei', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('autoei').execPopulate();
    res.status(200).send(user.autoei);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
