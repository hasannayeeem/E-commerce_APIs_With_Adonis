import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProductItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productId: number

  @column()
  public SKU: string

  @column()
  public quantityInStock: number

  @column()
  public productImage: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
