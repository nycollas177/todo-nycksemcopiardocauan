const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    console.log("Servidor rodando na porta 3000!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})