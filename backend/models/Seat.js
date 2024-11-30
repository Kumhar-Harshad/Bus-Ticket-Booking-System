const mongoose =require('mongoose')

const seatSchema = new mongoose.Schema({
    
    seat:String,
    
})

const seatModel = mongoose.model("seat",seatSchema)
module.exports =seatModel