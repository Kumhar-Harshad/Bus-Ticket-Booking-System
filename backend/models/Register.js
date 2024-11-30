const mongoose =require('mongoose')
const jwt = require("jsonwebtoken")

const RegisterSchema = new mongoose.Schema({
    username:String,
    email:String,
    password: String,
    confirmpass: String,
    role: String
})

//Token
RegisterSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign(
            {
                username: this.username,
                email: this.email,
                role: this.role,
            },
            "HARSHADBUS",
            {
                expiresIn: '1h'
            }
        )
        return token;
    } catch (error) {
        console.log(error);
    }
}

const RegisterModel = mongoose.model("singup",RegisterSchema)
module.exports =RegisterModel