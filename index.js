const express = require("express")

const mongoose = require('mongoose')

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



async function start(){



    try {
        const url ='mongodb+srv://walera:04031979@cluster0.ljues.mongodb.net/eshop'
        await mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true })
        //useFindAndModify: false,
        app.listen(PORT,()=>{
            console.log("server started on port:"+PORT)
        })
    }
    catch(e)
    {
        console.log("Err: "+e)
    }
}

start()