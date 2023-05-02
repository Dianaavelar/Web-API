const express = require('express')
const routes = express.Router()

let db = [
    {'1': {Nome: 'Aline 1', Idade: '25'}},
    {'2': {Nome: 'Juliana 2', Idade: '36'}},
    {'3': {Nome: 'Lucia 3', Idade: '50'}}
]

// Buscar Dados 
routes.get('/', (req,res) => {
    return res.json(db)
})

// Inserir Dados 
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)

})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
        return item
    })
    
    db = newDB
    return res.send(newDB)
})

module.exports = routes