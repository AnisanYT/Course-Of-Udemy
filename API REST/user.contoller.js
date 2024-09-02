const userModule = require('./user')

const User = {
    get: async (req, res) => {
        const { id } = req.params
        const user = await userModule.findOne({_id: id})
        res.status(200).send(user)
    },
    list: async (req, res) => {
        const user = await (userModule.find())
        res.status(200).send(user)
    },
    create: async (req, res) => {
        const user = new userModule(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
    },
    update: async (req, res) => {
        const { id } = req.params
        const user = await userModule.findOne({ _id: id})
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) => {
        const { id } = req.params
        const user = await userModule.findOne({ _id : id})
        if (user){
            await userModule.findByIdAndDelete(id)
        }
        res.sendStatus(204)
    }
}

module.exports = User