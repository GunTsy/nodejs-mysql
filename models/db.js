const Sequelize = require('sequelize');

const sequelize = new Sequelize("alexandre", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
});

// SÓ UTILIZAR QUANDO ESTIVER EM DESENVOLVIMENTO, EM PRODUÇÃO, RETIRAR!
sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada!")
});

module.exports = sequelize;