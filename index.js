const express = require("express")


const HomeRouter = require("./routes/home")
const ProductRouter = require("./routes/products")
const app = express()
/**представления */
const expresshbs = require("express-handlebars")
const hbs =expresshbs.create({
    defaultLayout:"main",
    extname:"hbs"
})
/**представления подключены */

/**подключаем hbs к модели */
app.engine('hbs', hbs.engine)
app.set("view engine","hbs")
app.set("views","views")
/**подключено */

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/', HomeRouter)
app.use('/products', ProductRouter)





const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log("server started on port:"+PORT)
})