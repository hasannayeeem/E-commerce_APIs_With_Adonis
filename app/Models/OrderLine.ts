import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrderLine extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public productItemId: number

  @column()
  public orderId: number
  
  @column()
  public qty: string
  
  @column()
  public price: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
