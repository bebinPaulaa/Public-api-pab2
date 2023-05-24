const express = require('express')
const app = express()
const  mongoose  = require('mongoose')
const bodyParser = require(body-parser)
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true

}));
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')
const req = require('express/lib/request')
const res = require('express/lib/response')

app.use('/post',postRoutes)

app.get('/', (req, res) => {
res.send('Hello World123!')
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnitfiedTopology: true
})
let db = mongoose.connection

//handle error
db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))

//handle succes
db.once('open', () => {
    console.log('Database is connected')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})