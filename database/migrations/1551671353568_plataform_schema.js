'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlataformSchema extends Schema {
  up () {
    this.create('plataforms', (table) => {
      table.increments()
      table.timestamps()
      table.string('name',100).notNullable()
    })
  }

  down () {
    this.drop('plataforms')
  }
}

module.exports = PlataformSchema
