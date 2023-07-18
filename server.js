import express from "express"
import dotenv, { config } from "dotenv"
import morgrn from 'morgan'
import mongoose from "mongoose"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoute from './routes/productRoute.js'


//configure env
dotenv.config()

//database congig
connectDB();

//rest object
const app=express();

//middelewares
app.use(cors())
app.use(express.json())
app.use(morgrn('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoute)


//rest api
app.get('/',(req,res)=>{
    res.send(
        '<h1>Welcome to Ecommerse app</h1>'
    )
})


//port
const PORT=process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})