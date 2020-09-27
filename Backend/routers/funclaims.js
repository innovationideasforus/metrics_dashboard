const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Funclaims } = require('../models');

router.post('/funclaims', auth, async (req, res) => {
 try {
    let funClaimsArr = req.body;
    let dbFunClaimsArr = [];
    for(funclaims of funClaimsArr){
      dbFunClaimsArr.push(new Funclaims({
        ...funclaims,
        owner: req.user._id,
      }));
    }
    let savedDoc = await Funclaims.insertMany(dbFunClaimsArr);
    // console.log('Data Saved!!!');
    res.status(200).send(savedDoc);
  } catch (e) {
    res.status(400).send({ error: 'Invalid request' });
  }
});
  
router.get('/funclaims', auth, async (req, res) => {
  try {
    const user = req.user;
    console.log("User:"+user._id);
    await user.populate('funclaims').execPopulate();
    res.status(200).send(user.funclaims);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = router;
