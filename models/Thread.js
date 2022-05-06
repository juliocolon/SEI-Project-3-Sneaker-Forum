/////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require('../config/database'); 
////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model} = mongoose; 

// make threads schema
const threadSchema = new Schema({
    threadtitle: {type: String,  required: true},
    brandcategory:{
        type: String,
        required: true,
        default: '',
        enum: ["Nike", "Jordan", 'Adidas']
    },
    threadbody:{type: String,  required: true}
}, {
    timestamps: true
}
)

//make shoes model
const Thread = model('Thread', threadSchema); 

//export shoes
module.exports = Thread; 
