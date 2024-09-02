const mongoose = require('mongoose')
const { update } = require('./user.contoller')
//Se crea la conexion
mongoose.connect('mongodb+srv://anisan:Mamatass12@udemycourse.k5pnd.mongodb.net/myapp?retryWrites=true&w=majority')
//Se crea un modelo
const User = mongoose.model('User', {
    username: String,
    age: Number
})

const makeUser = async () => {
    const user = new User({username: 'chanchito triste', age: 12})
    const save = await user.save()
    console.log(save)
}

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

const buscarUser = async () => {
    const user = await User.find({username: 'chanchito feliz'})
    console.log(user)
}

const userOne = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
}

const updateUser = async () =>{
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
    user.age = 22
    await user.save()
}

const deleteUser = async () =>{
    const user = await User.findOne({username: 'chanchito triste'})
    console.log(user)
    if (user){
        await user.deleteOne()
    }
}
deleteUser()