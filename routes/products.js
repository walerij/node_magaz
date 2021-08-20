const {Router} = require('express')

const router = Router()

router.get("/", async (req,res)=>{
   await res.send("Список товаров")
}
           
)

module.exports = router