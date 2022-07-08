const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/App_Web',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect true');
    } catch (error) {
        console.log('Connect flase');
    }
}
module.exports = {connect};