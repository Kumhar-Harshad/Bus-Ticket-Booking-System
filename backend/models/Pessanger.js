const mongoose =require('mongoose')

const passengerSchema = new mongoose.Schema({
    id:String,
    name:String,
    age: String,
    gender: String,
    number:String,
    from: String,
    to: String,
    date: String,
    seat:String,
    
})

const passengerModel = mongoose.model("passenger",passengerSchema)
module.exports =passengerModel