module.exports = {
    mongooseToSearch:function (mongooses, Search) {
        return mongooses.filter((mongoose) => {
                // let mongoose.toObject() = mongoose.toObject()
                if(mongoose.toObject().name.toLowerCase().includes(Search)){
                    return mongoose.toObject()
                }
            })
    }
    // mongooseToSearch: function toSearch(mongo
}