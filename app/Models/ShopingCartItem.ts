import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ShopingCartItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cartId: number

  @column()
  public productItemId: number
  
  @column()
  public qty: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
