import {Token} from "../models/token.model";
import {IToken} from "../interfaces/token.interface";
import {FilterQuery} from "mongoose";


class TokenRepository {

    public async create(dto: IToken): Promise<IToken> {
        return await Token.create(dto)
    }

    public async findByParams(params:FilterQuery<IToken>):Promise<IToken>{
        return await Token.findOne(params)
    }



}


export const tokenRepository = new TokenRepository();