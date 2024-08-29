const express = require('express')
const app = express() 
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('Chanchito feliz')
})


app.listen(port, () => {
    console.log('Aplicacion escuchando en el puerto: ' + port)
})

