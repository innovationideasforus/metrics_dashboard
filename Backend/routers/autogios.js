const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autogios } = require('../models');

router.get('/testAuth', auth, (req, res) => {
  console.log('UserID:', req.user._id);
  res.status(200).send('Success');
});

router.post('/autogios', auth, async (req, res) => {
  try {
    let autoGiosArr = req.body;
    console.log("Input response"+JSON.stringify(autoGiosArr));
    let dbAutoGiosArr = [];
    for(autoGios of autoGiosArr){
      dbAutoGiosArr.push(new Autogios({
        ...autoGios,
        owner: req.user._id,
      }));
    }
    console.log("Value here after obj Creation:"+JSON.stringify(dbAutoGiosArr));
    let savedDoc = await Autogios.insertMany(dbAutoGiosArr);
    console.log('Data Saved!!!');
    res.status(200).send(savedDoc);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: 'Invalid request' });
  }
});

router.get('/autogios', auth, async (req, res) => {
  try {
    const user = req.user;
    await user.populate('autogios').execPopulate();
    res.status(200).send(user.autogios);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
