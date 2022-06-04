const express=require('express');
const bookDB=require('../models/userModel.js')
// const userController=require('../controllers/userController')

const router =express.Router();

router.post("/book-1", async function(req, res){
    let data=req.body
    let saveData =await bookDB.create(data)
    console.log(data)
    res.send({msg:saveData})
}),


router.get('/book-2',async function(req, res){
    let data=req.body
    let save =await bookDB.find()
    console.log(data)
    res.send({msg:save})
})


module.exports=router