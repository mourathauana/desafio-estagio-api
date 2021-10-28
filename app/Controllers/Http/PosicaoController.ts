// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Posicao from "App/Models/Posicao";

export default class PosicaoController {

    public async index () {
        return Posicao.all();
    }

}
