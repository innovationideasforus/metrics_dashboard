const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autoclaims } = require('../models');

router.post('/autoclaims', auth, async (req, res) => {
  try {
    let autoClaimsArr = req.body;
    let dbAutoClaimsArr = [];
    for(autoClaims of autoClaimsArr){
      dbAutoClaimsArr.push(new Autoclaims({
        ...autoClaims,
        owner: req.user._id,
      }));
    }
    let savedDoc = await Autoclaims.insertMany(dbAutoClaimsArr);
    // console.log('Data Saved!!!');
    res.status(200).send(savedDoc);
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
