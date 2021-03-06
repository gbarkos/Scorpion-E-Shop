var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    paymentIntent: String ,
    method: String,
    details :{
      name : String,
      surname : String,
      email : String,
      phone : String,
      address: {
        line1 : String,
        city : String,
        zip : String,
        state : String
      }
    }, 
    productList:[{
      product: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number
    }],
    extraFee: Number,
    totalPrice : Number
    
});

module.exports = mongoose.model("Order", OrderSchema);
