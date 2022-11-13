import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'shop_orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id')
      table.integer('payment_method_id').references('id')
      table.integer('shipping_address').references('id')
      table.integer('shipping_method').references('id')
      table.integer('order_status').references('id')
      table.string('orderDate')
      table.string('order_total')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
