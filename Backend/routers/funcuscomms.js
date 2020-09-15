const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funcuscomms } = require('../models');

router.post('/funcuscomms', auth, async (req, res) => {
  try {
    let funCuscommsArr = req.body;
    let dbCuscommsArr = [];
    for(funcuscomms of funCuscommsArr){
      dbCuscommsArr.push(new Funcuscomms({
        ...funcuscomms,
        owner: req.user._id,
      }));
    }
    let savedDoc = await Funcuscomms.insertMany(dbCuscommsArr);
    // console.log('Data Saved!!!');
    res.status(200).send(savedDoc);
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
