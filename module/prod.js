const   mongoose  = require("mongoose");


const prodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:false
    },price:{
        type:Number,
        required:true
    }
})

const product = mongoose.model('product',prodSchema);
module.exports=product;