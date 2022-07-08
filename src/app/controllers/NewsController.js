const Course = require('../modals/Item');
const {mutipleMongooseToObject} = require('../../util/mongoose')

class NewsController{

    // [get] /news
    index(req, res){
        res.render('news')
    }

    show(req,res){
        res.send("news show")

    }



}

module.exports = new NewsController();