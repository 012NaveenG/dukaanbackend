import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import fileUpload from 'express-fileupload'
export const app = express()
app.use(cookieParser())

app.use(cors())
app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(fileUpload(
    {
        useTempFiles:true
    }
))
app.use(express.static("public"))


import userRouter from './Routes/user.routes.js'
import productRouter from "./Routes/products.routes.js";


app.use('/api/user', userRouter)
app.use('/api/v1/product', productRouter)


