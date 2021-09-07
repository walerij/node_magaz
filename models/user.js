const {Schema, model} = require('mongoose')

const UserSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cart:{
        items:[{
            count:{
                type:Number,
                default:1
            },
            productId:{
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }

        }]
    }

})

module.exports = model("User", UserSchema)