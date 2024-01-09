"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('mongoose');
const nodemailer = require('nodemailer');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const url = 'mongodb+srv://ranan97531:2524097531R@cluster0.rhkco4m.mongodb.net/shopReact';
db.connect(url).then(() => {
    console.log('db is on');
});
app.use(express.static('./rets/build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../rest/build', 'index.html'));
//   });
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ranan97531@gmail.com',
        pass: 'azkhraqcilpsmxqw'
    }
});

// Setting the user values
const userSchema = db.Schema({
    name: String,
    email: String,
    password: String,
    arrOrder: Array,
});

// Setting the product values
const productSchema = db.Schema({
    productName: String,
    productPrice: Number,
    productImg: String
});

// Setting the order values
const orderSchema = db.Schema({
    fullName: String,
    mail: String,
    phonNumber: String,
    adress: String,
    listProduct: Array,
    price: Number
});


// Defining the folders according to the schema in the db 
const colectionUser = db.model('user', userSchema);
const colectionProduct = db.model('product', productSchema);
const colectionOrder = db.model('order', orderSchema);


// log in of user 
// Check if the user exists in the system, if the user exists returns details of the user, if not returns false 
app.post('/signIn', async (req, res) => {
    let result = await colectionUser.findOne({ name: req.body.name, password: req.body.password });
    if (result == null) {
        res.json(false);
    }
    else
        res.json(result);
});


// Sigun up of user 
// Checks if there is a user in the system who is registered with the same email and name if it is the same and returns false if the new user is not registered in the system
app.post('/signUp', async (req, res) => {
    let result = await colectionUser.findOne({ name: req.body.name, email: req.body.email });
    if (result == null) {
        let temp = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            arrOrder: [],
        };
        await colectionUser.insertMany(temp);
        res.json(temp);
    }
    else {
        res.json(false);
    }
});

// return arr of all priduct
app.get('/allproduct', async (req, res) => {
    let arr = await colectionProduct.find();
    res.json(arr);
});


// creatr new order 
app.post('/newOrder', async (req, res) => {
    let temp = {
        fullName: req.body.fullName,
        mail: req.body.mail,
        phonNumber: req.body.phonNumber,
        adress: req.body.adress,
        listProduct: req.body.listProduct,
        price: req.body.price
    };

    // add order  of the folder order 
    await colectionOrder.insertMany(temp);

    // Send a mail to the user whose order was successfully received
    let mailOptions = {
        from: 'ranan97531@gmail.com',
        to: req.body.mail,
        subject: 'Order confirmation from the GlobalMallOnline website',
        text: `Thank you for shopping at GlobalMallOnline \n Your order to the address : ${req.body.adress} , \n for a total of ${req.body.price} successfully received `
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });

    // Adding an order to the user's order set
    let result = await colectionUser.findOne({ name: req.body.name, password: req.body.password });
    if (result != null) {
        let arr = [...result.arrOrder, temp];
        await colectionUser.updateOne({ name: req.body.name, password: req.body.password }, { $set: { arrOrder: arr } });
        let user = await colectionUser.findOne({ name: req.body.name, password: req.body.password });
        res.json(user);
    }
    else {
        res.json(true);
    }
});


app.listen(3001, () => {
    console.log('on port 3001');
});
