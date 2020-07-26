// check whether the request has a valid JWT access token
const {User} = require('../models');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try{
        let accessToken = req.header('x-access-token');
        let refreshToken = req.header('x-refresh-token');
        // verify the JWT
        const decoded = jwt.verify(accessToken, User.getJWTSecret());
        const user = await User.findOne({_id:decoded._id,'sessions.token':refreshToken});
        if(!user){
            res.status(401).send({error:"Invalid Session"});      
        }
        req.user = user;
        next();
    }catch(err){
        res.status(401).send({error:"UnAuthorized"});
    }
};

module.exports = authenticate;