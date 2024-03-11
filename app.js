const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

const db =require('./models/db.js')

app.get("/", async (req, res) => {
    res.send("Página inicial - Alexandre")
});

app.post("/cadastrar", async (req, res) => {
    // console.log(req.body);

    await User.create(req.body)
        .then(() => {
            return res.json ({
                erro: false,
                mensagem: "Usuario cadastrado com sucesso!"
            });
        }).catch(() =>  {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não cadastrado!"
            });
        });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})
