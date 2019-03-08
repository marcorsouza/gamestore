'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamePlataformSchema extends Schema {
  up () {
    this.create('game_plataform', (table) => {
      table.integer("game_id")
        .unsigned()
        .index('game_id')
      table.integer("plataform_id")
        .unsigned()
        .index('plataform_id')
      table.foreign("game_id").references("games.id").onDelete("cascade")
      table.foreign("plataform_id").references("plataforms.id").onDelete("cascade")
    })
  }

  down () {
    this.drop('game_plataform')
  }
}

module.exports = GamePlataformSchema
