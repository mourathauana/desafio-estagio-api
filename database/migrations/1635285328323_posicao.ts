import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posicao extends BaseSchema {
  protected tableName = 'posicao'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id', { primaryKey: true })
      table.float('latitude', 7).notNullable()
      table.float('longitude', 7).notNullable()
      table.string('endereco', 100).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
