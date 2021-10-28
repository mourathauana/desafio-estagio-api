import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Posicao extends BaseModel {
    public static table = 'posicao'
    
    @column({ isPrimary: true })
    public id: number

    @column()
    public latitude: number

    @column()
    public longitude: number

    @column()
    public endereco: string
}