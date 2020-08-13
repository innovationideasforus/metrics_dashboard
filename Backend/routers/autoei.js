const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autoei } = require('../models');

router.post('/autoei', auth, async (req, res) => {
  try {
    let autoEiArr = req.body;
    let dbAutoEiArr = [];
    for(autoEi of autoEiArr){
      dbAutoEiArr.push(new Autoei({
        ...autoEi,
        owner: req.user._id,
      }));
    }
    let savedDoc = await Autoei.insertMany(dbAutoEiArr);
    // console.log('Data Saved!!!');
    res.status(200).send(savedDoc);
  } catch (e) {
    console.error(e);
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
