
const Course = require('../modals/Item');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SitesController{

    // [get] /home
    index(req, res, next){
        //promise
        Course.find({})
            .then(courses =>{
                res.render("home",{
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);

        //callbacks
            // Course.find({},function(err, courses){
            //     if(!err) {
            //     res.json(courses);
            //     }
            //     else{
            //         next(err)
            //     }
            // })
    }
     // [get] /search
     search(req, res){
        res.render('search')
    }




}

module.exports = new SitesController();