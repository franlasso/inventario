require("dotenv").config()

const express = require("express")
const mongoose = require ("mongoose")

const app = express()
const entregasRoutes = require("./routes/entregas.routes")
const PORT = process.env.PORT || 3000

app.set("port",PORT)
app.use(express.json())
app.use("/api/entregas",entregasRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos"))
.catch(err=>console.error("No se pudo conectar a la BD",err))

app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`)
})