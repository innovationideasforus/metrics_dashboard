const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funmobile } = require('../models');

router.post('/funmobile', auth, async (req, res) => {
  try {
    const funmobile = new Funmobile({
      ...req.body,
      owner: req.user._id,
    });
    await funmobile.save();
    console.log('Data Saved!!!');
    res.status(200).send(funmobile);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/funmobile', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('funmobile').execPopulate();
    res.status(200).send(user.funmobile);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
