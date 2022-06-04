const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    bookName:{type:String,
            unique: true,
            required: true},
    authorName: String,
    category: String,
    year: {type:String,
            unique:true,
            required:true},
},{Timestamp:true})
module.exports=mongoose.model('book',bookSchema)