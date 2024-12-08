import express from 'express'
import dotenv from 'dotenv'
import router from './routes/contactRoutes.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000


app.use('/api/contact',router)

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})