const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("Главная")
})

app.get('/product',(req,res)=>{
    res.send("Товары")
})


const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log("server started on port:"+PORT)
})