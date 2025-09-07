import express from 'express'
import 'dotenv/config'
import userRoute from './routes/user.route.js'


const app = express()

const PORT = process.env.PORT;

app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    console.log("server start..",PORT)
})