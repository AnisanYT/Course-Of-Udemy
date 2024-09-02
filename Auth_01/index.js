const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {expressjwt: jwts} = require('express-jwt')
const User = require('./models/user')

mongoose.connect('mongodb+srv://anisan:Mamatass12@udemycourse.k5pnd.mongodb.net/authenticate?retryWrites=true&w=majority')

const app = express()

app.use(express.json())
console.log(process.env)
const validateJWT = jwts({ 
    secret: process.env.SECRET, 
    algorithms: ['HS256']
})
const signToken = userID => jwt.sign({ _id: userID}, process.env.SECRET)

app.post('/register', async (req, res) => {
    const { body } = req
    try {
        const isUser = await User.findOne({ email: body.email })
        if (isUser){
            return res.status(403).send('Usuario ya existe.')
        }
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt: salt })
        const signed = signToken(user._id)

        res.status(201).send(signed)

    } catch (e){
        console.error(e)
        res.status(500).send(e.message)
    }
})

app.post('/login', async (req, res) => {
    const { body } = req
    try {
        const user = await User.findOne({ email: body.email })
        if (!user) {
            res.status(403).send('User and/or password incorrect!')
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password)
            if (isMatch) {
                const signed = signToken(user._id)
                res.status(200).send(signed)
            } else {
                res.status(403).send('User and/or password incorrect!')
            }
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
})

const findAndAssignUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.auth._id)
        // console.log(req.auth._id)
        if (!user){
            return res.status(401).end()
        }
        req.auth = user
        // res.send(req.auth._id)
        // console.log(await User.findById(req.auth._id))
        next()
    } catch(err){
        next(err)
    }
}

const isAuthenticated = express.Router().use(validateJWT, findAndAssignUser)

app.get('/panchito', isAuthenticated, (req, res) => {
    // throw new Error("HOLA! Este es un error!")
    res.status(200).send(req.auth)
})

app.use((err, req, res, next) => {
    console.log("Mi nuevo error", err.stack)
    next(err)
})


app.use((err, req, res, next) => {
    res.send("Ha ocurrido un error! >:C")
})

app.listen(3000, () => {
    console.log('listening in http://localhost:3000')
})