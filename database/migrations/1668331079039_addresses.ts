import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('unitNumber')
      table.string('streetAddress').notNullable()
      table.string('city').notNullable()
      table.string('region').notNullable()
      table.integer('postal_code').notNullable()
      table.integer('country_id').notNullable().references('id').inTable('countries')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
