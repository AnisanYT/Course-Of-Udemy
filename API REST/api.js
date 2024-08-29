const express = require('express')
const user = require('./user.contoller')
const app = express() 
const port = 3000
//Endpoints
//GET
app.get('/', user.list)
app.get('/:id', user.get)
//POST
app.post('/', user.create)
//PUT
app.put('/:id', user.update)
//PATCH
app.patch('/:id', user.update)
//DELETE
app.delete('/:id', user.destroy)
//Manejos de errores, rutas que no existen.
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.')
})
app.listen(port, () => {
    console.log('Aplicacion escuchando en el puerto: ' + port)
})

