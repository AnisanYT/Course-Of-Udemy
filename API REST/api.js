const express = require('express')
const user = require('./user.contoller')
const mongoose = require('mongoose')
const app = express() 
const port = 3000

app.use(express.json()) //Midleware que nos permite convertir en JSON las peticiones que se le hacen a la API.
mongoose.connect('mongodb+srv://anisan:Mamatass12@udemycourse.k5pnd.mongodb.net/myapp?retryWrites=true&w=majority')


//Endpoints
//GET
app.get('/user', user.list) //Estas son las peticiones, cada una realiza una funcion diferentes
                            //de acuerdo al verbo, ya sea: GET, POST, PUT, PATCH o DELETE.
//Cada una usa un controller que hace las funcionalidades de recibir y dar una respuesta segun lo que se solicite.
app.get('/user/:id', user.get)
//POST
app.post('/user/', user.create)
//PUT
app.put('/user/:id', user.update)
//PATCH
app.patch('/user/:id', user.update)
//DELETE
app.delete('/user/:id', user.destroy)

app.use(express.static('app'))//Con este midleware estamos diciendole a express que vaya a buscar una carpeta que se
                                //llama 'app', aqui, es donde nostros guardaremos el 'main.js'

app.get('/', (req, res) => {//este es el endpoint raiz. Donde nosotros tenemos el formulario.
    //__dirname es una variable que nos devuelve la ruta del proyecto, en este caso
    //llegaria hasta el API REST/index.html
    res.sendFile(`${__dirname}/index.html`)
})
//Manejos de errores, rutas que no existen.
app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.')
})
app.listen(port, () => {
    console.log('Aplicacion escuchando en el puerto: ' + port)
})

