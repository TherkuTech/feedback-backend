const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const llmRouter = require('./routes/llmRoutes')
const feedRouter = require('./routes/feedRoutes')

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(bodyParser.json())

dotenv.config('./env')

app.use('/users',userRouter)

app.use('/llm',llmRouter)

app.use('/feeds',feedRouter)

try{
  const connect = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database connected')
  }
   connect();   
}catch(err){
   console.log(err.message)
}


app.listen(5000, () => {
  console.log('Server is running on port 5000')
})