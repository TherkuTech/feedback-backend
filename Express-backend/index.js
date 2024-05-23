const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

dotenv.config('./env')

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})

try{
  const connect = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected')
  }
  connect();   
}catch(err){
   console.log(err.message)
}