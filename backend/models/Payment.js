const mongoose =require('mongoose')

const paymentSchema = new mongoose.Schema({
    firstname:String,
    email:String,
    address: String,
    city: String,
    state: String,
    zip: String,
    totalPrice: Number,
    cardname:String,
    cardnumber: String,
    expmonth: String,
    expyear: String,
    cvv: String,
   
})

const paymentModel = mongoose.model("payment",paymentSchema)
module.exports =paymentModel