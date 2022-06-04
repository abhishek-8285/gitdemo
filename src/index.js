const express=require('express');
const {default:mongoose}=require('mongoose');
const bodyParser=require('body-parser')
const route=require('./routes/route');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const url= 'mongodb+srv://betechnoid:Abhishek8285366507@cluster0.ctbkbk3.mongodb.net/abhishekshri?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser:true
})
.then(()=> console.log("database is connected"))
.catch(err=>console.log(err))


app.use('/',route)


app.listen(process.env.PORT || 3000, ()=>{console.log('Express app running on port  '+(process.env.PORT || 3000))
});