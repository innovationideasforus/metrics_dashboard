const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funclaims } = require('../models');

router.post('/funclaims', auth, async (req, res) => {
  try {
    const funclaims = new Funclaims({
      ...req.body,
      owner: req.user._id,
    });
    await funclaims.save();
    console.log('Data Saved!!!');
    res.status(200).send(funclaims);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/funclaims', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('funclaims').execPopulate();
    res.status(200).send(user.funclaims);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
