/**продукт
 * title - заголовок - наименование товара
 * price - цена
 * desc  - описание
 * img   - изображение
 * status - статус товара (wait - ожидание, public - опубликован, готов к продаже,
 * fail - снят с продажи, sold - продан)
 * 
 */

const {Schema, model} = require('mongoose')

const product = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    desc: String,
    img: String,
    status: {
        type: String,
        required: true
    },
    userID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports=model('Product', product)