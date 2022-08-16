const User = require('../modals/User');
const {MongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');


class AuthController{
    login(req,res,next){
        res.render("auth/login",{layout:false});
    }
    signup(req,res,next){
        res.render("auth/signup",{layout:false});
    }
}

module.exports = new AuthController();