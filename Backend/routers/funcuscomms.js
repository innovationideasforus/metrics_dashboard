const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funcuscomms } = require('../models');

router.post('/funcuscomms', auth, async (req, res) => {
  try {
    const funcuscomms = new Funcuscomms({
      ...req.body,
      owner: req.user._id,
    });
    await funcuscomms.save();
    console.log('Data Saved!!!');
    res.status(200).send(funcuscomms);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/funcuscomms', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('funcuscomms').execPopulate();
    res.status(200).send(user.funcuscomms);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
