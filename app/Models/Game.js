'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Game extends Model {

    plataforms () {
        return this.belongsToMany('App/Models/Plataform')
        //.pivotTable('game_plataform')
    }

    
}

module.exports = Game
