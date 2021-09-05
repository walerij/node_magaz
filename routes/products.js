const {Router} = require('express')

const router = Router()

const Product = require('../models/product')

router.get("/", async (req,res)=>{
    let product = await Product.find().lean() 
    await res.render("products",{isActive:true, product})
}
)



router.get("/add",async (req,res)=>{
    await res.render("add-product", {isActive:true})
}         
)


router.post("/add", async (req,res)=>{
     
    let product = new Product(
             {
               title: req.body.title,
               price: req.body.price, 
               img: req.body.img, 
               desc: req.body.desc,
               status: "wait"
             }

        )
       
        await product.save()
        res.redirect('/products') 
      
}         
)

router.get("/:id/edit",async (req,res)=>{
    let product = await Product.findById(req.params.id).lean()
    await res.render('edit-products',{
        product
    })
}         
)
router.post('/edit',async(req,res)=>{
    const {id} = req.body
    delete req.body.id
    await Product.findByIdAndUpdate(id, req.body).lean()
    res.redirect("/products")
})
router.get("/:id/view",async (req,res)=>{
   // await res.send("Просмотр одного товара")
   let product = await Product.findById(req.params.id).lean()
   
   res.render('viewfull-product',{product})
}         
)

router.get("/:id/status",async (req,res)=>{
    await res.send("Новый статус одного товара")
}         
)
module.exports = router