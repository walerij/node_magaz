const {Router} = require('express')

const router = Router()

const Product = require('../models/product')

router.get("/", async (req,res)=>{
    let product = await Product.getAll()  
   await res.render("products",{product})
}
)

router.get("/list",async (req,res)=>{
    await res.render("products")
}         
)

router.get("/add",async (req,res)=>{
    await res.render("add-product")
}         
)


router.post("/add", async (req,res)=>{
     
    let product = new Product(
             req.body.title,
             req.body.price, 
             req.body.img, 
             req.body.desc
        )
       
        await product.save()
        res.redirect('/products') 
      
}         
)

router.get("/:id/edit",async (req,res)=>{
    await res.send("Редактирование одного товара")
}         
)

router.get("/:id/view",async (req,res)=>{
    await res.send("Просмотр одного товара")
}         
)

router.get("/:id/status",async (req,res)=>{
    await res.send("Новый статус одного товара")
}         
)
module.exports = router