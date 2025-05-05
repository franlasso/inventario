const express = require("express")
const holaRoutes =require("./routes/holaMundo.routes")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3006

app.set("port",PORT)
app.use("/api/hola",holaRoutes)

app.get("/",(req,res)=>{
    res.send("Hola mundo")
})

app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`)
})