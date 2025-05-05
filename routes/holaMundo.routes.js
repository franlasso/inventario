const express =require("express")
const router = express.Router()
const holaController = require("../controllers/holaMundo.controllers")

router.get("/",holaController.holaMUndo)
router.get("/esteban", (req,res)=>{
    res.send("Hola Esteban")
})
router.get("/Cesar", (req,res)=>{
    res.send("Hola Cesar")
})

module.exports = router