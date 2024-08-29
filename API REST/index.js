const mongoose = require('mongoose')
//Se crea la conexion
mongoose.connect('mongodb+srv://anisan:Mamatass12@udemycourse.k5pnd.mongodb.net/myapp?retryWrites=true&w=majority')
//Se crea un modelo
const User = mongoose.model('User', {
    username: String,
    age: Number
})

const makeUser = async () => {
    const user = new User({username: 'chanchito feliz', age: 21})
    const save = await user.save()
    console.log(save)
}

makeUser()