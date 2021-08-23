const {Router} = require('express')

const router = Router()

router.get("/",  (req,res)=>{
    res.render("index",{isActive:true})
}
           
)

module.exports = router