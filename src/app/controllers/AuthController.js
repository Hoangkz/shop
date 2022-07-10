const Item = require('../modals/Item');
const {MongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');


class AuthController{
    login(req,res,next){
        res.render("auth/login");
    }
    signup(req,res,next){
        res.render("auth/signup");
    }
}

module.exports = new AuthController();