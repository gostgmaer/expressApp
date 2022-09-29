const express = require("express");
const  path  = require("path");
const  mongoose  = require("mongoose");
const Product = require('./module/prod')

const app = express();
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connection Success')
    }).catch(err => {
        console.log('Ohh Not able to connect please check the Error : ', err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products= await  Product.find({})
    console.log(products)
      res.render('products/index')
  })







app.listen(80, () => {
    console.log('On Port 80');
})