/**продукт
 * title - заголовок - наименование товара
 * price - цена
 * desc  - описание
 * img   - изображение
 * status - статус товара (wait - ожидание, public - опубликован, готов к продаже,
 * fail - снят с продажи, sold - продан)
 * 
 */

const {v4:uuidv4} = require('uuid')
const fs = require('fs')
const path = require('path')
const {resolve} = require('path')

const {rejects} = require('assert')


class Product {
   constructor(title,price,img,desc)
   {
       this.title=title
       this.price=price
       this.img=img
       this.desc=desc       
       this.status = "wait"
       this.id=uuidv4()
   }

   toJSON(){
       return{
          title: this.title,
          price:this.price,
          img:this.img,
          desc:this.desc,
          status: this.status,
          id:this.id 
       }
   }
   static getAll(){
       
         return new Promise((resolve,rejects)=>{

            fs.readFile(
                path.join(__dirname,'..','data','product.json'),
                'utf-8',
                (err,content)=>{
                    if(err) {rejects(err)}
                    else{
                        
                        resolve(JSON.parse(content))
                    }
                }
            )



         })
   }

   static async getById(id)
   {
        let product = await Product.getAll() 
        return product.find(c=>c.id===id)
   }
   async save()
   {
      
        let products = await Product.getAll()
        
        products.push(this.toJSON())
        fs.writeFile(
            path.join(__dirname,'..','data','product.json'),
            JSON.stringify(products),
            (err)=>{
                if(err) {rejects(err)}
                else resolve()
            }

        )



   }





}

module.exports=Product