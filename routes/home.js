const {Router} = require('express')

const router = Router()

router.get("/", async (req,res)=>{
   await res.send("Главная страница эл магазина")
}
           
)

module.exports = router