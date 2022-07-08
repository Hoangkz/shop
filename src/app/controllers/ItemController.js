
const Item = require('../modals/Item');
const {MongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');
class ItemController{

    // [get] /items /: slug

    show(req,res, next){
        // req.query.name
        // req.body.name
        // req.params.slug
        // res.send("Khoá học: "+req.params.id+" "+ Item.findById(req.params.id));
        Item.findOne({name:req.params.id})
            // res.json(req.params.id)
            .then(Item => {
                return res.render('items/show',{item: MongooseToObject(Item)});
            })
            .catch(next) 
    }

    //GET /items/store (edit)
    edit(req,res, next){
        Item.findById(req.params.id)
            .then(item => res.render('items/edit',{
                item: MongooseToObject(item)
            }))
            .catch(next)
        
    }
    //GET /items/store (create)
    create(req,res, next){
        
        return res.render('items/create');
        
    }


    //PUT /items/:id (update)
    update(req,res,next){
        Item.updateOne({_id: req.params.id}, req.body)
            // redirect chuyển sang trang ....
            .then(()=> res.redirect('/me/stored/items'))
            .catch(next)
    }
    
    //PATCH /items/:id (restore)
    restore(req,res,next){
        Item.restore({_id: req.params.id})
            // redirect chuyển sang trang ....
            .then(()=> res.redirect('back'))
            .catch(next)

    }
    //DELETE /items/:id (delete)
    // delete({_id: req.params.id} thêm delete = true vào database của Item cần xoás
    delete(req,res,next){
        Item.delete({_id: req.params.id})
            // redirect chuyển sang trang ....
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    permanentlyDelete(req,res,next){
        Item.deleteOne({_id: req.params.id})
            // redirect chuyển sang trang ....
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    
    //POST /items/create, tạo database    
    store(req,res, next){
        
        // res.json(req.body);
        // body nhận form từ sever gửi về database
        const item = new Item(req.body);
        item.save()
            .then(()=>res.redirect('/me/stored/items'))
            .catch(next)
        // res.send(req.body.img)

    }

    //POST /items/formAction danh sách lưa chọn thực hiện    
    formAction(req,res, next){
        
        switch(req.body.action){
            //chuyển vào thùng rác
            case "delete":
                Item.delete({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            // Khôi phục
            case "fix":
                Item.restore({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;
            // xoá vĩnh viễn
            case "permanentlyDelete":
                Item.deleteMany({_id: {$in: req.body.courseIds}})
                    .then(()=> res.redirect('back'))
                    .catch(next)
                break;  
            default:
                res.json(req.body);

        }

    }

}

module.exports = new ItemController();