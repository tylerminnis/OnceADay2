const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');


const routes = require('./routes/routes')



const host = '0.0.0.0' ;
const port = process.env.PORT || 4000;
//app.set('view engine', 'ejs')

app.use(cors())

//connect to database
mongoose.connect('mongodb+srv://tylerminnis:nuIRvC4QsXdsDdfh@cluster0.ycojqwe.mongodb.net/?retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    //start the server
    app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
})
})
.catch(err=>console.log(err.message));

//app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(express.static(__dirname+'../public'));


app.use('/', routes);



