const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

// IMPORT ROUTES
const taskRoutes = require("./routes/tasks")

// USE ROUTES
app.use("/api/tasks", taskRoutes)

app.get("/",(req,res)=>{
 res.send("API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
 console.log(`Server running on ${PORT}`)
})
const path = require("path")

app.use(express.static(path.join(__dirname,"public/build")))

app.get("*",(req,res)=>{
 res.sendFile(path.join(__dirname,"public/build/index.html"))
})