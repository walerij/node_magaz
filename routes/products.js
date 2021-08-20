const {Router} = require('express')

const router = Router()

router.get("/", async (req,res)=>{
   await res.send("Список товаров")
}
)

router.get("/list",async (req,res)=>{
    await res.send("Вывод списка товаров")
}         
)

router.get("/add",async (req,res)=>{
    await res.send("Добавление товара")
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