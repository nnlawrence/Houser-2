require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log(err))

//endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, console.log(`server running ${ SERVER_PORT }`))