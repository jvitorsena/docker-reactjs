const Sequelize = require('sequelize')
const db = require('../config/db')

module.exports = app => {

    const tipos = db.define('tipos', {
        id:             {type: Sequelize.INTEGER(), autoIncrement: true, primaryKey: true},
        name:           {type: Sequelize.STRING(255)},
        isActive:       {type: Sequelize.DataTypes.BOOLEAN, defaultValue: true}
    }, {freezeTableName: true})

    const tarefas = db.define('tarefas',{
        id:             {type: Sequelize.INTEGER(), autoIncrement: true, primaryKey: true},
        descricao:      {type: Sequelize.STRING(255)},
        tiposId:        {type: Sequelize.INTEGER(), defaultValue: "1"},
        isActive:       {type: Sequelize.DataTypes.BOOLEAN, defaultValue: true}
    },{ freezeTableName: true });

    tarefas.belongsTo(tipos, {foreignKey: 'tiposId', allowNull: true})

    const insertTipos = async() => {
        await tipos.create({
            name: "pendente"
        })
        await tipos.create({
            name: "concluido"
        })
    }

    const insertTarefas = async() => {
        await tarefas.create({
            descricao: "Lavar o carro",
        })
        await tarefas.create({
            descricao: "Pintar parede",
        })
        await tarefas.create({
            descricao: "Banho no cachorro",
        })
        await tarefas.create({
            descricao: "Limpar casa",
        })
        await tarefas.create({
            descricao: "Fazer almoço",
            tiposId: 2
        })
        await tarefas.create({
            descricao: "Fazer caminhada",
            tiposId: 2
        })
    }

    insertTipos()
    insertTarefas()
    tipos.sync()
    tarefas.sync()

    module.exports = {tipos, tarefas}
}