const User = {
    get: (req, res) => {
        res.status(200).send(req.params)
    },
    list: (req, res) => {
        res.status(200).send('Hola chanchito!')
    },
    create: (req, res) => {
        res.status(201).send('Creando un chanchito!')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando chanchito!')
    },
    destroy: (req, res) => {
        res.status(204).send('Borrando al chanchoto!')
    }
}

module.exports = User