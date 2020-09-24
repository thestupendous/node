/*
  model -
    {
        "name":"person-name",
        "quote":"a quote"
    }
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

connectionString = 'mongodb+srv://user1:mongomongomongo@cluster0.5dmiy.mongodb.net/express-app?retryWrites=true&w=majority'
MongoClient.connect(connectionString, (err,client) => {
    // some steps
    if (err) {
        console.log('error in connecting mongo ',err)
    }
    console.log('successfully connected to mongo')
    const db = client.db('express-app')
    const quotesCollection = db.collection('quotes')

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(results => {
        console.log(results)
        res.send(results)
        })
        .catch(error => console.error(error))
        // ...
    })
        
    app.post('/quotes', (req, res) => {
        objects  = req.body
        quotesCollection.insertOne(objects)
        .then(result => {
//        console.log(result)
        console.log(objects)
        console.log(result)


        res.json({'message':'successfully added record'})
        })

        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
        objects = req.body
        console.log('----------old obj-------\n',objects[0],'\n-----new obj---------\n',objects[1],'\n ',objects[0]['name'])
        quotesCollection.findOneAndReplace({ "name":objects[0]["name"]/*,"quote":objects[0]["quote"]*/},  objects[1])
        .then(result => {
       console.log(result)
        res.json({'message':'successfully Updated record'})
        })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
        objects  = req.body
        quotesCollection.deleteOne({"name":objects['name']})
        .then(result => {
//        console.log(result)
        console.log(objects)
        console.log(result)


        res.json({'message':'successfully deleted record'})
        })

        .catch(error => console.error(error))
    })


})


app.listen(port, function(){
    console.log('listening on ',port)
})
