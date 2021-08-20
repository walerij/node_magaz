const express = require("express")


const HomeRouter = require("./routes/home")
const ProductRouter = require("./routes/products")
const app = express()


app.use('/', HomeRouter)
app.use('/products', ProductRouter)





const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log("server started on port:"+PORT)
})