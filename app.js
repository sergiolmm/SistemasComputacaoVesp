const express = require('express')
const app = express()
const port = 3000

// endpoint inicial
app.get('/', (req, res) => {
    res.send("Ola turma")
})

app.listen(port, () =>{
    console.log('Variavel '+ port)
    console.log('Listen on ${port}')
})
