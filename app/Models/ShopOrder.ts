import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ShopOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public shippingMethod: number

  @column()
  public orderStatus: number

  @column()
  public paymentMethodId: number

  @column()
  public shippingAddress: number
  
  @column()
  public orderDate: string
  
  @column()
  public orderTotal: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
