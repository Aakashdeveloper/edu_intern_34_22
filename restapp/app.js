let express = require('express')
let app = express();
let  mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let port = process.env.PORT || 8340;
let cors = require('cors')
// middleware
app.use(cors())
let mongoUrl = "mongodb+srv://local:test12345@cluster0.f8vmc.mongodb.net/augintern?retryWrites=true&w=majority";
let db;

app.get('/',(req,res) => {
    res.send("Welcome to Node Api")
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurants',(req,res) => {
    db.collection('restaurants').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


///Connecting with mongodb
MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log('Error While connecting')
    db = client.db('augintern')
    app.listen(port,() => {
        console.log(`App is running on port ${port}`)
    })
})
