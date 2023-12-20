import { app } from "./app.js";
import Dotenv from "dotenv";
Dotenv.config('../.env')
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to the Database!!')).catch((err) => console.log('Database Connection Error ::' + err))

app.get('',(req,res)=>res.send('This is Home Page'))
app.listen(process.env.PORT, () => console.log(`Server is listening at ${process.env.BASE_URL}:${process.env.PORT}`))