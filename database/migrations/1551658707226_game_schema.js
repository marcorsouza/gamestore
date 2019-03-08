'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 100).notNullable()
      table.string('description',400).notNullable()
      table.boolean('active').defaultTo(false)
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GameSchema
