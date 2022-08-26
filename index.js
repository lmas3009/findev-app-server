import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import consola from "consola"
import dotenv from "dotenv"
import routes from "./routes/index.js"


const {success,error} = consola
const PORT = process.env.PORT || 3001

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use("/findev/api/v1/",routes)

dotenv.config();


app.get("/",(req,res)=>{
    res.send("Welcome to the findev-app server")
})


app.listen(PORT,()=>{
    success({
        message:`Server is running on port ${PORT}`,
        badge:true
    })
})

