const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())
app.use(express.static('Images'));
app.use(express.urlencoded({ extended: true }))
app.use( (req, res, next) => { 
    res.header( "Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept" ) 
    next();
 }) // utilisation du cors pour autoriser toute les origine de connexionx au serveur
 app.use(cors())



app.options((req,res,next) =>{
    res.end()
})
// routers
const router = require('./routes/productRouter.js')

app.use('/api', router)



//static Images Folder

app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 3000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})