const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('mongoose');
const nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const url:string = 'mongodb+srv://ranan97531:2524097531R@cluster0.rhkco4m.mongodb.net/shopReact'
db.connect(url).then(()=>{console.log('db is on');
})
app.use(express.static('../my-ts-app/build'))


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ranan97531@gmail.com',
    pass: 'azkhraqcilpsmxqw'
  }
});


// seting the schemas
const userSchema = db.Schema({
  name:String,
  email:String,
  password:String,
  arrOrder:Array,
})

const productSchema = db.Schema({
  productName: String,
  productPrice: Number,
  productImg: String
})

const orderSchema = db.Schema({
    fullName:String,
    mail:String,
    phonNumber:String,
    adress:String,
    listProduct:Array,
    price:Number
})





// seting the colection
const colectionUser = db.model('user',userSchema)
const colectionProduct = db.model('product',productSchema)
const colectionOrder = db.model('order',orderSchema)


app.post('/signIn',async (req:any,res:any)=>{
  let result = await colectionUser.findOne({name:req.body.name,password:req.body.password})
  if(result == null){
    res.json(false)
  }
  else
    res.json(result)
})

app.post('/signUp',async (req:any,res:any)=>{
  let result = await colectionUser.findOne({name:req.body.name,email:req.body.email})
  if(result == null){
    let temp = {
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      arrOrder:[],
    }
    await colectionUser.insertMany(temp)
    res.json(temp)
  }
  else{
    res.json(false)
  }
})

app.get('/allproduct', async (req:any,res:any)=>{
  let arr = await colectionProduct.find()
  res.json(arr)
})

app.post('/newOrder',async (req:any,res:any)=>{
  let temp ={
    fullName:req.body.fullName,
    mail:req.body.mail,
    phonNumber:req.body.phonNumber,
    adress:req.body.adress,
    listProduct:req.body.listProduct,
    price:req.body.price
  }
  console.log(temp);
  
  await colectionOrder.insertMany(temp)

  
  let mailOptions = {
    from: 'ranan97531@gmail.com',
    to: req.body.mail,
    subject:'Order confirmation from the GlobalMallOnline website',
    text: `Thank you for shopping at GlobalMallOnline \n Your order to the address : ${req.body.adress} , \n for a total of ${req.body.price} successfully received `
  };
  transporter.sendMail(mailOptions, function(error:any, info:any){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  let result = await colectionUser.findOne({name:req.body.name,password:req.body.password})
  if(result != null){
    let arr = [...result.arrOrder,temp]
    await colectionUser.updateOne({name:req.body.name,password:req.body.password},{$set:{arrOrder:arr}})
    let user = await colectionUser.findOne({name:req.body.name,password:req.body.password})
    res.json(user)
  }
  else{
    res.json(true)
  }
})





// app.get('/sendMail',async(req:any,res:any)=>{
//     let mailOptions = {
//       from: 'ranan97531@gmail.com',
//       to: 'ranan97531@gmail.com',
//       subject: 'סיכום הזמנה מאתר אור ספרים ',
//       text: 'הזמנתם 14 ספרים סך כל המחיר הוא 16500 ש"ח /n כל הכבוד ישר כח'
//     };
//      transporter.sendMail(mailOptions, function(error:any, info:any){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
// })


app.listen(3000,()=>{
    console.log('on port 3000');
})