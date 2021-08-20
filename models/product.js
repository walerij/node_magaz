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
   constructor(title,price,desc,img)
   {
       this.title=title
       this.price=price
       this.desc=desc
       this.img=img
       this.status = "wait"
       this.id=uuidv4()
   }

   toJSON(){
       return{
          title: this.title,
          price:this.price,
          desc:this.desc,
          img:this.img,
          id:this.id     


       }
   }



}