const mongoose = require('mongoose')
const userModel = mongoose.model('User', {
    email: {type: String, required: true },
    password: {type: String, required: true },
    salt: {type: String, required: true },
})

module.exports = userModel