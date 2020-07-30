const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funweb } = require('../models');

router.post('/funweb', auth, async (req, res) => {
  try {
    const funweb = new Funweb({
      ...req.body,
      owner: req.user._id,
    });
    await funweb.save();
    console.log('Data Saved!!!');
    res.status(200).send(funweb);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/funweb', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('funweb').execPopulate();
    res.status(200).send(user.funweb);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
