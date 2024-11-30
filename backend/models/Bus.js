const mongoose =require('mongoose')

const busSchema = new mongoose.Schema({
        busno: String,
        busname: String,
        busroute: String,
        time:String,
        service: String,
        mode: String
   
})

const busModel = mongoose.model("bus",busSchema)
module.exports = busModel
